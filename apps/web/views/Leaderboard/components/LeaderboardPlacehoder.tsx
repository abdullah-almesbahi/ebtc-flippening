const Placeholder = () => (
  <tr className="rows">
    <td>
      <div className="column">
        <span>
          {' '}
          <span className="placeholder col-8" />
        </span>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="media ">
          <p className="placeholder-glow col-4">
            <span className="placeholder col-4 rounded-circle" style={{ height: 100, width: 100 }} />
          </p>
        </div>
        <div className="infor-item flex column1 align-items-center">
          <div className="content-collection">
            <h5 className="title">
              <span className="placeholder col-8" />
            </h5>
          </div>
        </div>
      </div>
    </td>
    <td>
      <span className="placeholder col-8" />
      <span className="placeholder col-8" />
    </td>
    <td>
      <div className="column">
        <span className="placeholder col-8" />
      </div>
    </td>
    <td>
      <div className="column">
        <span className="placeholder col-8" />
      </div>
    </td>
    <td>
      <div className="column">
        <span className="placeholder col-8" />
      </div>
    </td>
    <td>
      <div>
        <span>View</span>
      </div>
      <div className="mt-4">
        <a className="sc-button fl-button pri-3" href="#" style={{ borderRadius: 20 }}>
          <span>Buy Shares</span>
        </a>
      </div>
    </td>
  </tr>
)

function LeaderboardPlacehoder() {
  return (
    <>
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </>
  )
}

export default LeaderboardPlacehoder
