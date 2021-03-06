import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/context";


export const AppRoutes = ()=>{
  const {toggleTheme} = useAppThemeContext()
  return(
      <Routes>
          <Route path="/pagina-inicial" element={<Button variant="contained" onClick={toggleTheme}>Página inicial</Button>}></Route>
          <Route path="*" element={<Navigate to="/pagina-inicial" />}></Route>

      </Routes>

  )
}