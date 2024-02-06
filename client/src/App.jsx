import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CreateTable } from './CreateTable'
import { Table } from './table'
import UpdateTable from './UpdateTable'
import { ServiceTable } from './ServiceTable'
import { Nav } from './Nav'

export default function App() {

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/'element={<Table/>}></Route>
        <Route path='/create'element={<CreateTable/>}></Route>
        <Route path='/update/:id'element={<UpdateTable/>}></Route>
        <Route path='/service/:id'element={<ServiceTable/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

