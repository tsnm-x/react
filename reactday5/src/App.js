import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Loginpage from "./pages/login";
import MainPage from "./pages/main";
import RegisterPage from "./pages/register";
import Details from "./pages/details";
import FavPage from "./pages/favorite";
import { LanguageChanger } from "./context/languageChanger";
import { useState } from "react";
import './App.css';

function App() {
  const [language, setLanguage] = useState("en"); 
  return (

    <LanguageChanger.Provider value={{language, setLanguage}}>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={'/'} exact component={MainPage} />
        <Route path={'/login'} exact component={Loginpage} />
        <Route path={'/register'} exact component={RegisterPage} />
        <Route path={'/movie-details/:id'} exact component={Details}/>
        <Route path={'/favorites'} exact component={FavPage}/>
      </Switch>
    </BrowserRouter>
    </LanguageChanger.Provider>

  );
}

export default App;
