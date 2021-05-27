import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar_container'
import ReviewCreateContainer from './reviews/new_review_container';
import ReviewIndexContainer from './reviews/review_index_container';
import '@fortawesome/fontawesome-free/js/all.js';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.product

        this.state = {
            quantity: 1
        }
        this.haddToCart = this.haddToCart.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    haddToCart(e) {
        // e.preventDefault()
        // // debugger 
        // // this.props.history.push('/cart')
        // let cartsProducts = {
        //     product_id: this.props.product.id,
        //     quantity: 1
        // }
  
        // if (this.props.isLoggedIn) {
        //     // debugger
        //     this.props.addToCart(cartsProducts).then(() => {
                    
        //             this.props.history.push('/cart')
                     
        //         });

        // } else {
  
        //     this.props.history.push('/login')
        // }
         
        e.preventDefault();
         
        const purchase = {
            
            product_id: this.props.product.id,
            quantity: this.state.quantity
        }

     if (this.props.isLoggedIn) {
         this.props.createPurchase(purchase).then(() =>
             this.props.history.push('/cart'))
     } else {
         this.props.history.push('/login')
     }
    }
    

    render() {
        
        if (this.props.product === undefined) return null
        // debugger 
        const reviewButton = (this.props.isLoggedIn) ? (
            <Link to={`/review/create-review`}>
                <button className="review-button">Write a customer review</button></Link>
        ) : (
            <Link to={"/login"}>
                <button className="review-button">Write a customer review</button>
            </Link>
        )

        return (
            <div>
                <NavBar />
                <div className="show-page-div">
                    <div className="show-page-top">
                        <div className="show-page-middle-left-cont">

                                <div className="show-page-left">
                                    {/* <img src={window.kobePic} alt="Kobe Jersey"/> */}
                                    <img src={this.props.product.photos[0]} alt=""/>
                                </div>

                                <div className="show-page-middle">
                                    <div className="show-page-middle-top">
                                        <div className="show-page-middle-product-name">{this.props.product.name}</div>
                                        {/* <div className="show-page-middle-ratings">
                                                <div>⭐</div>
                                                &nbsp;
                                                &nbsp;
                                                <div>1000 ratings</div>
                                        </div> */}

                                        <div className="show-page-middle-price-container">
                                            <div className="show-page-price-text">Price:</div>
                                            &nbsp;
                                            <div className="show-page-middle-price">{this.props.product.price}</div>
                                            &nbsp;
                                            <div className="show-page-middle-price-prime-logo">
                                                <img src={window.primeLogo} alt="logo"/>
                                            </div>
                                            &nbsp;
                                            <div className="show-page-middle-freereturns">
                                                & FREE Returns
                                            </div>
                                        </div>
                                   
                                    </div>

                                    <div className="show-page-middle-bottom">
                                        <div className="show-page-middle-description-title">
                                            About this item
                                        </div>
                                        <ul className="show-page-middle-description">
                                            <li>{this.props.product.description}</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>

                        <div className="show-page-right">
                            <div className="show-page-right-inner">
                                <div className="show-page-right-container">
                                    <div className="show-page-right-price">
                                        ${this.props.product.price}
                                    </div>
                                    <div className="show-page-right-prime-and-ship">
                                        <div className="show-page-right-prime">
                                            <img src={window.primeLogo} alt=""/>
                                        </div>
                                        &nbsp;
                                        <div>& FREE Returns</div>

                                    </div>
                                    <div className="delivery-time">
                                        FREE delivery: <strong>Tomorrow</strong>
                                    </div>

                                    <div className="show-page-right-instock">
                                        In Stock.
                                    </div>
                                    <div className="show-page-right-buttons">
                                        <div className="show-page-right-add-cart-btn">
                                            <button className='add-to-cart-btn' onClick={this.haddToCart}>Add to Cart</button>
                                        </div>
                                        <div className="show-page-right-buynow-btn">
                                            <button className="buy-now-btn">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="show-page-bottom">
                        <h3>
                            About this item
                        </h3>

                        <div className="show-page-bottom-description">
                            {this.props.product.description}
                        </div>
                    </div>

                    {/* <div className="show-page-reviews-container">
                        <h3 className="show-page-reviews-title">
                            Reviews 
                        </h3>
                    </div> */}

                    <div className="review-container">
                        <div className="review-left">
                            <h2 className="review-section-title">Customer Reviews</h2>
                            <h4 className="review-product-text">Review this product</h4>
                            <div className="review-share-text">Share your thoughts with other customers</div>
                            {/* <button className="review-button">Write a customer review</button> */}
                            {reviewButton}

                        </div>
                        {/* <ReviewCreateContainer productId={this.props.product.id} /> */}

                        <div className="review-right">
                            {/* <div className="review-right-title">Top Reviews in the United States</div> */}
                                <div className="review-index">
                                    <ReviewIndexContainer productId={this.props.product.id} />
                                </div>
                           

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ProductShow