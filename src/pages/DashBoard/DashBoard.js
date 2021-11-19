import React, { useEffect, useState } from 'react';
import { Switch, useRouteMatch } from 'react-router';
import { Link, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from '../admin/MakeAdmin/MakeAdmin';
import ManageOrders from '../admin/ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import DashboardHome from './DashboardHome/DashboardHome';
import ReviewDashboard from './ReviewDashboard/ReviewDashboard';
import AddProducts from '../admin/AddProducts/AddProducts';
import ManageProducts from '../admin/ManageProducts.js/ManageProducts';

const DashBoard = () => {
    const { user } = useAuth();

    const [loadedUser, setLoadedUser] = useState({});

    let { path, url } = useRouteMatch();

    useEffect(() => {
        fetch(`https://shrouded-badlands-09931.herokuapp.com/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => setLoadedUser(data))
    }, [])




    return (
        <div>
            <div className="row">
                <div className="col-md-3 ">
                    <h1 className="tittle mt-3">Welcome To Dashboard</h1>
                    {
                        loadedUser.role === "User" &&
                        <ul className="list-group mt-2 mb-5">

                            <li className="list-group-item ms-3"><Link to={`${url}/payment`} className="text-dark" style={{ textDecoration: 'none' }}>Payment</Link> </li>

                            <li className="list-group-item ms-3"> <Link to={`${url}/myOrders`} className="text-dark" style={{ textDecoration: 'none' }}>My Order</Link> </li>
                            <li className="list-group-item ms-3"><Link to={`${url}/reviews`} className="text-dark" style={{ textDecoration: 'none' }}>Reviews</Link></li>
                            <li className="list-group-item ms-3"> <Link to="/home" className="text-dark" style={{ textDecoration: 'none' }}>Go to Home</Link> </li>
                        </ul>
                    }
                    {
                        loadedUser.role === "admin" &&
                        <ul className="list-group mt-2 mb-5">

                            <li className="list-group-item ms-3">
                                <Link to={`${url}`} className="text-dark" style={{ textDecoration: 'none' }}>Dashboard</Link>
                            </li>


                            <li className="list-group-item ms-3"><Link to={`${url}/manageOrders`} className="text-dark" style={{ textDecoration: 'none' }}>Manage Orders</Link> </li>

                            <li className="list-group-item ms-3"><Link to={`${url}/addProduct`} className="text-dark" style={{ textDecoration: 'none' }}>Add a Product</Link></li>


                            <li className="list-group-item ms-3"> <Link to={`${url}/makeAdmin`} className="text-dark" style={{ textDecoration: 'none' }}>Make  Someone Admin</Link> </li>


                            <li className="list-group-item ms-3"><Link to={`${url}/manageProducts`} className="text-dark" style={{ textDecoration: 'none' }}>Manage Products</Link> </li>

                        </ul>
                    }

                </div>
                <div className="col-md-9 ">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment />
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <ReviewDashboard></ReviewDashboard>
                        </Route>


                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>

                        <Route path={`${path}/addProduct`}>
                            <AddProducts></AddProducts>
                        </Route>


                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;