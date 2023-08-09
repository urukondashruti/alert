import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="con3">
      <div className="con">{children}</div>
      <GrFormClose className="icon" />
    </div>
  )
}
export default Notification
