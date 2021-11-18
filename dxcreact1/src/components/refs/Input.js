import React1, { Component } from 'react'

 class Input extends Component {
     constructor(props) {
         super(props)
            this.ipRef = React1.createRef()

     }

     focusInput(){
         this.ipRef.current.focus()
     }

    render() {
        return (
            <div>
                <input type ="text" ref ={this.ipRef}/>
            </div>
        )
    }
}

export default Input