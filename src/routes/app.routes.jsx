import { Routes, Route } from 'react-router-dom'

import{ Home } from "../pages/Home"
import{ Dish } from "../pages/Dish"
import{ EditDish} from "../pages/EditDish"
import{ Menu } from "../pages/Menu"
import { NewDish} from "../pages/NewDish"

export function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newDish' element={<NewDish />} />
      <Route path='/dish' element={<Dish />} />
      <Route path='/editDish/:id' element={<EditDish />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  )
}