import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

const Home = () => {
  const { sharedData, setSharedData } = useOutletContext();
  const [data, setData] = useState([])
  const [cart, setCart] = useState(sharedData)
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then(res => res.json())
      .then((res) => setData(res))
      .catch(error => console.log(error))
  }, [cart])

  const handleClick = (index) => {
    const updatedCart = [...cart, data[index]];
    setCart(updatedCart);
    setSharedData(updatedCart);
  }
  return (
    <div id='home' className={styles.home}>
      <h1>Shop For Items</h1>
      <div className={styles.cardsContainer}>
        {data.map((item, index) => (
          <Card key={index} id={item.id} image={item.image} title={item.title} price={item.price} onClick={() => handleClick(index)}></Card>
        ))}
      </div>
    </div>
  )
}

export default Home