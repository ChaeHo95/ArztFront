import React from 'react'
import '../Styles/Modal.css'

function Modal({ open, children }){
    return <div className={`Modal ${open? "open": "close"}`}>{children}</div>
}

export default Modal;

Modal.defaultProps = {
    open: false
}