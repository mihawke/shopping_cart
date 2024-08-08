import React, { useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom'
import styles from '../styles/Shop.module.css'
import Card from '../components/Card';

const Shop = () => {
  const { sharedData, setSharedData } = useOutletContext();
  const [total, setTotal] = useState(0)
  const location = useLocation();

  useEffect(() => {
    setTotal(getTotalPrice(sharedData))

    return () => {

    }
  }, [sharedData])

  const getTotalPrice = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
      sum = sum + parseFloat(array[index].price)
    }
    return sum;
  }

  const handleClick = (index) => {
    const updatedCart = sharedData.slice();
    updatedCart.splice(index, 1)
    setSharedData(updatedCart);
  }

  console.log(location.pathname)
  return (
    <div id='shop' className={styles.shop}>
      <h1>Your Cart</h1>
      <p>Total Items: {sharedData.length} </p>
      <p>Total Price: ${total}</p>
      <div className={styles.cardsContainer}>
        {sharedData.map((item, index) => (
          <Card key={index} id={item.id} image={item.image} title={item.title} price={item.price} onClick={() => handleClick(index)}></Card>
        ))}
      </div>
    </div>
  )
}

export default Shop