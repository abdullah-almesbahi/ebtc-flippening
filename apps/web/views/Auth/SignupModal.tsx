import SignupWizard from '.'

export default function SignupModal(): JSX.Element {
  return (
    <div aria-hidden="true" aria-labelledby="dialog" className="modal fade popup" id="popup_signup" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button aria-label="Close" className="close" data-bs-dismiss="modal" type="button">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body space-y-20 pd-40">
            <SignupWizard />
          </div>
        </div>
      </div>
    </div>
  )
}
