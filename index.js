import React from "react";
import ReactDOM from "react-dom/client";


const heading =React.createElement('h1',{ id : 'head' , xyz : 'abc'},'hello shubham');

console.log(heading);
console.log(typeof heading);

const root1 =ReactDOM.createRoot(document.querySelector('.first'));
console.log(root1);
console.log(typeof root1);
root1.render(heading);// this will be replace all stuff inside that first class div 

const parent =React.createElement('div' , {id: 'parent'} ,
[
    React.createElement('div' , {id: 'child1'} ,

[React.createElement('h2' , {}, 'this is child1 h2 tage inside parent div and child div'),
React.createElement('h2' , {}, 'this is sibling  of  h2 tage ')]) , 

React.createElement('div' , {id: 'child2'} ,

[React.createElement('h2' , {}, 'this is child2 h2 tage inside parent div and child div'),
React.createElement('h2' , {}, 'this is sibling  of  h2 tage ')])
]
);



const root2 =ReactDOM.createRoot(document.querySelector('.second'));
root2.render(parent);
console.log(parent);




