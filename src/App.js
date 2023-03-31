import React from "react";
import Home from "./Homepage";
import About from "./Aboutpage";
import SignInpage from "./SignInpage";
import Careerpage from "./Careerpage";
import { Route,Routes} from "react-router-dom";
import Contentdetails1 from "./Contentdetails";
import Contentdetails2 from "./Contentdetails2";
import Contentdetails3 from "./Contentdetails3";
import BasicInformationForm from "./Formdetails";

function App(){
    return(
      <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<SignInpage />} />
        <Route path="career" element={<Careerpage />} />
        <Route path="about" element={<Aboutpage />}>
        <Route path="form" element={<BasicInformationForm />}/>
          <Route exact path="contentdetails1" element={<Contentdetails1 />} />
          <Route exact path="contentdetails2" element={<Contentdetails2 />} />
          <Route exact path="contentdetails3" element={<Contentdetails3 />} />
        </Route>
      </Routes>
      </div>
    );
}

export default App;