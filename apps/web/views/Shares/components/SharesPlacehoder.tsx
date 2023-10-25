const Placeholder = () => (
  <li className="box-recent-post justify-content-between align-items-center">
    <div className="w-100 d-flex flex-row">
      <div className="avatar">
        <p className="placeholder-glow ">
          <span className="placeholder col-4 rounded-circle" style={{ height: 100, width: 100 }} />
        </p>
      </div>
      <div className="avatar" style={{ marginLeft: -20 }}>
        <p className="placeholder-glow ">
          <span className="placeholder col-4 rounded-circle" style={{ height: 100, width: 100 }} />
        </p>
      </div>
    </div>
    <div className="col-4  " style={{ width: 200, height: '100%' }}>
      <p className=" placeholder-glow col-8  mt-10">
        <span className="placeholder col-4" />
        <span className="placeholder col-4" />
        <span className="placeholder col-6" />
        <span className="placeholder col-8" />
      </p>
    </div>
  </li>
)

function SharesPlaceholder() {
  return (
    <>
      <Placeholder />
      <Placeholder />
    </>
  )
}

export default SharesPlaceholder
