const Placeholder = () => (
  <div className="col-3">
    <div className="row">
      <p className="placeholder-glow col-4">
        <span className="placeholder col-4 rounded-circle" style={{ height: 100, width: 100 }} />
      </p>

      <p className=" placeholder-glow col-8 mt-10">
        <span className="placeholder col-4" />
        <span className="placeholder col-4" />
        <span className="placeholder col-6" />
        <span className="placeholder col-8" />
      </p>
    </div>
  </div>
)

function TopTraderPlaceholder() {
  return (
    <div className="tf-section top-seller" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="ibthemes-container">
        <div className="row">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div className="row">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div className="row">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div className="row">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
    </div>
  )
}

export default TopTraderPlaceholder
