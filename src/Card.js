import React from "react"


export default function Card(props) {
  return (

    <div>

   <div className="card" id="card">
     
    

     <img className="cim" src={props.iml} />

     <div className="cwrt">

       <img className="star" src="../images/Star 1.png"/>
       <span>{props.sttr}</span>
       <span className="grey">{props.no}</span>
              <span className="grey">{props.pl}</span>
       {props.os==0 &&  <span className="so">SOLD OUT</span> }
        {props.os!="0" &&  <span className="grey">{props.loc}</span> }
       

       <div>
       
                   <p className="pp" id="pp">{props.para}</p>
            <p className="pp"><span className="bold">{props.rate}</span> / person</p>
       
       
       
       </div>
     
     
     
     </div>
   
   
   
   
   
   </div>




    </div>





  )
}

