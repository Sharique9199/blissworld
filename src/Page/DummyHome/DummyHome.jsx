import React from 'react'
import Layout from '../../Layout'
import homeData from'../../Data/HomeData.json'
import PageContainer from '../../components/PageContainer/PageContainer'

const DummyHome = () => {
    // console.log(data);
  return (
    <Layout>
      <PageContainer data={homeData}/>
    </Layout>
  )
}

export default DummyHome
