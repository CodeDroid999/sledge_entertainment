import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-blue-800 border-t border-neutral-200 pt-2 pb-2">
      <Container>

        <footer className="container-fluid footer_section">
          <p className="text-white">
            &copy; <span id="currentYear"></span> All Rights Reserved.
            <a href="https://www.youtube.com/@SilusSledgeAmbani">
              Sledge Entertainment LTD</a>
          </p>
        </footer>
      </Container>
    </footer>
  )
}

export default Footer
