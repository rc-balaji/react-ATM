import { useState,useContext,createContext } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Withdraw } from './components/Transaction/Withdraw'
import { Balance } from './components/Transaction/Balance'
import { Deposit } from './components/Transaction/Deposit'
import { ChangePass } from './components/Transaction/ChangePass'
import { Nav } from './components/Nav'
import { Signin } from './components/Signin'


const ATMContext = createContext()


export const useATMContext = () =>{
  return useContext(ATMContext)
}
function App() {
  const [userName,setUserName] = useState("")
  const [pass,setPass] = useState("")
  const [accno,setAccno] = useState("")
  const [balance,setBalance] = useState(0)

  return (
   <div >
    <ATMContext.Provider value={{pass,setPass,userName,accno,balance,setAccno,setBalance,setUserName}}>
    <BrowserRouter>
    <Routes>
        <Route  path='/' element={<Signin/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/withdraw' element={<Withdraw/>}/>
        <Route  path='/balance' element={<Balance/>}/>
        <Route  path='/deposit' element={<Deposit/>}/>
        <Route  path='/changepass' element={<ChangePass/>}/>
    </Routes>
    </BrowserRouter>
    </ATMContext.Provider>

   </div>
  )
}

export default App
