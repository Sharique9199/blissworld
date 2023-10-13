  

  import React from 'react'
import Layout from '../../Layout'
import bodyCareData from '../../Data/Bodycare.json'
import PageContainer from '../../components/PageContainer/PageContainer'
import TitleInfo from '../../components/Title&&Info/TitleInfo'
  
  const BodyCare = () => {
    return (
      <Layout>
        <TitleInfo title={bodyCareData.main_title} info={bodyCareData.info}/>
        <PageContainer data={bodyCareData}/>
      </Layout>
    )
  }
  
  export default BodyCare
  