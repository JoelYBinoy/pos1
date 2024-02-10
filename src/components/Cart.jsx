import React, { useState, useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../assets/style1.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../api/useFetch';
import addToBillContext from '../context/addToBillContext';


function Cart() {

  const {addToBill,setAddToBill} = useContext(addToBillContext)
  const {recentPurchase ,setRecentPurchase} = useContext(addToBillContext)


  // Dummy Data



  const result = useFetch('https://dummyjson.com/products')



  // Search data

  const [searchValue, setSearchValue] = useState("")
  console.log("*********Searched Values*********")
  console.log(searchValue);

  // Items Count

  const itemCount = 0

  const increment = (index) => {
    const updatedItems = [...addToBill];

    updatedItems[index].quantity += 1


    setAddToBill(updatedItems);
  };

  const decrement = (index) => {
    const updatedItems = [...addToBill];
    updatedItems[index].quantity = Math.max(0, updatedItems[index].quantity - 1);
    setAddToBill(updatedItems);
  };



  // Billed Items
 

  const addBill = (value, price, image, qty) => {
    const existingItemIndex = addToBill.findIndex((item) => item.name === value);

    if (existingItemIndex !== -1) {
      // Item already exists, increase the quantity
      const updatedItems = [...addToBill];
      updatedItems[existingItemIndex].quantity += 1;
      setAddToBill(updatedItems);
    } else {
      // Item doesn't exist, add a new one with a quantity of 1
      setAddToBill([...addToBill, { name: value, price: price, image: image, quantity: 1 }]);
    }
  };

  const showProceedtobuyButton = addToBill.length > 0;



  // Delete Function

  const deleteList = (index) => {
    const updateAfterDeleteList = [...addToBill]
    updateAfterDeleteList.splice(index, 1)
    setAddToBill(updateAfterDeleteList)
  }


  //
  const proceedToBuy = () => {

    console.log(addToBill);
    setRecentPurchase(addToBill)
    console.log(recentPurchase);
  }



  return (
    <>
      <div className='root_div' >
        <div>
          <Row  >
          



            {/* Checkout Area */}

            <Col sm={4} md={12} lg={12} className='checkout border'>
              <h1>Checkout</h1>

              <div className='listing_oredrs mt-5'>
                {addToBill.length > 0 && (
                  <table className='table'>
                    <thead>
                      <tr>
                        <th style={{ width: '50px' }}>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>C</th>
                      </tr>
                    </thead>

                    <tbody>
                      {addToBill.map((items, index) => (
                        <tr className='mt-5' key={index}>
                          <td>{index + 1}</td>
                          <td><img src={items.image} width={'30px'} alt="" /></td>
                          <td>{items.name}</td>
                          <td>{items.price}</td>
                          <td>
                            <i onClick={() => increment(index)} className="fa-solid fa-plus"></i>{' '}
                            {items.quantity}{' '}
                            <i onClick={() => decrement(index)} className="fa-solid fa-minus"></i>
                          </td>
                          <td className='delete_button'>
                            <i onClick={() => deleteList(index)} className="fa-solid fa-circle-xmark"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {addToBill.length > 0 ? (

                  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                <Button onClick={proceedToBuy}>Proceed To Buy</Button>
                  </div>
                
                ) : (
                  <div >
                    <p className='emptyCart_para'>Add Items to the Cart</p>
                    <p className='cart_image'>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </p>
                  </div>
                )}
              </div>

              <div></div>
            </Col>
          </Row>
        </div>
      </div>

    </>
  )
}

export default Cart