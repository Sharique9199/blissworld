import React from 'react'
import Card from '../Card/Card'
import styles from'./PageContainer.module.css'
import style from '../Card/Card.module.css'

const PageContainer = ({data}) => {
  return (
    <div >
      
      <div className={styles.main_CardContainer}>
        {data.data.map((e,i)=>{
            return(
                <Card 
                key={i}
                img={e.img}
                title={e.title}
                desc={e.desc}
                price={e.price}/>
            )

        })}
      </div>
    </div>
  )
}

export default PageContainer
