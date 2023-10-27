import { useState } from 'react'
import CardFlip from './CardFlip'
import CardHeader from './RoundCard/CardHeader'
import SetPositionCard from './SetPositionCard'
import Card from './Card'
import { BetPosition } from '@/store/types'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'
import { useToast } from '@/contexts/ToastsContext'

interface OpenRoundCardProps {
  data: DashboardDataQuery['rounds'][0]
  hasEnteredUp: boolean
  hasEnteredDown: boolean
  betAmount: DashboardDataQuery['rounds'][0]['bets'][0]['amount']
}

interface StateType {
  isSettingPosition: boolean
  position: BetPosition
}

export default function OpenRoundCard({ data, hasEnteredUp, hasEnteredDown }: OpenRoundCardProps): JSX.Element {
  const [state, setState] = useState<StateType>({
    isSettingPosition: false,
    position: BetPosition.BULL,
  })
  const { toastSuccess } = useToast()

  const { isSettingPosition, position } = state

  const handleBack = () => {
    setState((prevState) => ({
      ...prevState,
      isSettingPosition: false,
    }))
  }

  const handleSetPosition = (newPosition: BetPosition) => {
    setState((prevState) => ({
      ...prevState,
      isSettingPosition: true,
      position: newPosition,
    }))
  }

  const togglePosition = () => {
    setState((prevState) => ({
      ...prevState,
      position: prevState.position === BetPosition.BULL ? BetPosition.BEAR : BetPosition.BULL,
    }))
  }

  const handleSuccess = async (hash: string) => {
    handleBack()

    toastSuccess(
      'Success!',
      <div>
        {hasEnteredUp ? 'BTC beat ETH' : 'ETH beat BTC'} position entered. Your transaction hash is {hash}
      </div>,
    )
  }

  const getHasEnteredPosition = () => {
    if (hasEnteredUp || hasEnteredDown) {
      return false
    }

    if (data.lockPrice !== '0') {
      return false
    }

    return true
  }

  const canEnterPosition = getHasEnteredPosition()

  return (
    <CardFlip height="300px" isFlipped={isSettingPosition}>
      <Card>
        <div className="d-flex flex-column">
          <CardHeader epoch={data.epoch} icon={<i className="fa fa-play text-default" />} status="next" title="Next" />
          {canEnterPosition ? (
            <div className="p-4">
              <div className="text-grey-50 mt-20 fs-7">PLACE YOUR BET</div>
              <div className="d-grid gap-4 col-12 mx-auto" style={{ marginTop: 20 }}>
                <button
                  className="btn btn-lg fw-bold btn-success"
                  onClick={() => {
                    handleSetPosition(BetPosition.BULL)
                  }}
                  type="button"
                >
                  BTC beat ETH
                </button>
                <button
                  className="btn btn-lg fw-bold btn-danger"
                  onClick={() => {
                    handleSetPosition(BetPosition.BEAR)
                  }}
                  type="button"
                >
                  ETH beat BTC
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="text-grey-50 mt-20 fs-7">ENTERED</div>
              <div className="d-grid gap-4 col-12 mx-auto" style={{ marginTop: 20 }}>
                <button
                  className={`btn btn-lg disabled fw-bold btn-${hasEnteredUp ? 'success' : 'danger'}`}
                  type="button"
                >
                  {hasEnteredUp ? 'BTC beat ETH' : 'ETH beat BTC'}
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
      <Card>
        <SetPositionCard
          epoch={data.epoch}
          onBack={handleBack}
          onSuccess={handleSuccess}
          position={position}
          togglePosition={togglePosition}
        />
      </Card>
    </CardFlip>
  )
}
