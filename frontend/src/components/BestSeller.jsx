import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
      const bestProduct = products.filter((item) => (item.bestSeller));
      setbestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div>
        
    </div>
  )
}

export default BestSeller