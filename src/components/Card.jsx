import React, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'

const Card = ({ id, title, price, image ,onClick}) => {
    return (
        <button className={styles.card} id={id} onClick={onClick}>
            <img src={image} ></img>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>${price}</p>
            </div>
        </button>
    )
}

export default Card