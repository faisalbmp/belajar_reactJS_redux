import React, { Component } from "react";

class CardProduct extends Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }

    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee.id/img/content/img_sapi.jpg" alt="" />
                </div>
                <p className="product-title">Daging Sapi Wagyu</p>
                <p className="product-price">Rp 500,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}
export default CardProduct;