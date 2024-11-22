import Navbar from "./components/navbar"
import './App.css'
import Patients from "./components/patients";
import History from "./components/dHistory";
import Jessica from "./components/jessica";
export default function App() {
  return(
    <>
    <Navbar/>
    <div className="container-fluid d-flex">
    <div className="col me-2"><Patients/></div>
    <div className="col me-2"><History/></div>
    <div className="col"><Jessica/></div>
    </div>
    </>
  )
}