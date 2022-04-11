import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";
import Home from "./MainPage/Home";
import CartButton from "./MainPage/CartButton";


function App(props) {

    return (
      <div>
        <Router>
          <Routes>
            <Route element={<Header/>} path={"/header"} history={props.history} />
            <Route element={<Footer/>} path={"/footer"} history={props.history} />
            <Route element={<Home/>} path={"/home"} history={props.history} />
            <Route element={<CartButton/>} path={"/cartbutton"} history={props.history} />
            
         </Routes>
         </Router>
    </div>
  );
}

export default App;
