import React from 'react'
// import Card from '../Card/Card'
import myData from '../../Data/HomeData.json'
const TitleInfo = ({title,info}) => {
  console.log(title,info);
  return (
    <div>
       <div>
                <h2 style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    {title}
                </h2>
                <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    {info}
                </p>
            </div>
    </div>
  )
}

export default TitleInfo
