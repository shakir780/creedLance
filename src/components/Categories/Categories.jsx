import React from 'react'
import './Categories.css'
import { CategoriesData } from '../../data/CategoriesData'
import CatBtn from '../../assets/catBtn.png'
const Categories = () => {
  return (
    <section className='Categories' id='categories'>
    <div className="categoriesHeading">
        <span>Most popular categories</span>
    </div>
    <div className="categories_main">
        {CategoriesData.map((category)=>(
            <div key={category.id} className='category'>
                <img src={category.Image} alt={category.header} />
                <span>{category.header}</span>
            </div>
        ))}

        
    </div>
    <div className='catBtn'>
            <img src={CatBtn} />
        </div>
    </section>
  )
}

export default Categories