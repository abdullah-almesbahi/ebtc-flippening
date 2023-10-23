export default function SubscribeForm() {
  return (
    <form className="form-submit">
      <input className="email" name="email" placeholder="info@yourgmail.com" required type="email" />
      <button id="submit" name="submit" type="submit">
        <i className="icon-fl-send" />
      </button>
    </form>
  )
}
