import React from 'react'
import './App.css';
import reaJsx from './assets/reajsx.jpeg'


function App() {
  // declaire a variable first and we can use later in the function
  const name = "hello react"
  const sum = (a,b) => a + b; // arrow function 
  // styling the tow images with object declaring as function
  const style = { 
    width : "50%"
  }

  const styleImage = { 
    width : "50%"
  }

   const styleReajsx ={
     width : "50%"
   }


  return (
    <div className="App"  style={{backgroundColor: "#38e2f1"}}>
      <h1>{name}</h1> 
      {/* //the {} alawyd work with in jsx  */} 
      {/* use the expression to view data */}
       <h2>{sum(3,5)}</h2>
       <h3>{5*10}</h3>

        {/* how to close unclosing tag   */}
        <hr  style={{width :" 50%"}}/>
        <img />
         <br />
         <br />
        <br />
        
       {/* put some images in the web site */}
       {/* the alt is necessary for the refrence website and to avoind the bugs in the programe */}

       <img  src="index.png"  alt="react"   style = { style }/> <br/> <br/>
        <h1> + </h1>
       <img src="images.png" alt="jsx"  style = { styleImage } /> <br/> <br/>
       <h1> =</h1>
       <img src={reaJsx } alt="reactjsx"  style = {styleReajsx}/>

    </div>
  );
}

export default App;
