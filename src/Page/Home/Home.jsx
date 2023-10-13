import Card from "../../components/Card/Card"
import Layout from "../../Layout"
import myData from '../../Data/HomeData.json'

import style from '../../components/Card/Card.module.css'
import style1 from './Home.module.css'
import TitleInfo from "../../components/Title&&Info/TitleInfo"
import PopUpCart from "../PopUpCart/PopUpCart"
// import style1 from '../Home/Home.module.css'




const Home = () => {
    // let titleandInfo={title,info}
    return (
        <Layout>
            <div className={style1.homeContainer}>

                <TitleInfo title={myData[0].main_title} info={myData[0].info} />

                <div className={style1.CardBox}>

                    {
                        myData[0].data.map((ele) => {

                            return (
                                <Card

                                    img={ele.img}
                                    title={ele.title}
                                    desc={ele.desc}
                                    price={ele.price} />

                            )
                        })
                    }
                </div>

                {/* <div className={style1.bigCardBox}>
                    <div className={style1.bothBigCardBox}>
                        <div>
                            <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-l-s.jpg" alt="" />
                        </div>
                        <div className={style1.cardBoxDetails}>
                            <h3>The Scent That Started It All</h3>
                            <p>A cult-fave fragrance for more than two decades!</p>
                        </div>
                        <button>SHOP LEMON & SAGE</button>
                    </div>


                    <div className={style1.bothBigCardBox}>
                        <div>
                            <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-blackhead-v2-1-.jpg" alt="" />
                        </div>
                        <div className={style1.cardBoxDetails}>
                            <h3>Pore Perfection</h3>
                            <p>3x THE BENEFITS - LET’S BREAK IT DOWN!</p>
                        </div>
                        <button>SHOP BACKHAND BREAKDOWN</button>

                    </div>
                </div> */}

                <TitleInfo title={myData[1].main_title} info={myData[1].info} />

                <div className={style1.CardBox}>
                    {
                        myData[1].data.map((ele) => {
                            return (
                                <Card

                                    img={ele.img}
                                    title={ele.title}
                                    desc={ele.desc}
                                    price={ele.price}
                                />

                            )
                        })
                    }
                </div>

                <div>
                    <h2 className={style1.bliss}>@bliss</h2>
                    <p >Your daily dose of happiness, unfiltered.</p>
                </div>

                {/* <div className={style1.oneImgDiv}>
                    <img src="https://tubular-queijadas-b99c86.netlify.app/static/media/snap.713b999f51fb079690cc.PNG" alt="" />

                </div> */}


                {/* <div style={{ display: 'flex', color: 'red', flexDirection: val ? 'column' : 'row' }}>
                {
                    employes.map((elm, i) => {
                        return (
                            <Card name={elm.name}
                                vill={elm.vill}
                                age={elm.age}
                                bgValue={i} />
                        )
                    })
                }
            </div> */}
            </div>
        </Layout>
    )
}
export default Home;