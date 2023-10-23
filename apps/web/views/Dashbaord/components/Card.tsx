export default function Card({ children }): JSX.Element {
  return (
    <div className="slider-item">
      <div className="sc-card-product explode style2 p-0" style={{ minHeight: 300 }}>
        {children}
      </div>
    </div>
  )
}
