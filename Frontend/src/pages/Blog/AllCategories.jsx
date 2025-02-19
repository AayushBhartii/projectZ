import React from 'react'
import Blog from './Blog'
import { useLocation } from 'react-router-dom'
import BlogImageComponent from './BlogImageComponent'
import styles from "./BlogImageComponent.module.css"
import Footer from '../../components/Footer/Footer'

const AllCategories = () => {
  const location = useLocation()
  const allCategoryData = location.state?.allCategories
  return (
    <>
      <Blog />
      { allCategoryData ? 
        <div className={styles.allCategoriesContainer}> 
          {allCategoryData.map((data, idx) => (
            <div key={idx} className={styles.eachBox}>
              <BlogImageComponent data={data} />
            </div>
          ))} 
        </div>
      : <p>Data not present</p> }


    <Footer />
    </>
  )
}

export default AllCategories
