import React, { Component, Fragment } from "react";
import './Product.css'
import CardProduct from "./CardProduct/CardProduct";
import {connect} from 'react-redux'
import { GlobalConsumer } from "../../../context/context";
// import {RootContext} from '../../Home/Home'

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.png" alt="" />
                    </div>
                    <div className="trolley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct /* onCounterChange={(value)=> this.handleCounterChange(value)} */ />
            </Fragment>
        )
    }
}

const mapStateToProps= state => {
    return{
        order: state.totalOrder
    }
}

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);