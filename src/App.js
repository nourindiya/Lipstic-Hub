import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Notfound from './pages/NotFound/Notfound';
import Booking from './pages/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import Allproducts from './pages/Allproducts/Allproducts';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PrivateRoute from './PrivateRoute.js/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard';
import Payment from './pages/Payment/Payment';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>


            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>


            <Route path="/logIn">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/dashBoard">
              <DashBoard></DashBoard>
            </Route>




            <Route path="/allProducts">
              <Allproducts></Allproducts>
            </Route>


            <Route path="*">
              <Notfound></Notfound>
            </Route>


          </Switch>

          <div className="footer">
            <Footer></Footer>
          </div>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
