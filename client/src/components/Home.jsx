import React, { useState } from 'react'
import { useATMContext } from '../App'
import { Nav } from './Nav'

export const Home = () => {

    const {userName,accno,pass,balance} = useATMContext()
    const [isOn,setIsON] = useState(true)
  return (
    <div>
        <Nav/>
    <div style={{textAlign:'center',
        border:'1px solid black',
        width:'300px',
        padding:'30px',
        borderRadius:'20px',
        marginLeft:"650px",
        backgroundColor:'bisque'}} >
        <h1>Welocome , {userName}</h1>
        <h3>You Account Details</h3>
        <div style={{width:'500px'}}>
        <ul  style={{fontSize:'large',textAlign:'left',listStyle:'none',display:'flex',flexDirection:'column',gap:'20px'}}>
            
            <li>Account Number:{accno}</li>
            <li>Password : <span><input disabled={true} value={pass} type={isOn?'password':'text'} width={30}/></span></li>
            <li><button style={{
                backgroundColor:'lightskyblue',
                fontSize:'small'
            }} onClick={()=>{
                    setIsON(!isOn)
            }} > Show Password</button></li>
            <li>Balance : Rs.{balance} /-</li>
        </ul>
        </div>

    </div></div>
  )
}
