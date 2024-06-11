import PanIg from "../../../../asset/pana.png"
import style from "./index.module.css"

const Section3 = ()=>{
    return (
        <>
            <div className={style.sectStyle}>
                <div>
                    <img src={PanIg} alt=" "/>
                </div>

                <div style={{paddingTop:"70px", marginLeft:"70px"}}>
                    <span style={{fontSize:"30px"}}>How to design your site footer like <br/> we did</span>
                    <div>
                        <p style={{fontSize:"15px",color:"gray"}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
                            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
                            nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
                            Integer
                            in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et
                            nisi
                            ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button style={{
                            color: "white",
                            background: "green",
                            border: "none",
                            width: "20%",
                            height: "40px",
                            borderRadius: "8px"
                        }}>Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Section3;