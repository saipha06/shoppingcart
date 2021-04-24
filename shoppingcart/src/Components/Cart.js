/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React,{useState} from "react";
import { useSelector } from "react-redux";

function Cart(props){
   const [quantity,setQuantity] = useState(props.value.quantity)
   const {checkout} = useSelector(state=>state)
   const handleQuantity = (e)=>{
        console.log(e);
        if(e.type === "click"){
            e.target.value = 0
        }
        else{
            setQuantity(e.target.value)
        }
        setQuantity(e.target.value)
        axios.patch(`http://localhost:5000/cartDetails/${props.value.id}`,{quantity:e.target.value}).then(()=>{
            props.update()
        })
        
        
}
    return (
        <React.Fragment>
        <td style= {{width:'100px',height:'100px'}}>
            <img src = {props.value.image} style= {{width:'100px',height:'100px'}}></img>
        </td>
        <td style= {{width:'100px',height:'100px'}}>
            {props.value.name}
        </td>
        <td style= {{width:'100px',height:'100px'}}>
            <input disabled= {checkout} style = {{width:'40px'}} value = {quantity} type="number" min = "1" onChange={handleQuantity} ></input>
            
        </td>
        <td style= {{width:'100px',height:'100px'}}>
            {props.value.price}
        </td>
        <td style= {{width:'100px',height:'100px'}}>
           {!checkout&& <button className="btn btn-danger" onClick ={handleQuantity}>Remove Item</button>}
        </td>
        </React.Fragment>
    )

}

export default Cart