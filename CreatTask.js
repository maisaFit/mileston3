# mileston3
import './App.css';
import './liststyle.css';
import List from "./List";
import ContactUs from "./ContactUs";
import ViewDetails from "./ViewDetails";
import CreatTask from "./CreatTask";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/ViewDetails" element={<ViewDetails/>} />
          <Route path="/CreatTask" element={<CreatTask/>} />       
      </Routes>
    </BrowserRouter>
       
   </div>
  );
};

export default App;
