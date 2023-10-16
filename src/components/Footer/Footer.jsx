
import style from './Footer.module.css'
import footerImg from '../../images/footerLogo.png'
const Footer=()=>{

    return(
        <>
            <div  className={style.footerContainer}>
                
                <div  className={style.footerfirstCol}>
                    <div className={style.footerElementDiv}>
                        <img src={footerImg} alt="footerImg" />
                    </div>
                    <div className={style.footerElementDiv}>
                        <h3>COMPANY</h3>
                        <ul>
                            <li>Who are you</li>
                            <li>Find bliss near you</li>
                            <li>Bliss Spa</li>
                            <li>shop</li>
                        </ul>
                    </div>
                    <div className={style.footerElementDiv}>
                        <h3>CUSOMER CARE</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>Payment and Gift Card</li>
                        </ul>
                    </div>
                    <div className={style.footerElementDiv}>
                        <h3>THE DRY STUFF</h3>
                        <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & conditions</li>
                        <li>Accessibility</li>
                        </ul>
                        <div >
                            <h3 style={{marginTop:'2.5rem',paddingLeft:'1.5rem'}}>THE FUN STAFF</h3>
                            <i className="fa-brands fa-instagram style.foo" style={{padding:'0.9rem 0.9rem 0 1.5rem'}} ></i>
                            <i className="fa-brands fa-youtube" style={{padding:'0.9rem'}}  ></i>
                            <i class="fa-brands fa-facebook" style={{padding:'0.9rem'}}></i>
                            <i class="fa-brands fa-pinterest"style={{padding:'0.9rem'}}  ></i>

                            <p style={{marginTop:'2.5rem',paddingLeft:'1.5rem'}}>&#169;2023 BlissWorld Inc</p>
                        </div>
                    </div>
                </div>

                <div className={style.footerInputAndButton}>
                    <h2>Hear the lastest.</h2>
                    <p>(new products, exclusive offers and other suprises)</p>
                    <input type='email' placeholder='Enter your email....'/>
                    <br/>
                    <button>Submit</button>
                    <p><span style={{color:"red",fontSize:'1.5rem'}}>&#128077;</span> Md Sharique</p>
                </div>

            </div>
        </>
    )
}

export default Footer;