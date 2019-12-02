import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {


    
    

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee.id/img/content/img_sapi.jpg" alt="" />
                </div>
                <p className="product-title">Daging Sapi Wagyu</p>
                <p className="product-price">Rp 500,000</p>
                <Counter onCounterChange={(value)=>this.props.onCounterChange(value)} />
            </div>
        )
    }
}
export default CardProduct;