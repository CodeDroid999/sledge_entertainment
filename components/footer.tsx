import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
        <footer className="container-fluid footer_section">
          <p className="text-white">
            &copy; <span id="currentYear"></span> All Rights Reserved.
            <a href="https://www.youtube.com/@SilusSledgeAmbani">
              Sledge Entertainment LTD</a>
          </p>
        </footer>
  )
}

export default Footer
