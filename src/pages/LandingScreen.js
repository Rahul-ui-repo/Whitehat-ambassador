import React, { useState } from 'react'
import  "./LandingScreen.scss";
import EmailModal from './emailModal';
import Store from "./Store";

function LandingScreen(props) {
    const [open, setOpen]= useState(false);
    const [rewardPoint, setRewardPoint]= useState(10000);
    const [quizPoint, setQuizPoint]= useState(1000);
    const rewardPointsHandler = (sub) =>{
        if(rewardPoint>=sub)
        setRewardPoint(rewardPoint-sub);

    }
    const rewardPointsIncrease = () =>{
        setRewardPoint(rewardPoint+1000);

    }
    return (
        <>
        <div className="container">
            {/* <h5 style={{textAlign:"center", marginTop:"20px"}}>Invite your school school/colony friends to earn more points</h5> */}
            <div className="d-flex">
             <div className="m-5">
                 <h5>Points that you have earned from quizzes and worksheet</h5>
                
                 </div>
             <div className="m-5">
                 <h5>Gift your friend a gift card and earn more Reward points</h5>
                  <h5>Reward Points {rewardPoint}</h5>
                 <button className="inviteBtn" onClick={()=>{setOpen(true)}}>Send Gift card to your friend</button>
                
             </div>
            </div>

            <div className="d-flex">
             <div className="left m-2">
             <table style={{border:"1px solid #000000"}} cellPadding="10" cellSpacing="10">
                     <tr style={{border:"1px solid #000000"}}>
                         <th style={{border:"1px solid #000000"}}>Your points</th>
                         <th style={{border:"1px solid #000000"}}>No. of quizzes completed</th>
                         <th style={{border:"1px solid #000000"}}>No. of worksheet completed</th>
                     </tr>
                     <tr style={{border:"1px solid #000000"}}>
                         <td style={{border:"1px solid #000000"}}>{rewardPoint}</td>
                         <td style={{border:"1px solid #000000"}}>5</td>
                         <td style={{border:"1px solid #000000"}}>5</td>
                     </tr>
                 </table >
             </div>
             <div className="right m-2">
             <table style={{border:"1px solid #000000"}} cellPadding="10" cellSpacing="10">
                     <tr style={{border:"1px solid #000000"}}>
                         <th style={{border:"1px solid #000000"}}>Name of friend</th>
                         <th style={{border:"1px solid #000000"}}>Trail class attended</th>
                         <th style={{border:"1px solid #000000"}}>Points Earned</th>
                     </tr>
                     <tr style={{border:"1px solid #000000"}}>
                         <td style={{border:"1px solid #000000"}}>Rahul</td>
                         <td style={{border:"1px solid #000000"}}>true</td>
                         <td style={{border:"1px solid #000000"}}>1000</td>
                     </tr>
                     <tr style={{border:"1px solid #000000"}}>
                         <td style={{border:"1px solid #000000"}}>Jitender</td>
                         <td style={{border:"1px solid #000000"}}>false</td>
                         <td style={{border:"1px solid #000000"}}>1000</td>
                     </tr>
                 </table >

             </div>

            </div>
            
        </div>
        <EmailModal modalShow={open} closeModal={()=>{setOpen(false)}}  rewardPointsIncrease={rewardPointsIncrease}/>

                    {/* <img src={StoreImage} alt=""/> */}
                    <Store rewardPoint={rewardPoint} quizPoint={quizPoint} rewardPointsHandler={rewardPointsHandler}/>
      </>

    )
}

export default LandingScreen
