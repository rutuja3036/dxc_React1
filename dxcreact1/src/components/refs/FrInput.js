import React1 from 'react'

/* function FrInput() {
    return (
        <div>
           <input type = "text"/> 
        </div>
    )
} */

const FrInput =  React1.forwardRef((props,ref) => {
    return(
        <div>
            <input type = "text" ref = {ref}/>
        </div>
    )
})

export default FrInput