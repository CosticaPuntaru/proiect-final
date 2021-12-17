import React { Component } from "react";
import { withRouter } from 'react-router'

class ProductDetailsClass extends Component {
    render() {
        return (
            <div>
                detalii pentru produsl {this.props.match.params.name}
            </div>
        )
    }
}

export default withRouter(ProductDetailsClass)
