import style from '../section2/section.module.css'
import UserMember from "../../../../asset/icons/UserMember";
import Icon6 from "../../../../asset/icon6.png"
import Event from  "../../../../asset/icons/Event"
import Payment from "../../../../asset/icons/Payment";

const Section2 = () => {
    return (

        <div className={style.homeContainer}>
            <div>
                <p>Helping a local <br/>
                    <span style={{color: "green"}}> business reinvent itself</span>
                </p>


            </div>


            <div>
                <div className={style.imgStyle}>
                    <div style={{display: 'flex'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '2px'}}><UserMember/></div>

                        <div className={style.hold} style={{marginTop: "10px"}}>
                            <div><span>2,245,341</span></div>
                            <div className={style.members}><span>Member</span></div>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                        <div><img style={{width: '40px', display: 'flex', alignItems: 'center', marginTop: '10px'}}
                                  src={Icon6} alt=" "/></div>

                        <div style={{marginTop: "15px"}}>
                            <div><span>46,328</span></div>
                            <div className={style.members}><span>Clubs</span></div>
                        </div>
                    </div>
                </div>

                <div className={style.imgStyle2}>
                    <div style={{display: 'flex'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '-2px'}}><Event/></div>
                        <div style={{marginTop: "13px"}}>
                            <div><span>828,867</span></div>
                            <div className={style.eventS}><span>Event Booking</span></div>
                        </div>
                    </div>

                    <div style={{display: 'flex', marginLeft: "40px"}}>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '-2px'}}><Payment/></div>
                        <div className={style.hold} style={{marginTop: "10px"}}>
                            <div><span>1,926,436</span></div>
                            <div className={style.pay}><span>Payment</span></div>
                        </div>
                    </div>
                </div>
                <span className={style.textStyle}>We reached here with our hard work and dedication</span>
            </div>

        </div>
    )
}

export default Section2;