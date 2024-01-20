import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../store/cartSlice'

export default function Navbar() {
    const dispatch = useDispatch();
    const {totalItems} = useSelector(state=>state.cart)
    console.log(totalItems)
    useEffect(() => {
        dispatch(getCartTotal());
    }, [])

    return (
        <>
            <div className="container-fluid fixed-top">
                <TopBar />
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <Link  to="/" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></Link >
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link to="/"  className="nav-item nav-link active">Home</Link>
                                <Link to="/shop"  className="nav-item nav-link">Shop</Link>
                                <Link to="/shop-details" className="nav-item nav-link">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <Link   className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</Link>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link className="dropdown-item">Vegetables</Link>
                                        <Link className="dropdown-item">Fruit</Link>
                                        <Link className="dropdown-item">Bread</Link>
                                        <Link className="dropdown-item">Meat</Link>
                                    </div>
                                </div>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                                <Link to="/cart" className="position-relative me-4 my-auto">
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>{totalItems}</span>
                                </Link>
                                <Link className="my-auto">
                                    <i className="fas fa-user fa-2x"></i>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
