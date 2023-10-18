import React, { useState } from 'react'
import { useATMContext } from '../App'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {

    const nav = useNavigate()
    const {setAccno,setBalance,setUserName,setPass} = useATMContext()
    const [uname,setUname] = useState()
    const [passi,setPassi] = useState()
    const userDetail = [
        {name:'Raj',pass:'123',accno:'454-545-45',balance:3000},
        {name:'Ram',pass:'234',accno:'123-456-78',balance:5000},
        {name:'Sami',pass:'345',accno:'345-678-90',balance:7000},
    
    ]

    const Valid = ()=>{
        var r=0
        userDetail.map((data)=>{
            if(data.name===uname && data.pass===passi){
                    r=1
                    setAccno(data.accno)
                    setBalance(data.balance)
                    setUserName(data.name)
                    setPass(data.pass)
            }else if(data.name===uname && data.pass!==passi ){
                r=2
            }
        })

        if(r==1){
            alert("Login Sucessfully")
            nav('/home')
        }else if(r==2){
            alert("InCorrect Password")
        }else{
            alert("Invalid Id and Password")
        }

    }

  return (
    <div style={{
        textAlign:'center',
        margin:'30px'
    }}>
        {/* <h1>Welocome ATM System</h1> */}
    <div style={{
        border:'1px solid black',
        width:'300px',
        display:'flex',
        flexDirection:'column',
        padding:'30px',
        gap:'10px',
        backgroundColor:'white',
        justifyContent:'center',
        textAlign:'center',
        marginLeft:'600px',
        marginTop:'200px'
        
    }} >
        <h3>Sign In</h3>
        <input  type='text'  placeholder='Enter Name'  onChange={(e)=>{
            setUname(e.target.value)
        }}/>
        <input  type='text'  placeholder='Enter Secrete Code' onChange={(e)=>{
            setPassi(e.target.value)
        }}/>
        <button onClick={Valid} >Log In</button>
    </div> </div>
  )
}
