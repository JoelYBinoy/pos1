import { Col, Row } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import AddToBillContextProvider from './context/addToBillContextProvider';
import './assets/style1.css'


function App() {
  return (
    <>
    <div className='mainDiv' >

      <AddToBillContextProvider>

    <Row>
      <Col lg={1} md={1} xl={1} sm={1} className='sidebarapp_div' >
        <SideBar/>
      </Col>

     

      <Col  md={7} lg={7} xl={7} sm={7} className='appmid_div'  >
      <Routes>
        
        <Route path='/' element={<Home/>} ></Route>
        <Route path='search' element={<Search/>} ></Route>
        
      </Routes>
      </Col>

      

      <Col  lg={4} md={3} xl={4} sm={4} className='appcart_div' >
      <Cart/>
      </Col>
    </Row>

    </AddToBillContextProvider>
   
    
    </div>
    </>
  );
}

export default App;
