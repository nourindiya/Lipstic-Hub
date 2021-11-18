import React from 'react';
import { Switch, useRouteMatch } from 'react-router';
import { Link, Route } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import DashboardHome from './DashboardHome/DashboardHome';
import ReviewDashboard from './ReviewDashboard/ReviewDashboard';

const DashBoard = () => {

    let { path, url } = useRouteMatch();


    return (
        <div>
            <h1 className="tittle">Dash Board</h1>

            <div className="row">
                <div className="col-md-3 ">
                    <ul className="list-group">

                        <li className="list-group-item ms-3"><Link to={`${url}/payment`} className="" style={{ textDecoration: 'none' }}>Payment</Link> </li>

                        <li className="list-group-item ms-3"> <Link to={`${url}/myOrders`} className="" style={{ textDecoration: 'none' }}>My Order</Link> </li>
                        <li className="list-group-item ms-3"><Link to={`${url}/reviews`} className="" style={{ textDecoration: 'none' }}>Reviews</Link></li>
                        <li className="list-group-item ms-3"> <Link to="/home" className="" style={{ textDecoration: 'none' }}>Go to Home</Link> </li>
                    </ul>
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
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;