import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import addToBillContext from '../context/addToBillContext';

function Home() {


  /*Contntext Apis*/

  const { addToBill, setAddToBill } = useContext(addToBillContext)
  const { recentPurchase, setRecentPurchase } = useContext(addToBillContext)
  const { favorites, setFavorites } = useContext(addToBillContext)

  console.log(favorites)



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




  /*favorites code*/

  const favoritesFunction = (value, price, image, qty) => {
    const existingItemIndex = favorites.findIndex((item) => item.name === value);

    if (existingItemIndex !== -1) {
      // Item already exists, increase the quantity
      const updatedItems = [...favorites];
      updatedItems[existingItemIndex].quantity += 1;
      setFavorites(updatedItems);
    } else {
      // Item doesn't exist, add a new one with a quantity of 1
      setFavorites([...favorites, { name: value, price: price, image: image, quantity: 1 }]);
    }
  };

  // console.log('****favor*****')
  // console.log(favorites)



  return (
    <div>



      <div className='sections container' >

        <div className='recentlyPurchased_div mt-3' >

          <h2>Recently Purchased Items</h2>
          <Row  >

            <div className='posters' >
            {
              recentPurchase?.length > 0 ?                      /* RESULT IS THE FETCHED DATA */
                recentPurchase.map((items, index) => (


                  <Col className='mt-3 ms-3 searchbox' sm={12} md={12} lg={4} xl={3} xs={12} >

                    <div className='card-container' >
                      <Card className='cards' >
                        <Card.Img variant="top" width={'100%'} height={'100px'} src={items.image} />
                        <Card.Body>
                          <Card.Title>{items.name.slice(0,15)}</Card.Title>
                          <Card.Text>
                            <span className='priceQty_tag' >Price: </span>  {items.price}

                          </Card.Text>
                          <Card.Text>
                            <span className='priceQty_tag' >  Quantity:  </span>{items.stock}
                          </Card.Text>

                          <div className='addtobillbutton_div' >
                            <Button onClick={() => addBill(items.name, items.price, items.image, index)} variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
                            <Button onClick={() => favoritesFunction(items.name, items.price, items.image, index)} className='ms-1' variant='outline-danger' ><i class="fa-solid fa-heart"></i></Button>

                          </div>



                        </Card.Body>
                      </Card>
                    </div>


                  </Col>


                )) : <p>No Items to display</p>

            }
            </div>

          


          </Row>


        </div>



        <div className='favorites_div mt-5' >

          <h3>Favorites Section</h3>
          <Row >

            <div className='posters' >
            {
              favorites?.length > 0 ?                      /* RESULT IS THE FETCHED DATA */
                favorites.map((items, index) => (
                  <Col className='mt-3 ms-1 searchbox' sm={12} md={12} lg={4} xl={3} xs={12} >

                    <div className='card-container' >
                      <Card className='cards' >
                        <Card.Img variant="top" width={'100%'} height={'100px'} src={items.image} />
                        <Card.Body>
                          <Card.Title>{items.name.slice(0,15)}</Card.Title>
                          <Card.Text>
                            <span className='priceQty_tag' >Price: </span>  {items.price}

                          </Card.Text>
                          <Card.Text>
                            <span className='priceQty_tag' >  Quantity:  </span>{items.quantity}
                          </Card.Text>

                          <div className='addtobillbutton_div d-flex justify-content-between' >
                            <Button onClick={() => {
                             
                                addBill(items.name, items.price, items.image, index);
                              
                            }} variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>

                            <Button onClick={() => favoritesFunction(items.name,items.price, items.image, index)} className='ms-1' variant='outline-danger' ><i class="fa-solid fa-heart"></i></Button>

                          </div>



                        </Card.Body>
                      </Card>
                    </div>


                  </Col>


                )) : <p>No Items to display</p>

            }

            </div>



          </Row>

        </div>

      </div>

    </div>
  )
}

export default Home