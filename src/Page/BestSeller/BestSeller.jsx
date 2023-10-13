import React from 'react'
// import BestSellerData from '../Data/Bestseller.json'

import BestSellerData from '../../Data/Bestseller.json'
import Layout from '../../Layout'
import PageContainer from '../../components/PageContainer/PageContainer'
import TitleInfo from '../../components/Title&&Info/TitleInfo'
// import PageContainer from '../components/PageContainer/PageContainer'

const BestSeller = () => {
  console.log(BestSellerData);
  return (
    <Layout>
       <TitleInfo title={BestSellerData.main_title} info={BestSellerData.info}/>
        <PageContainer data={BestSellerData}/>
      
    </Layout>
      
  
  )
}

export default BestSeller
