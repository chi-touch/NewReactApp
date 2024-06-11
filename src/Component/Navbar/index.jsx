import Icon from "../../asset/Icon.png"
import styles from "./index.module.css"






const Navbar = () =>{
    return (
        <>
            <div className={styles.nav}>

                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={Icon} alt="Icon"/>
                        <h2 style={{color: "#263238", fontSize: "30px"}}>Nexcent</h2>
                    </div>


                    <div className={styles.midSection}>

                        <p>Home</p>
                        <p>Service</p>
                        <p>Features</p>
                        <p>Product</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>

                    <div style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}>
                        <button
                            style={{color: "#4caf4f",
                                background: "none",
                                border: "none",
                                fontSize: "16px",
                                fontWeight: "500"}}>Login
                        </button>
                        <button
                            style={{padding:"10px",
                                borderRadius: "4px",
                                background: "#4caf4f",
                                color: "#fff",
                                border: "none"}}>SignUp
                        </button>
                    </div>

                {/*</div>*/}
            </div>
            {/*<div className="hero-section">*/}
            {/*    <div>*/}
            {/*        <h2> Lessons and insights <span style={{color: "#4caf4f", display: "block"}}>from 8 years </span></h2>*/}
            {/*        <p> Where to grow your business as a photographer</p>*/}
            {/*        <button*/}
            {/*            style={{color: "#ffffff", background: "#4caf4f", border: "none", borderRadius: "5px", padding: "15px 30px"}}>Register*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="Our-Client">*/}
            {/*    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>*/}
            {/*        /!*<p> Our Clients</p>*!/*/}
            {/*        /!*<p>We have been working with some Fortune 500+ clients</p>*!/*/}
            {/*        /!*<div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>*!/*/}
            {/*        /!*    <img src={Logo1} alt="Logo8"/>*!/*/}
            {/*        /!*    <img src={Logo2} alt="Logo9"/>*!/*/}
            {/*        /!*    <img src={Logo3} alt="Logo1"/>*!/*/}
            {/*        /!*    <img src={Logo4} alt="Logo2"/>*!/*/}
            {/*        /!*    <img src={Logo5} alt="Logo3"/>*!/*/}
            {/*        /!*    <img src={Logo6} alt="Logo7"/>*!/*/}
            {/*        /!*    <img src={Logo7} alt="Logo6"/>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*    </div>*/}

            {/*    <div className="member">*/}
            {/*        <div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>*/}
            {/*            <p>Manage your entire community in a single system</p>*/}
            {/*            <h6>Who is Nextcent suitable for?</h6>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    /!*<div className="member2">*!/*/}
            {/*    /!*    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>*!/*/}
            {/*    /!*        <img src={Logo8} alt = ""/>*!/*/}

            {/*    /!*    </div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
        </>
    )
}

export default Navbar;