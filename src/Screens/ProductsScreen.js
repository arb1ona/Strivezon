import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../actions/userActions';


function ProductsScreen(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const productSave = useSelector(state => state.productSave)
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        }
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({ name, price }))
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>error...</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="email" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>

                <li>
                    <button type="submit" className="button-primary">Create</button>
                </li>
            </ul>

        </form>
    </div>
}

export default ProductsScreen;
