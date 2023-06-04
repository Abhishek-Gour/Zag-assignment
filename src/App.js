/**
 * The function defines the routing for a React application with different components for home,
 * products, dashboard, payment, and a product page.
 * @returns The App component is being returned, which contains a Router component from
 * react-router-dom. Inside the Router component, there is a ToastContainer component from
 * react-toastify and a Routes component that contains several Route components. Each Route component
 * specifies a path and an element to render when that path is matched.
 */
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
