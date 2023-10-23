import { useState } from 'react'
import { BetPosition } from '@/store/types'

interface SetPositionCardProps {
  position: BetPosition
  togglePosition: () => void
  epoch: number
  onBack: () => void
  onSuccess: (hash: string) => Promise<void>
}

const SetPositionCard: React.FC<React.PropsWithChildren<SetPositionCardProps>> = ({
  position,
  togglePosition,
  epoch,
  onBack,
  onSuccess,
}) => {
  const [value, setValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [percent, setPercent] = useState(0)

  // Clear value
  const handleGoBack = () => {
    setValue('')
    setPercent(0)
    onBack()
  }

  return (
    <div className="">
      <div className="p-3">
        <a className="icon-link icon-link-hover link-underline-success" href="#" onClick={handleGoBack}>
          <i
            className={`fa fa-arrow-left text-${position === BetPosition.BULL ? 'up' : 'down'}`}
            style={{ marginRight: 10 }}
          />
        </a>
        <span className={`fw-bolder fs-6 ml-5 text-${position === BetPosition.BULL ? 'up' : 'down'}`}>Back</span>
      </div>

      <div className="mr-3 ml-3">
        <div className="d-flex justify-content-between mb-2">
          <input
            className="form-control rounded-0 rounded-start"
            placeholder="00.00"
            style={{ padding: '5px 0 5px 5px' }}
            type="text"
          />
          <select
            className="form-select rounded-0 rounded-end"
            id="inputGroupSelect02"
            style={{
              width: 30,
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid rgba(138, 138, 160, 0.3)',
            }}
          >
            <option value="stETH">stETH</option>
            <option value="ETH">ETH</option>
            <option value="USDC">USDC</option>
          </select>
        </div>

        <div className="d-flex flex-row justify-content-between">
          <span className="mt-10 fw-6"> Ratio</span>
          <div aria-label="Basic radio toggle button group" className="btn-group" role="group">
            <input autoComplete="off" className="btn-check" id="raito1" name="raito" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="raito1">
              125%
            </label>

            <input autoComplete="off" className="btn-check" id="raito2" name="raito" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="raito2">
              150%
            </label>

            <input autoComplete="off" className="btn-check" id="raito3" name="raito" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="raito3">
              175%
            </label>
            <input autoComplete="off" className="btn-check" id="raito4" name="raito" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="raito4">
              200%
            </label>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between mt-1">
          <span className="fw-6 mt-10">Laverage</span>
          <div aria-label="Basic radio toggle button group" className="btn-group" role="group">
            <input autoComplete="off" className="btn-check" id="laverage1" name="laverage" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="laverage1">
              1x
            </label>

            <input autoComplete="off" className="btn-check" id="laverage2" name="laverage" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="laverage2">
              2x
            </label>

            <input autoComplete="off" className="btn-check" id="laverage3" name="laverage" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="laverage3">
              3x
            </label>
            <input autoComplete="off" className="btn-check" id="laverage4" name="laverage" type="radio" />
            <label className="btn btn-dark btn-sm px-2" htmlFor="laverage4">
              4x
            </label>
          </div>
        </div>

        <div className="d-grid gap-2 mt-2">
          <span className="m-auto fs-5 fw-bold">{position === BetPosition.BULL ? 'BTC beat ETH' : 'ETH beat BTC'}</span>
          <button className={`btn btn-${position === BetPosition.BULL ? 'success' : 'danger'} mt-10`} type="button">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default SetPositionCard
