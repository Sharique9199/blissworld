import React from 'react'
import Layout from '../../Layout'
import PageContainer from '../../components/PageContainer/PageContainer'
import skincareData from '../../Data/Skincare.json'
import TitleInfo from '../../components/Title&&Info/TitleInfo'


const SkinCare = () => {
    // console.log(data);
    
  return (
    <Layout>
      <TitleInfo title={skincareData.main_title} info={skincareData.info}/>
    <PageContainer data= {skincareData}/>
    </Layout>
  )
}

export default SkinCare
