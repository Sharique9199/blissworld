import React from 'react'
import Layout from '../../Layout'
import PageContainer from '../../components/PageContainer/PageContainer'
import salesData from '../../Data/Sales.json'
import TitleInfo from '../../components/Title&&Info/TitleInfo'

const Sales = () => {
  return (
    <Layout>
      <TitleInfo title={salesData.main_title} info={salesData.info}/>
      <PageContainer data={salesData}/>
    </Layout>
  )
}

export default Sales
