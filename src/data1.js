import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function ClickHandler() {
   
    /*var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')*/
   
    /*var cartItems = document.getElementsByClassName('cartItems')[0];*/

     var x = localStorage.getItem("text1")
    console.log(x)
    var y = localStorage.getItem("text2")
    console.log(y)
    return(  <div style={{display:"flex",justifyItems:"center",justifyContent:"center"}}>
   <div style={{marginTop:"10%"}}>           
   <h1 style={{color:"orangered",display:"flex",justifyContent:"center"}}>Description:</h1>
   <h1 style={{display:"flex",justifyContent:"center",fontSize:"1.5vw",wordBreak:"break-word",minWidth:"50px",color:"white",textDecoration:"none"}}>{x}</h1>
   <div>
   <h1 style={{color:"orangered",display:"flex",justifyContent:"center"}}>PosterURL:</h1>
   </div>
   <a href={y} style={{textDecoration:"none"}}>
   <h1 style={{display:"flex",justifyContent:"center",fontSize:"1.5vw",wordBreak:"break-word",minWidth:"50px",color:"white",textDecoration:"none"}}>{y}</h1>
   </a>
   <br/>
   <Link to='/' style={{textDecoration:"none",display:"flex",justifyItems:"center",justifyContent:"center"}}> <button style={{textDecoration:"none",display:"flex",justifyContent:"center"}}  className="box13" >Home</button> </Link>
   </div>
   </div>
)

/*cartRow.innerHTML = cartRowContents
/*cartItems.append(cartRow)*/


}

export default ClickHandler;