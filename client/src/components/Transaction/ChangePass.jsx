import React, { useState } from 'react'
import { useATMContext } from '../../App'
import { Nav } from '../Nav'

export const ChangePass = () => {

    const {pass,setPass} = useATMContext()

    const [oldpass,setOldPass] = useState('')
    const [newpass,setNewPass] = useState('')
    const [conpass,setConPass] = useState('')
    const ChangePassword = ()=>{
            if(pass!==oldpass){
                alert("Old Password is Incorrect")
                return
            }
            if(newpass!==conpass ){
                alert("Confirm Password Mismatch")

            }else {
                setPass(newpass)
                setNewPass('')
                setOldPass('')
                setConPass('')
                alert("Password Changed Succesfully")
            }
    }
  return (
    <div><Nav/>
    <div style={{
        display:'flex',
        flexDirection:'column',
        marginLeft:'650px',
        border:'1px solid black',
        width:'300px',
        padding:'30px'
        ,borderRadius:'10px',
        backgroundColor:'bisque'
    }} >
        <h2 style={{textAlign:'center'}} >Changing Your PIN</h2>
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'300px',
            gap:'10px'
            
        }}>
            <label htmlFor="OldPassword">Enter Old Password</label>
            <input  value={oldpass} name='Password' type='password' placeholder='old password' onChange={(e)=>{
                setOldPass(e.target.value)
            }} />
            <label htmlFor="New">Enter New Password</label>
            <input  value={newpass} name='Password' type='text' placeholder='new password' onChange={(e)=>{
                setNewPass(e.target.value)
            }} />
            <label htmlFor="ConPassword">Re-Enter New Password</label>
            <input  value={conpass} name='Password' type='text' placeholder='new password' onChange={(e)=>{
                setConPass(e.target.value)
            }} />


            <button style={{
                border:'1px solid black',
                padding:'3px',
                color:'White',
                fontSize:'20px',
                backgroundColor:'green'
            }}  onClick={ChangePassword} >Change</button>
        </div>
            </div>
    </div>
  )
}
