import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {


  return (
    <div>


     <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update' element={<UpdateUser/>}></Route>
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
