import dob from '../assets/dob.svg'
import female from '../assets/Female.svg'
import insurance from '../assets/Insurance.svg'
import phone from '../assets/Phone.svg'
import jess from '../assets/Layer 2.png'
import dowload from '../assets/download.svg'

export default function jessica() {
    return(
        <>
        <div className='jessica'>
            <div className='profile px-5 mx-4 py-3'>
                <img src={jess}/>
                <p className='text3 px-1'>Jessica Tylor</p>
            </div>
            <div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><img src={dob}/></div>
                <div className='col-8 ms-1'><li className='text1 list-unstyled'>Date of Birth</li><li className='text8 list-unstyled'>August23, 1996</li></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><img src={female}/></div>
                <div className='col-8 ms-1'><li className='text1 list-unstyled'>Gender</li><li className='text8 list-unstyled'>Female</li></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><img src={phone}/></div>
                <div className='col-8 ms-1'><li className='text1 list-unstyled'>Contact info</li><li className='text8 list-unstyled'>(415) 555-1234</li></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><img src={phone}/></div>
                <div className='col-8 ms-1'><li className='text1 list-unstyled'>Emergency contact</li><li className='text8 list-unstyled'>(415) 555-5678</li></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><img src={insurance}/></div>
                <div className='col-8 ms-1'><li className='text1 list-unstyled'>Insurance Provider</li><li className='text8 list-unstyled'>Sunrise Health Assurance</li></div>
            </div>
            </div>
            <div>
                <button className='custom-button px-3 py-1 ms-5 mb-3 mt-4'>Show All Information</button>
            </div>
        </div>
        <div className='report'>
            <p className='text3 px-3 pt-3'>Lab Results</p>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-10 me-1 align-items-start'><p>Blood Test</p></div>
                <div className='col-2 ms-1 me-3 align-items-end'><img src={dowload}/></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2 grey2'>
                <div className='col-10 me-1 align-items-start'><p>CT Scans</p></div>
                <div className='col-2 ms-1 me-3 align-items-end'><img src={dowload}/></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-10 me-1 align-items-start'><p>Radiology Report</p></div>
                <div className='col-2 ms-1 me-3 align-items-end'><img src={dowload}/></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-10 me-1 align-items-start'><p>X-Rays</p></div>
                <div className='col-2 ms-1 me-3 align-items-end'><img src={dowload}/></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-10 me-1 align-items-start'><p>Urine Test</p></div>
                <div className='col-2 ms-1 me-3 align-items-end'><img src={dowload}/></div>
            </div>
        </div>
        </>
    )
}