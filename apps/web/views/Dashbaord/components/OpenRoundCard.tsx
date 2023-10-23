import { useState } from 'react'
import CardFlip from './CardFlip'
import CardHeader from './RoundCard/CardHeader'
import SetPositionCard from './SetPositionCard'
import Card from './Card'
import { BetPosition } from '@/store/types'
import type { NodeRound } from '@/store/types'

interface OpenRoundCardProps {
  round: NodeRound
}

interface StateType {
  isSettingPosition: boolean
  position: BetPosition
}

export default function OpenRoundCard({ round }: OpenRoundCardProps): JSX.Element {
  const [state, setState] = useState<StateType>({
    isSettingPosition: false,
    position: BetPosition.BULL,
  })

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

  const handleSuccess = async (hash: string) => {}

  return (
    <CardFlip height="300px" isFlipped={isSettingPosition}>
      <Card>
        <div className="d-flex flex-column">
          <CardHeader epoch={round.epoch} icon={<i className="fa fa-play text-default" />} status="next" title="Next" />

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
        </div>
      </Card>
      <Card>
        <SetPositionCard
          epoch={round.epoch}
          onBack={handleBack}
          onSuccess={handleSuccess}
          position={position}
          togglePosition={togglePosition}
        />
      </Card>
    </CardFlip>
  )
}
