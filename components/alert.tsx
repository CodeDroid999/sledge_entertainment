import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div className="header_top">
    <div className="container-fluid">
      <div className="contact_link-container">
        <a href="" className="contact_link1">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span className="pl-2">
            Nairobi, Kenya </span>
        </a>
        <a href="" className="contact_link2">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>
            Call : (+254) 719 230590
          </span>
        </a>
        <a href="mailto:sledgeentertainment8@gmail.com" className="contact_link3">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>sledgeentertainment8@gmail.com
          </span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Alert
