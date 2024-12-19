import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AdminRoutes } from "./admin.routes";
import { ClientRoutes } from "./client.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  const { user } = useAuth()

  function AccessRoute(){
    switch(user?.role){
      case 'admin':
        return <AdminRoutes />
      case 'client':
        return <ClientRoutes />
      default: 
        return <ClientRoutes />
    }
  }

  return (
    <BrowserRouter>
      { user ? <AccessRoute/> :<AuthRoutes/>}
    </BrowserRouter>
  )
}