import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import './App.css'


function App() {

  return (
    <>
      <div className="shadow">
      <Navbar />

      </div>
      
      
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
      


      
    </>
  )
}

export default App
