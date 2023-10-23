export default function BuyShareModal(): JSX.Element {
  return (
    <div aria-hidden="true" aria-labelledby="dialog" className="modal fade popup" id="popup_buy_share" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button aria-label="Close" className="close" data-bs-dismiss="modal" type="button">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body space-y-20 pd-40">
            <h3>Buy a Share</h3>
            <p className="text-center">
              Buy 1 share for
              <span className="price color-popup"> 4.89 ETH</span>
            </p>
            {/* <input className="form-control" placeholder="00.00 ETH" type="text" />
            <div className="hr" /> */}
            <div className="d-flex justify-content-between">
              <p> Amount:</p>
              <p className="text-right price color-popup">$4058.56</p>
            </div>
            <div className="d-flex justify-content-between">
              <p> Service free:</p>
              <p className="text-right price color-popup">0.01 ETH</p>
            </div>
            <div className="d-flex justify-content-between">
              <p> Total (including fees):</p>
              <p className="text-right price color-popup">4.89 ETH</p>
            </div>
            <a
              aria-label="Close"
              className="btn btn-success"
              data-dismiss="modal"
              data-target="#popup_bid_success"
              data-toggle="modal"
            >
              Complate Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
