import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'
import img9 from './images/9.jpg'
import img10 from './images/10.jpg'
import img11 from './images/11.jpg'
import React,{useRef,useState} from 'react'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import ClickHandler from './data1';


function Data() {

    const [cardData, setCardData] = useState([
        {
            img:img1,
            title:"Left behind : Alpocalypse",
            description:"New world order and rise on the antichrist",
            posterURL:"https://www.youtube.com/watch?v=mUnoDwp8jag",
            rating:"4/5"
        },
        {
            img:img2,
            title:"Left behind : Tribulation forces",
            description:"tribulation forces and the trip to the middle east",
            posterURL:"https://www.youtube.com/watch?v=8ufGPr87G-8",
            rating:"4/5"
        },
        {
            img:img3,
            title:"Left behind : World war three",
            description:"Biological and chemical world war",
            posterURL:"https://www.youtube.com/watch?v=Fuvx2C2v-Rs",
            rating:"5/5"
        },
        {
            img:img4,
            title:"She is the man",
            description:"Comedy and romance movie",
            posterURL:"https://www.youtube.com/watch?v=4yZ_DO_q1ns&list=PL8ApzIJur6qcmxeXwEoqgwCCn5BzpDle8",
            rating:"4/5"
        },
        {
            img:img5,
            title:"King solomons mines",
            description:"Discovery of the ancestors treasure",
            posterURL:"https://www.youtube.com/watch?v=v3scBi6E6TE",
            rating:"5/5"
        },
        {
            img:img6,
            title:"Welcome to the jungle",
            description:"Discovery,action and adventures",
            posterURL:"https://www.youtube.com/watch?v=RBto1iQL8Mc",
            rating:"3/5"
        },
        {
            img:img7,
            title:"Rambo",
            description:"Rambo take action in viet war",
            posterURL:"https://www.youtube.com/watch?v=IfL6mFfXFv4",
            rating:"4/5"
        },
        {
            img:img8,
            title:"Armagueddon",
            description:"The rise and the downfall of the antichrist",
            posterURL:"https://www.youtube.com/watch?v=Z95n2Corwiw",
            rating:"4/5"
        },
        {
            img:img9,
            title:"Mongols : Genghis Khan",
            description:"Genghis Khan rise to power and Mongol empire",
            posterURL:"https://www.youtube.com/watch?v=MxGpFY6OJWg",
            rating:"5/5"
        },
        {
            img:img10,
            title:"Notre dame de Paris",
            description:"Oeuvre romanesque de Victor Hugo",
            posterURL:"https://www.youtube.com/watch?v=DogK2rd-plI",
            rating:"5/5"
        },
    ]);
   

const [searchText, setSearchText] = useState("");
const [data1, setData1] = useState(cardData);
const excludecolumns = ["description","posterURL","img"];
const handleChange = value => {
      setSearchText(value);
      filterData(value);
}
const filterData = value => { 
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        setData1(cardData);
    }
    else{
        const filterData = data1.filter(item => {
        return Object.keys(item).some(key => {
        return excludecolumns.includes(key)? false : item[key].toString().toLowerCase().includes(lowerCaseValue);
        })
        });
        setData1(filterData);
    }
}
const titleInput = useRef();
const descriptionInput = useRef();
const PosterUrlInput = useRef();
const ratingInput = useRef();

    const handleSubmit = (e) => {
       e.preventDefault();  
    const title1 = titleInput.current.value;
    const description1 = descriptionInput.current.value;
    const posterURL1 = PosterUrlInput.current.value;
    const rating1 = ratingInput.current.value; 
    if((title1==="")||(description1==="")||(posterURL1==="")||(rating1===""))
    {return}
     
    let product = [{
        img:img11,
        title:title1,
        description:description1,
        posterURL:posterURL1,
        rating:rating1
    }];
    console.log(product);
    
    let arr = data1.concat(product) ;
    setCardData(arr);
    setData1(arr);  
   
}
      return (
         <Router>
             
        <Route exact path='/'  render={() => {return (
        <div style={{marginTop:"8%",marginBottom:"15%"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:"5%",marginRight:"5%",marginBottom:"8%"}}>
                     <div>
                        <h1 style={{color:"white"}}>Search</h1>
                        <p style={{color:"white"}}>Filter(Title,Rating)</p>
                        <input  
                        type="text"
                        value={searchText}
                        onChange={e => handleChange(e.target.value)}
                        className="box160"
                        />
                    </div>
                    <div>
            <form style={{display:"flex",flexDirection:"column"}}>
          <h1 style={{color:"white"}}>Add your favourite movie</h1>      
          <label style={{color:"white"}}>Title:<input placeholder="title" type="text" className="box150" ref={titleInput} required /></label> 
          <br/> 
          
          <label style={{color:"white"}}>Description:<input placeholder="description" type="text" className="box150" ref={descriptionInput} required /></label> 
           
          <br/>
          <label style={{color:"white"}}>PosterURL:<input placeholder="posterURL" type="url" className="box150" ref={PosterUrlInput} required /></label> 
          <br/>
          <label style={{color:"white"}}>Rating:<input placeholder="rating" type="text" className="box150" ref={ratingInput} required /></label> 
          <br/>
          <div className="box170">
          <button className="box13" onClick={handleSubmit}>Submit</button>
          <button className="box13" type="reset">Reset</button>
          </div>
          </form>
          </div>
          </div>
          <div style={{display:"grid",textDecoration:"none",gridTemplateColumns:"30% 30% 30%",marginLeft:"6%"}} >
            
          {data1.map((item) => {
                localStorage.setItem('text1',item.description); 
                localStorage.setItem('text2',item.posterURL);
                return(
                <div style={{marginLeft:"1.5%",marginRight:"1.5%",marginTop:"1.5%",marginBottom:"1.5%",textDecoration:"none"}}>
                    <div style={{width:"100%",marginLeft:"1.5%",textDecoration:"none",marginRight:"1.5%",marginTop:"1.5%",backgroundColor:"white",marginBottom:"1.5%",height:"auto",border:"1px solid",borderRadius:"6px 6px 6px 6px"}} onClick={() => {localStorage.setItem('text1',item.description); localStorage.setItem('text2',item.posterURL);} }>
                    <Link to="/description and trailer" style={{textDecoration:"none"}} >
                        <img src={item.img} style={{width:"100%",height:"300px",borderRadius:"6px 6px 6px 6px"}} alt="" />
                        <div  style={{width:"100%",height:"auto",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold"}}>
                        <div style={{display:"inline-flex"}}> 
                            <p style={{color:"blue"}} >Title:</p>
                            <p style={{display:"flex",fontSize:"1.2vw",wordBreak:"break-word",minWidth:"50px",color:"black"}}>{item.title}</p>
                        </div>
                        <div style={{display:"inline-flex"}}>
                           
                            <p style={{color:"blue"}}>Description:</p>
                            <p style={{display:"flex",fontSize:"1.2vw",wordBreak:"break-word",minWidth:"50px",color:"black"}}>{item.description}</p>
                        
                        </div>
                        
                            <div>
                        <div style={{display:"inline-flex"}}> 
                            
                            <p style={{color:"blue"}}>PosterURL:</p>
                            <p style={{display:"flex",fontSize:"1.2vw",wordBreak:"break-word",minWidth:"50px",color:"black"}}> {item.posterURL}</p>
                          
                        </div>
                        <div style={{display:"inline-flex",textDecoration:"none"}}> 
                            <p style={{color:"blue",textDecoration:"none"}}>Rating:</p>
                            <p style={{display:"flex",textDecoration:"none",fontSize:"1.2vw",wordBreak:"break-word",minWidth:"50px",color:"black"}} >{item.rating}</p>
                        </div>
                        </div>
                         
                        </div>
                        </Link>
                        
                    </div>
                </div>
                )
            })}  
           
          </div>
        </div>
        )}} />
          <Route  path='/description and trailer'  render={() =>( <ClickHandler/> )}/>
        </Router> 
        ); 

}

export default Data;
