import React, { useState } from 'react'
import { useATMContext } from '../../App'
import { Nav } from '../Nav'

export const Deposit = () => {
    const {balance,setBalance,pass} = useATMContext()
    const [amount,setAmount] = useState(0)


    const DepositAmnt = ()=>{
        const passi = prompt("Enter Your Password to Verify:")
        if(passi===pass && (amount===2000 ||  amount===500 || amount=== 200))
        {
            setBalance(amount+balance);
            alert("Deposit Sucessfully")
            setAmount('')
        }
        else {
            setAmount('')
            alert("Transaction Failed")
        }
    }
  return (
    <div><Nav/>
    <div style={{
        border:'1px solid black',
        width:'400px',
        padding:'30px',
        borderRadius:'10px',
        marginLeft:'600px',
        backgroundColor:'bisque'
    }} >
        <h1>Deposite Your Ammount</h1>
        <h3>Your Balance :Rs.{balance}</h3>
        <div style={{
            display:'flex',
            flexDirection:'column',
            fontSize:'larger',
            gap:'10px'
        }}>
            <label htmlFor='amount' >Enter Amount to be Deposit:</label>
            <input type='text' value={amount} placeholder='only accept 2000,500,200' onChange={(e)=>{
                setAmount(Number(e.target.value))
                
            }} />
            <button style={{
                border:'1px solid black',
                padding:'3px',
                color:'White',
                fontSize:'20px',
                backgroundColor:'green'
            }} onClick={DepositAmnt} >Deposit</button>
        </div>
    </div>
                </div>
  )
}
