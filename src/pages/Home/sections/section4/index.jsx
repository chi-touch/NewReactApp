import img from "../../../../asset/image 9.png"
import log1 from "../../../../asset/Logo1.png"
import log2 from "../../../../asset/Logo2.png"
import log3 from "../../../../asset/Logo3.png"
import log4 from "../../../../asset/Logo4.png"
import log5 from "../../../../asset/Logo5.png"
import log6 from "../../../../asset/Logo6.png"
import style from "./index.module.css"
const Section4 = () =>{
    return (
        <>
            <div className={style.sect4Style}>
                <div>
                    <img src={img} alt= ""/>
                </div>
                <div>

                    <p style={{color:"gray"}}>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                        enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                        mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                        eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                        vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
                        id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <div>
                        <a style={{color:"#4CAF4F",fontSize:"20px"}}>Tim Smith</a>
                    </div>
                    <div>
                        <p style={{color:"gray"}} >British Dragon Boat Racing Association</p>
                    </div>
                    <div className={style.logStyle}>
                        <img src={log1} alt=""/>
                        <img src={log2} alt=""/>
                        <img src={log3} alt=""/>
                        <img src={log4} alt=""/>
                        <img src={log5} alt=""/>
                        <img src={log6} alt=""/>
                        <a style={{color: "#4CAF4F",fontSize:"7px"}}>Meet all customers --></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section4;