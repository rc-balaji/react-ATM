import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {

    const nav = useNavigate()
  return (
    <div><nav>
        <ul className='nav-list' style={{
            listStyle:'none',
            display:'flex',
            flexDirection:'row'
        }} >
            <li className='list-items'><button className='button' onClick={()=>{
                nav('/home')
            }} >Home</button></li>

            <li className='list-items'><button className='button' onClick={()=>{
                nav('/withdraw')
            }} >Withdraw Amount</button></li>

            <li className='list-items'><button className='button' onClick={()=>{
                nav('/deposit')
            }} >Deposit</button></li>


            
            <li className='list-items'><button className='button' onClick={()=>{
                nav('/changepass')
            }} >Change Pin</button></li>
            <li className='list-items'><button style={{
                backgroundColor:'red'
            }} className='button' onClick={()=>{
                nav('/')
            }} >Sign Out</button></li>
        </ul>


        
        </nav></div>
  )
}
