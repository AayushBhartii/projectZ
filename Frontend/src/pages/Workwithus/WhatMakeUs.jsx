import React,{useEffect} from 'react'
import styles from "./WhatMakeUs.module.css"
import { IoIosArrowDown } from "react-icons/io";

const WhatMakeUs = ( {item} ) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.subContenet}>
                <img src={item.img} />
                <h1>{item.title}</h1>
                <div className={styles.arrow}>
                    <IoIosArrowDown  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatMakeUs