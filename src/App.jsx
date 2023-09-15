import {NavBar, Home, About, Courses, Teacher, Contact, Responsables, Footer, SignUp, SignIn} from "./components/index";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>


        <Switch>
          <Route exact path={"/"}>
            <div className="font-Poppins bg-PrimaryBlue">
              <NavBar/>
              <Home/>
              <About/>
              <Courses/>
              <Teacher/>
              <Responsables />
              <Contact/>
              <Footer/>
            </div>
          </Route>

          <Route path={"/signup"} >
            <SignUp /> 
          </Route>

          <Route path={"/signin"} >
            <SignIn />
          </Route>
        </Switch>


        
      
      
    </>
  )
}

export default App
