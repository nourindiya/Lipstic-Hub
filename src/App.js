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

            <Route path="/booking/:id">
              <Booking></Booking>
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
