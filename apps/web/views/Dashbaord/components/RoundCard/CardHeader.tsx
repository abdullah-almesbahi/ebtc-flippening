import type { ReactElement } from 'react'

type Status = 'expired' | 'live' | 'next' | 'soon' | 'canceled' | 'calculating'

interface CardHeaderProps {
  status: Status
  title: string
  epoch: number
  icon?: ReactElement
}

const HEADER_HEIGHT = '37px'

type FallbackColor = 'text' | 'textSubtle'

const getTextColorByStatus = (status: Status, fallback: FallbackColor): string => {
  switch (status) {
    case 'expired':
      return '#EB5E59'
    case 'next':
      return 'primary'
    case 'live':
      return '#42C984'
    case 'canceled':
    case 'calculating':
      return 'danger'
    default:
      return fallback
  }
}

const CardHeader: React.FC<React.PropsWithChildren<CardHeaderProps>> = ({ status, title, epoch, icon }) => {
  const textColor = getTextColorByStatus(status, 'text')
  const isLive = status === 'live'

  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 " style={{ height: HEADER_HEIGHT }}>
      <div className="d-flex align-items-center">
        {icon}
        <span className={`ml-10 fw-bold ${isLive ? 'fw-bolder' : ''}`} style={{ color: textColor }}>
          {title}
        </span>
      </div>

      <div>
        <span className="fw-bold text-grey-50">{`#${epoch}`}</span>
      </div>
    </div>
  )
}

export default CardHeader
