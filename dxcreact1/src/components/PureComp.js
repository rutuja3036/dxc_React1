import React1, { PureComponent } from 'react'
    class PureComp extends PureComponent {
    render() {
        console.log('--PURE component--')
        return (
            <div>
                pure component {this.props.name}
            </div>
        )
    }
}
export default PureComp