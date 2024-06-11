import {section} from "./sectionMap/data";
import style from "./index.module.css"



const Section5 = () =>{
    return (
        <>
        <div className={style.sect5Style}>
            <div style={{textAlign:"center"}}>
                <div style={{fontSize:"35px"}}>
                    <a>Caring is the new marketing</a>
                </div>
                <div style={{color:"gray"}}>
                    <a>The Nexcent blog is the best place to read about the latest membership insights,<br/>
                        trends and more. See who's joining the community, read about how our community<br/>
                        are increasing their membership income and lot's more.​</a>
                </div>
            </div>

            <div className={style.imageStyle}>
                {
                    section.map((meme,index) =>(
                        <div key={index}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                width: "50%"
                            }}>
                                <img className={style.styleImg} src={meme.image} alt=""/>
                            </div>
                            <p className={style.textStyle} style={{width: "50%", textAlign: "center"}}>{meme.text} </p>

                            <div className={style.buttonStyle}>
                                <button style={{borderColor:"none",color:"green",border:"none",fontSize:"25px",background:"none"}}>Readmore --></button>
                            </div>

                        </div>
                    ))
                }



                {/*<button style={{color:"green"}}>Readmore --></button>*/}
                {/*<img src={img2} alt=""/>*/}
                {/*<button style={{color: "green"}}>Readmore --></button>*/}
                {/*<img src={img3} alt=""/>*/}
                {/*<button style={{color:"green"}}>Readmore</button>*/}
            </div>
        </div>
        </>
    )
}

export default Section5;