import React from 'react'
import './_Modal.scss'
import './_Form.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import ShibaInu from '../../images/shiba-inu1.gif'

class Modal extends React.Component {
  render() {
    return (
      <div className="ln-modal" role="dialog">
        <div className="ln-modal-container">
            <img src={ShibaInu} alt="Shiba Inu" />
        </div>
        <div className="ln-modal-container">
          <header className="ln-modal__header">
            <h1 className="ln-modal__header__title">Modal Title</h1>
            <button><FontAwesomeIcon icon={faTimes}/></button>
          </header>
          <div className="ln-modal__body">
            <form className="ln-form">
              <input className="ln-form__field" type="text" aria-label="Your Name" placeholder="your name" required></input>
              <input className="ln-form__field" type="text" aria-label="Your Email Address" placeholder="your email address" required></input>
              <textarea className="ln-form__textarea" placeholder="your message" required></textarea>
            </form>
          </div>
          <div className="ln-modal__footer">
            <button>cancel</button>
            <button>send</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal