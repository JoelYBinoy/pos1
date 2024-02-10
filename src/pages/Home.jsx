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

  console.log('****favor*****')
  console.log(favorites)



  return (
    <div>



      <div className='sections container' >

        <div className='recentlyPurchased_div mt-3' >

          <h2>Recently Purchased Items</h2>
          <Row >

            {
              recentPurchase?.length > 0 ?                      /* RESULT IS THE FETCHED DATA */
                recentPurchase.map((items, index) => (
                  <Col className='mt-3 searchbox' sm={12} md={12} lg={4} xl={3} xs={12} >

                    <div className='card-container' >
                      <Card className='cards' >
                        <Card.Img variant="top" width={'100%'} height={'100px'} src={items.thumbnail} />
                        <Card.Body>
                          <Card.Title>{items.title}</Card.Title>
                          <Card.Text>
                            <span className='priceQty_tag' >Price: </span>  {items.price}

                          </Card.Text>
                          <Card.Text>
                            <span className='priceQty_tag' >  Quantity Available:  </span>{items.stock}
                          </Card.Text>

                          <div className='addtobillbutton_div' >
                            <Button onClick={() => {
                             
                                addBill(items.title, items.price, items.thumbnail, index);
                             
                            }} variant="primary">Add to bill</Button>

                          </div>



                        </Card.Body>
                      </Card>
                    </div>


                  </Col>


                )) : <p>No Items to display</p>

            }


          </Row>


        </div>



        <div className='favorites_div mt-5' >

          <h3>Favorites Section</h3>
          <Row >

            {
              favorites?.length > 0 ?                      /* RESULT IS THE FETCHED DATA */
                favorites.map((items, index) => (
                  <Col className='mt-3 searchbox' sm={12} md={12} lg={4} xl={3} xs={12} >

                    <div className='card-container' >
                      <Card className='cards' >
                        <Card.Img variant="top" width={'100%'} height={'100px'} src={items.thumbnail} />
                        <Card.Body>
                          <Card.Title>{items.title}</Card.Title>
                          <Card.Text>
                            <span className='priceQty_tag' >Price: </span>  {items.price}

                          </Card.Text>
                          <Card.Text>
                            <span className='priceQty_tag' >  Quantity Available:  </span>{items.stock}
                          </Card.Text>

                          <div className='addtobillbutton_div' >
                            <Button onClick={() => {
                              if (items && items.title) {
                                addBill(items.title.slice(0, 20), items.price, items.thumbnail, index);
                              } else {
                                console.error("Title is undefined or null");
                              }
                            }} variant="outline-success">Add to bill</Button>

<Button onClick={() => favoritesFunction( items.price, items.thumbnail, index)} className='ms-1' variant='outline-danger' ><i class="fa-solid fa-heart"></i></Button>

                          </div>



                        </Card.Body>
                      </Card>
                    </div>


                  </Col>


                )) : <p>No Items to display</p>

            }


          </Row>

        </div>

      </div>

    </div>
  )
}

export default Home