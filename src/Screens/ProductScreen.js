import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
// import FontAwesome from 'react-fontawesome'
// import { fas } from 'react-fontawesome';

function HomeScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x => x._id === props.match.params.id)
    return (
        <>
            <Link to="/">
                <button className="border">
                    <div className="fa fa-arrow-left" ></div>
                </button>
            </Link>
            <div>

                <Row className="details1" id="parent">
                    <div className="divider-new" />
                    <Col className="details-image" size="12" sm="6" lg="8">
                        <img src={product.image} alt="product"></img>
                    </Col>
                    <div class="divider-new" />
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
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        // </div >
    )
}

export default HomeScreen
