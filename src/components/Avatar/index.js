import React from 'react'
import './_Avatar.scss'

class Avatar extends React.Component {
  render() {
    const {image} = this.props

    const avatarStyle = {
      backgroundImage: `url(${image})`
    }

    return (
      <div className="ln-avatar" style={avatarStyle}>
      </div>
    )
  }
}

export default Avatar 