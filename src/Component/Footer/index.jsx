import logo from "../../asset/Icon.png1.png"
import insta from "../../asset/insta.png"
import web from "../../asset/web.png"
import twitter from "../../asset/twitter.png"
import youtube from "../../asset/youtube.png"
import send from "../../asset/send.png"
import styles from "./index.module.css"


const Footer = () => {
    return (

        <>
            <footer className={styles.footer}>

                    <div>
                        <img className={styles.imStyle} src={logo}/>
                        <a className={styles.nexStyle}>Nexcent</a>
                        <p >Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>

                        <div className={styles.imgStyle}>
                            <img src={insta}/>
                            <img src={web}/>
                            <img src={twitter}/>
                            <img src={youtube}/>
                        </div>
                    </div>

                <div className={styles.footerSide}>
                    <div>
                        <div><p>Company</p></div>
                        <p>Home</p>
                        <p>Service</p>
                        <p>Features</p>
                        <p>Product</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={styles.input}/>
                            <img src={send} alt="send" className={styles.image}/>
                        </label>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;


