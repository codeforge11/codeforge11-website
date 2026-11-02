import { AboutMe } from "../data"

function Footer() {
  return (
    <footer className="footer">
      <span className="mono footerCredit">
       Made with ☕ by ©{AboutMe.pseudonym} {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer