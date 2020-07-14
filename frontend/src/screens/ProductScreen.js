import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../actions/productActions'

function HomeScreen(props) {
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            //
        }
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    return (
        <>
            {/* <Link to="/">
                <button className="border">
                    <div className="fa fa-arrow-left" ></div>
                </button>
            </Link> */}
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (
                        <>
                            <div>
                                <Row className="details1" id="parent">
                                    <div className="divider-new" />
                                    <Col className="details-image" size="12" sm="6" lg="8">
                                        <img src={product.image} alt="product"></img>
                                    </Col>
                                    <div className="divider-new" />
                                    <Col className="details-info" size="6" lg="4">
                                        <div className="product-name-space">
                                            <div >
                                                <h1>{product.name}</h1>
                                            </div>
                                            <div className="armani">
                                                <img src={product.shopImage} alt="logo"></img>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                                            <li className="description">{product.description}</li>
                                        </ul>

                                        <div className="w3-show-inline-block ">
                                            <div className="w3-bar">
                                                <button className="w3-btnr"><h3>XS</h3></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h3>S</h3></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h3>M</h3></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h3>L</h3></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h3>XL</h3></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h3>XXL</h3></button>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="divider-new" />
                                </Row>
                            </div>
                            <div className="details2">
                                <div className="details-action">
                                    <ul>
                                        <li>
                                            Best Price<br></br>
                                            <b>$ {product.price}</b>
                                        </li>
                                        <li>
                                            Status:{' '}
                                            {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                                        </li>
                                        <li>
                                            Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                                {[...Array(product.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>
                                            {product.countInStock > 0 && (
                                                <button
                                                    onClick={handleAddToCart}
                                                    className="button primary"
                                                >
                                                    Add to Cart
                                                </button>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
        // </div >
    )
}

export default HomeScreen
