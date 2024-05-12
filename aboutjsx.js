//compomnet are put into <> and react element and js function are put it into{}


import React from "react";
import ReactDOM from "react-dom/client";

const heading =<h1>this is JSx heading</h1>;
console.log(heading);
console.log(typeof heading);

const heading2 =(<h2 id="head2" className="heading2">
    "this is with id and class"
    </h2>);

const root1 =ReactDOM.createRoot(document.querySelector('.first'));

root1.render(heading);


const root2 =ReactDOM.createRoot(document.querySelector('.second'));
root2.render(heading2);

//reactcomponent


const root3 =ReactDOM.createRoot(document.querySelector('.third'));

// const Comp = ()=>
// {
//     return <h3 id="compid">this is react component </h3>;
// }
//bellow code and above code both are same
 const Comp = ()=>
 (
      <h3 id="compid">this is react component </h3>
 );

root3.render(<Comp/>);

//component composition


const root4 =ReactDOM.createRoot(document.querySelector('.forth'));
const Newcomp =()=>
(
    <span>

    <hr></hr>
        <h3>this is inside </h3>
        {/* <Comp></Comp> */}
        {/* {Comp()} */}
        <Comp/> 
        {200+3 }
        {heading}
        {/* this way to call another  component into another component */}
        {/* all  three are same <Comp></Comp>=={Comp()}== <Comp/> any you use */}
        <h3>this is new component</h3>
        <hr></hr>
    </span>
)


root4.render(<Newcomp/>);
console.log(Newcomp);
console.log(<Newcomp/>);