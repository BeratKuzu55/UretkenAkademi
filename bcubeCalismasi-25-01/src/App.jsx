import { useEffect, useState } from 'react'
import Card from './components/card'
import Sepet from './components/sepet';
import getProducts from './products';
import './App.css'

function App() {

  const [sepet , setSepeteEkle] = useState([]);
  const products = getProducts();
  

  function handleSepeteEkle(addedProductID){
    setSepeteEkle(products[addedProductID]);
    console.log(sepet);
  }

  return (    
    <>
      <div className='grid grid-cols-3 gap-4'>
      {
        products.map((product , id ) => {
          return (
            <Card
              key={id}
              productID = {id}
              source={product.imgSource}
              name={product.name}
              price={product.price}
              sepeteEkle= {handleSepeteEkle}
            >
            </Card>
          );
        })
      }
      </div>
      <Sepet
        sepetARR = {sepet}
      ></Sepet>
    </>
  )
}

export default App
