import { BrowserRouter, Routes, Route } from "react-router-dom"
//import DisplayedPart from "./components/Dashboard/DisplayedPart"
import SidebarDashboard from "./components/Dashboard/SidebarDashboard"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DisplayedTool from "./components/Tools/DisplayedTool"
import SidebarTools from "./components/Tools/SidebarTools";

function App() {
   
      console.log("bouh2");

     /* if(!parts.list){
        dispatch(getPartsFromAPI())
      }*/
  return( 
  <>
  <Navbar/>
  <div className="bg-slate-800 min-h-screen flex">
    <BrowserRouter>
 
     {/*<SidebarDashboard/>*/}
     <SidebarTools/>


      <Routes>
           <Route path="/tool/:title" element={<DisplayedTool/>} />
        {/*<Route path="/part/:id" element={<DisplayedPart/>} />*/}
      </Routes>
      
    </BrowserRouter>
 
  </div>
     <Footer/>
  </>
)}

export default App
