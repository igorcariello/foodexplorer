import { Routes, Route } from 'react-router-dom'

import{ Home } from "../pages/Home"
import{ Dish } from "../pages/Dish"
import{ Menu } from "../pages/Menu"
import { NotFound } from '../pages/NotFound'

export function ClientRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dish/:dish_id' element={<Dish />} />
      <Route path='/menu' element={<Menu />} />

      <Route path='*' index element={<NotFound/>} />
    </Routes>
  )
}