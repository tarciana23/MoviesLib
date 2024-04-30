import {Outlet} from 'react-router-dom'
import { NavBar } from './components/NavBar'

import './App.css'


export function App() {
  return(
    <div className='App'>
    <NavBar/>
    <Outlet/>
    </div>
  )
 
}