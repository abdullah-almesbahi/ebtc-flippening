const Placeholder = () => (
  <div className="col-3" style={{ marginRight: 10, marginLeft: 10 }}>
    <div className="card">
      <div className="card-body  " style={{ backgroundColor: '#14141f' }}>
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6" />
        </h5>
        <p className="card-text placeholder-glow" style={{ paddingTop: 70, paddingBottom: 70 }}>
          <span className="placeholder col-7" />
          <span className="placeholder col-4" />
          <span className="placeholder col-4" />
          <span className="placeholder col-6" />
          <span className="placeholder col-8" />
        </p>
      </div>
    </div>
  </div>
)

function PostitionsPlaceholder() {
  return (
    <div className="" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="d-flex flex-row justify-content-around">
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  )
}

export default PostitionsPlaceholder
