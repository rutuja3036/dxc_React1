import React1 from 'react'
import ReactDOM  from 'react-dom'

/**
 * 
 * @returns 
 */
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1> portals demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo