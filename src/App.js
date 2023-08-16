import React ,{useState} from 'react'
import "./App.css"
export default function App(){

 const productData = [
  {  id:1  , mo:true ,name:'porsche wheel' , image:'wheel1.jpg', cost:'$20'},
  {  id:2 , mo:true ,name:'ferrari wheel' , image:'wheel2.jpg', cost:'$20'},
  {  id:3 , mo:true ,name:'Lamborghini wheel' , image:'wheel3.jpg', cost:'$20'},
]
 
const[squire,setSquire] =useState(productData)
const data = squire.map(item => ( 
    <div key={item.id} >
    <img src={item.image} alt={item.name}/>
    {item.name} {item.cost}
    <div className='buy' onClick={() => Wheel(item.id)}>
        { item.mo? <p>BUY</p> : <p>SOLD</p>}
        </div>

    </div>  
))

function Wheel(id) {
   setSquire(prevSquire => {
    const newSquires = []
    for(let i = 0;i < prevSquire.length ; i ++){
        const currentSquires = prevSquire[i]
        if(currentSquires.id === id){
           const updatedSquire = {
            ...currentSquires,
            mo:!currentSquires.mo
           }
           newSquires.push(updatedSquire)
        }else{
            newSquires.push(currentSquires)
        }
    }
    return newSquires
   } )
}

    return(       
        <div>
            <h1>Product:tyre</h1>
              {data}
        </div>
    )
}
   
