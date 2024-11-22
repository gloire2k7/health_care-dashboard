import Logo from "../assets/Logo.svg";
import Home from "../assets/home.svg";
import Patients from "../assets/patients.svg";
import Scedure from "../assets/scedure.svg";
import Message from "../assets/message.svg";
import Transactions from "../assets/transactions.svg";
import DrJose from "../assets/DrJose.png";
import Settings from "../assets/settings.svg";
import More from "../assets/more_vert.svg";
import "../styles/custom.scss";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid d-flex align-items-center">
                
                <div className="col-2 text-start d-flex align-items-center me-5">
                    <a href="#" className="navbar-brand">
                        <img src={Logo} alt="Logo"/>
                    </a>
                </div>

                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div
                    className="collapse navbar-collapse col-4 justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav d-flex justify-content-center align-items-center">
                        <li className="nav-item d-flex align-items-center me-3">
                            <a className="nav-link text2 d-flex align-items-center" href="#">
                                <img src={Home} className="img-fluid me-1" alt="Home" />
                                Overview
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center custom-button me-3">
                            <a className="nav-link text2 d-flex align-items-center" href="#">
                                <img src={Patients} className="img-fluid me-1" alt="Patients" />
                                Patients
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center me-4">
                            <a className="nav-link text2 d-flex align-items-center" href="#">
                                <img src={Scedure} className="img-fluid me-1" alt="Schedule" />
                                Schedule
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center me-3">
                            <a className="nav-link text2 d-flex align-items-center" href="#">
                                <img src={Message} className="img-fluid me-1" alt="Message" />
                                Message
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link text2 d-flex align-items-center" href="#">
                                <img src={Transactions} className="img-fluid me-1" alt="Transactions"/>
                                Transactions
                            </a>
                        </li>
                    </ul>
                </div>

                
                <div className="col-4 d-flex align-items-center justify-content-end me-3">
                    <div className="me-3 d-flex align-items-center">
                        <img
                            src={DrJose}
                            className="img-fluid rounded-circle"
                            alt="Dr. Jose"
                            style={{ width: "40px", height: "40px" }}
                        />
                    </div>
                    <div className="text-end me-3">
                        <p className="mb-0 text2">Dr. Jose Simmons</p>
                        <p className="mb-0 text13">General Practitioner</p>
                    </div>
                    <div className="me-2 d-flex align-items-center">
                        <a href=""><img src={Settings} alt="Settings" className="img-fluid" /></a>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href=""><img src={More} alt="More" className="img-fluid" /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
