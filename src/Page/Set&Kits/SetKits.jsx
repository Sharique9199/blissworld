import React from 'react'
import Layout from '../../Layout'
import PageContainer from '../../components/PageContainer/PageContainer'
import setKitsData from '../../Data/SetKits.json'
import TitleInfo from '../../components/Title&&Info/TitleInfo'


const SetKits = () => {
  return (
    <Layout>
      <TitleInfo title={setKitsData.main_title} info={setKitsData.info}/>
      <PageContainer data={setKitsData}/>
    </Layout>
  )
}

export default SetKits
