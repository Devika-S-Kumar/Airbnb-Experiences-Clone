import React from "react"
import Card from  "./Card.js"
import Endi from  "./Endi.js"
import  "./App.css"


function Box() {

  return (
    <div>
    <div class="imb">
      <img src="/images/Group 77.png"></img>
      
      </div>

      <div class="wrt">
      <h1 class="hd">ONLINE EXPERIENCES</h1>
        
      <p class="hr">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
      </div>
      
      
     </div>
  )
}

export default function App() {

   return (

      <div>

      <nav class="nav">
        <img class="nav-log" src="/images/airbnb 1.png" />


      </nav>


      <Box />

                <h2>Top Sellers</h2>
      <div className="st">


     
        <Card
        iml="../images/image 12.png"
        sttr=" 5.0"
        no=" (6)."
        para="Life Lessons with Katie Zaferes"
        rate="From $136 /"
        os="0"  
          loc=" (Online)"
          pl="USA"
        
        />

        <Card
        iml="../images/2.jpeg"
        sttr=" 5.0"
        no=" (6)."
        para="Learn Wedding Photography"
        rate="From $125/"
                os="20" 
          loc=" (New York)"
          pl="USA"
        
        />
      

        <Card
        iml="../images/6.jpeg"
        sttr=" 5.0"
        no=" (30)."
        para="Get Cooking Lessons"
        rate="From $136 /"
                os="12"
          loc=" (Online)"
          pl="USA"
        />


            <Card
        iml="../images/3.jpeg"
        sttr=" 4.8"
        no=" (2)."
        para="Learn Music from Peres"
        rate="From $152 /"
                os="0"
              loc=" (Online)"
              pl="USA"
        />

      
            <Card
        iml="../images/81.jpeg"
        sttr=" 4.0"
        no=" (12)."
        para="Take a Hike"
        rate="From $252 /"
                os="11"
              loc=" (London)"
              pl="UK"
        />


        
            <Card
        iml="../images/82.jpeg"
        sttr=" 4.5"
        no=" (29)."
        para="Learn Ballet Dance"
        rate="From $175 /"
                os="3"
              loc=" (Online)"
              pl="USA"
        />


        
            <Card
        iml="../images/83.jpeg"
        sttr=" 4.2"
        no=" (11)."
        para="Learn photography"
        rate="From $152 /"
                os="0"
              loc=" (Online)"
              pl="Norway"
        />



        
            <Card
        iml="../images/84.webp"
        sttr=" 4.0"
        no=" (21)."
        para="Learn Yoga"
        rate="From $152 /"
                os="10"
              loc=" (Online)"
              pl="USA"
        />

    </div>









                        <h2>Make plans this weekend </h2>
      <div className="st">


     
        <Card
        iml="../images/1.webp"
        sttr=" 5.0"
        no=" (6)."
        para="Learn Surfing"
        rate="From $136 /"
        os="10"  
          loc=" (Ontario)"
          pl="Canada"
        
        />

        <Card
        iml="../images/brd.jpeg"
        sttr=" 5.0"
        no=" (6)."
        para="Learn Wedding Photography"
        rate="From $125/"
                os="0" 
          loc=" (New York)"
          pl="UK"
        
        />
      

        <Card
        iml="../images/32.jpeg"
        sttr=" 4.0"
        no=" (20)."
        para="Fun wine class"
        rate="From $116 /"
                os="0"
          loc=" (Online)"
          pl="USA"
        />


            <Card
        iml="../images/fig.jpeg"
        sttr=" 4.5"
        no=" (21)."
        para="Learn Figure skating from Bella"
        rate="From $170 /"
                os="10"
              loc=" (Dublin)"
              pl="Ireland"
        />

      
            <Card
        iml="../images/nood.jpeg"
        sttr=" 3.0"
        no=" (12)."
        para="Take chinessse cooking classes"
        rate="From $252 /"
                os="0"
              loc=" (Georgia)"
              pl="USA"
        />


        
            <Card
        iml="../images/mod.avif"
        sttr=" 4.5"
        no=" (29)."
        para="Learn Modelling from Ash"
        rate="From $190 /"
                os="3"
              loc=" (New York)"
              pl="USA"
        />


        
            <Card
        iml="../images/sh.webp"
        sttr=" 4.1"
        no=" (23)."
        para="Meet the woolly sheeps"
        rate="From $152 /"
                os="0"
              loc=" (Online)"
              pl="Nigeria"
        />



        
            <Card
        iml="../images/bali.avif"
        sttr=" 5.0"
        no=" (0)."
        para="Visit Bali with a local insider"
        rate="From $300 /"
                os="10"
              loc=" (Online)"
              pl="Bali"
        />

    </div>


    <Endi />
 
        

      </div>
)
}

