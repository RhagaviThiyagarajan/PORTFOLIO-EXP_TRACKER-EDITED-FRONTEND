import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form.js";
import { ContextProvider } from "./store/Context";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./store/Context";
import { useContext } from "react";
import Signup from "./signup/Signup.jsx";
function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-3 gap-4">
       
        </div>
      </div>
     

      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
            <div>
              <Graph /><Form/>
            </div>
          }></Route>
          
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
   
  );
}

export default App;
