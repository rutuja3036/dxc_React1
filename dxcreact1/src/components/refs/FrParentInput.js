import React1, { Component } from 'react'
import FrInput from './FrInput'

 class FrParentInput extends Component {
     constructor(props) {
         super(props)

       this.inputRef = React1.createRef()
     }

     clickHandler = () => {
         this.inputRef.current.focus()
     }

    render() {
        return (
            <div>
                <FrInput ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}>focus input</button>
            </div>
        )
    }
}

export default FrParentInput