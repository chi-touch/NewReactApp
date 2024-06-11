import ladImg from "../../../../asset/Frame 35.png"
import style from "./index.module.css"
const Section1 = () =>{

    return (

        <div className={style.styling1}>
            <img src={ladImg} alt=""/>
            <div>
                <h1 style={{display:"inline-block"}}>The unseen of spending three years at Pixelgrade </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius
                    fringilla. Pellentesque placerat vestibulum lorem sed
                     porta. Nullam mattis tristique iaculis. Nullam pulvinar sit
                    amet risus pretium auctor. Etiam quis massa pulvinar,
                    aliquam quam vitae, tempus sem. Donec
                    elementum pulvinar odio.</p>
                <button style={{color:"white",background:"green",border:"none",width:"20%",height:"40px",borderRadius:"8px"}}>Learn More</button>
            </div>
        </div>
    )
}

export default Section1;