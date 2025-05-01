import {Routes, Route} from "react-router-dom";
import Home from "./home/Home";
import TutorialCards from "./components/Tuteriol";
import Chatbot from "./ChatBot/Chatbot";


export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Tutorials" element={<TutorialCards/>} />
    <Route path="/Chatbot" element={<Chatbot/>} />
    <Route path="/services" element={<h1 className="text-3xl font-bold underline">Services</h1>} />
    <Route path="/products" element={<h1 className="text-3xl font-bold underline">Products</h1>} />
   </Routes>
   </>
  )
}