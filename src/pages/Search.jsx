import React, { useContext } from 'react'
import  { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../api/useFetch';
import addToBillContext from '../context/addToBillContext';
import '../assets/style1.css'


function Search() {

const [recentSearch , setRecentSearch] = useState([])
const {favorites,setFavorites} = useContext(addToBillContext)



/*Context Apis*/ 
const {addToBill,setAddToBill} = useContext(addToBillContext)





    // Dummy Data



  const result = useFetch('https://dummyjson.com/products')



  // Search data

  const [searchValue, setSearchValue] = useState("")
  console.log("*********Searched Values*********")
  console.log(searchValue);



  const addBill = (value, price, image, qty) => {
    const existingItemIndex = addToBill.findIndex((item) => item.name === value);

    const updatedRecentSearch = [...recentSearch, { value, price, image, qty }];
    setRecentSearch(updatedRecentSearch);

    console.log("********Recent********");
    console.log("Updated recentSearch:", updatedRecentSearch);

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
    <div className='container' >
        <div className='searchContainer' >
            <h1>Searches</h1>
        </div>
        <div>
        <input type="text" className='form-control border border-5' placeholder='Search the items Here' onChange={(e) => setSearchValue(e.target.value)} />
        </div>

        <div className='mt-5' >

                {/*Items area*/}

                <div style={{ backgroundColor: 'rgb( 240 241 243 )' }} className='imageCards' >
                  <Row >

                    {
                      result?.length > 0 ?                      /* RESULT IS THE FETCHED DATA */
                        result.filter((search) =>
                          (search.title.toLowerCase().includes(searchValue) || search.title.toUpperCase().includes(searchValue))

                        ).map((items, index) => (
                          <Col className='mt-3 searchbox' sm={12} md={12} lg={4} xl={3} xs={12} >

                            <div className='card-container' >
                            <Card  className='cards' >
                              <Card.Img variant="top" width={'100%'} height={'100px'} src={items.thumbnail} />
                              <Card.Body>
                                <Card.Title>{items.title.slice(0, 20)}</Card.Title>
                                <Card.Text>
                                  <span className='priceQty_tag' >Price: </span>  {items.price}

                                </Card.Text>
                                <Card.Text>
                                  <span className='priceQty_tag' >  Quantity Available:  </span>{items.stock}
                                </Card.Text>

                                <div className='addtobillbutton_div' >
                                 <Button onClick={() => addBill(items.title.slice(0, 20), items.price, items.thumbnail, index)} variant="primary">Add to bill</Button> 
                                 <Button onClick={() => favoritesFunction(items.title.slice(0, 20), items.price, items.thumbnail, index)} className='ms-1' variant='outline-danger' ><i class="fa-solid fa-heart"></i></Button>

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

export default Search