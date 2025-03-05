import React from 'react'
import styles from "./BlogImageComponent.module.css"

const BlogImageComponent = ({data}) => {
  return (
    <div>

      <div className={styles.blogContainer}>

            <div className={styles.blogContents}>
              <img src={data.image} />
              <h6>{ data.dateAndTime}</h6>
              <h2> { data.title} </h2>
              <p> {data.desc} </p>
            </div>

      </div>
      
    </div>
  )
}

export default BlogImageComponent