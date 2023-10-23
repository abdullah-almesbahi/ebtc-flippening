import Countdown from 'react-countdown'
import CardHeader from './RoundCard/CardHeader'
import Card from './Card'
import type { NodeRound } from '@/store/types'

interface SoonRoundCardProps {
  round: NodeRound
}

export default function SoonRoundCard({ round }: SoonRoundCardProps): JSX.Element {
  const renderer = ({ days, hours, minutes, seconds, completed }: any): JSX.Element | string => {
    if (completed) {
      return 'Completed'
    }
    return (
      <p className="js-countdown">
        <span className="countdown__value">{days}d</span>
        <span className="countdown__label">:</span>
        <span className="countdown__value">{hours}h</span>
        <span className="countdown__label">:</span>
        <span className="countdown__value">{minutes}m</span>
        <span className="countdown__label">:</span>
        <span className="countdown__value">{seconds}s</span>
      </p>
    )
  }

  return (
    <Card>
      <CardHeader epoch={round.epoch} icon={<i className="fa fa-clock text-default" />} status="soon" title="Later" />

      <div className="p-4">
        <div className="text-grey-50 fs-7  mt-20">ENTRY START</div>
      </div>

      <div className="tf-item-details style-2">
        <div className="content-right">
          <div className="meta-item-details">
            <Countdown date={Date.now() + 1000 * 60 * 60 * 24 * 4.343} renderer={renderer} />
          </div>
        </div>
      </div>
    </Card>
  )
}
