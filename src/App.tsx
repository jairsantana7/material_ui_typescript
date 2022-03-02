
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/context";
import { LightTheme } from "./shared/themes";


export const App =()=> {
  return (
    <AppThemeProvider >
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
     </AppThemeProvider>
  );
}

