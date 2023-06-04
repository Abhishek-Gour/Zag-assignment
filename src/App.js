import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Products from './Components/Products';
import Dashboard from './Components/Dashboard';
import Payment from './Components/Payment';
import Home from './Components/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <div>
     <Router>
      <ToastContainer/>
      <Routes>
        <Route path='/prodPage' element={<ProductPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/productPage' element={<Products/>}/>
        <Route path='/dashboardPage' element={<Dashboard/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
