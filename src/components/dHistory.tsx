import '../styles/custom.scss'
import BloodPressureChart from './chart.jsx'
import heart from '../assets/Heart.svg'
import lungs from '../assets/lungs.svg'
import temp from '../assets/temp.svg'
import lower from '../assets/lower.svg'

export default function History(){
    return(
        <div className='history'>
            <div className='dhistory'>
                <p className='text3 px-3 pt-3'>Diagnosis History</p>
                <div><BloodPressureChart/></div>
            
            <div className='container-fluid d-flex p-3'>
                <div className='col-4 box1 me-2'>
                    <a href="#">
                        <li className='list-unstyled'><img src={lungs}/></li>
                        <li className='list-unstyled text4'>Respiratory Rate</li>
                        <li className='list-unstyled text5'>20 bpm</li>
                        <li className='list-unstyled text1'>Normal</li>
                        </a>
                </div>
                <div className='col-4 box2 me-2'>
                    <a href="#">
                        <li className='list-unstyled'><img src={temp}/></li>
                        <li className='list-unstyled text4'>Temperature</li>
                        <li className='list-unstyled text5'>98.6 F</li>
                        <li className='list-unstyled text1'>Normal</li>
                        </a>
                </div>
                <div className='col-4 box3'>
                    <a href="#">
                        <li className='list-unstyled'><img src={heart}/></li>
                        <li className='list-unstyled text4'>Heart Rate</li>
                        <li className='list-unstyled text5'>78 bpm</li>
                        <li className='text1 list-unstyled'><img src={lower}/> Lower than average</li>
                        </a>
                </div>
            </div>
            </div>
            <div className='list'><p className='text3 px-3 pt-3'>Diagnosis List</p>
            <div className='container-fluid d-flex align-items-center py-2 grey'>
                <div className='col-4 me-1 align-items-start'><p>Problem/ Diagnosis</p></div>
                <div className='col-4 ms-1 me-3'><p>Discription</p></div>
                <div className='col-4 align-items-end'><p>Status</p></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-4 me-1 align-items-start'><li className='list-unstyled'>Hypertansion</li></div>
                <div className='col-4 ms-1 me-3'><li className='list-unstyled'>Chronic high blood pressure</li></div>
                <div className='col-4 align-items-end'><li className='list-unstyled'>Under observation</li></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-4 me-1 align-items-start'><li className='list-unstyled'>Type2 Diabetes</li></div>
                <div className='col-4 ms-1 me-3'><li className='list-unstyled'>Insuline resistance and elevated blood sugar</li></div>
                <div className='col-4 align-items-end'><li className='list-unstyled'>Cured</li></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-4 me-1 align-items-start'><li className='list-unstyled'>Asthama</li></div>
                <div className='col-4 ms-1 me-3'><li className='list-unstyled'>Recurrent of episodes of bronchial constriction</li></div>
                <div className='col-4 align-items-end'><li className='list-unstyled'>Inactive</li></div>
            </div>
            </div>
        </div>
    )
}