import '../styles/custom.scss'
import Search from "../assets/search.svg"
import Emily from "../assets/emily.png"
import Ryan from "../assets/ryan.png"
import Brandon from "../assets/brandon.png"
import Jessica from "../assets/jessica.png"
import Samantha from "../assets/samantha.png"
import Ashley from "../assets/ashley.png"
import Olivia from "../assets/olivia.png"
import Tyler from "../assets/tyler.png"
import Kevin from "../assets/kevin.png"
import Dylan from "../assets/dylan.png"
import Nathan from "../assets/nathan.png"
import Mike from "../assets/mike.png"
import More from "../assets/more_horiz.svg"


export default function Patients() {
    return (
        <div className='patients'>
            <div className='container-fluid d-flex'>
                <div className='col-10 me-7 align-items-start'><p className='text3 py-2 pl-5'>Patients</p></div>
                <div className='col-2  align-items-end py-2'><a href="#"><img className='img-fluid ' src={Search} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Emily} alt="emily" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Emily Williams</li><li className='text13 list-unstyled'>Female, 18</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Ryan} alt="ryan" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Ryan Johnson</li><li className='text13 list-unstyled'>Male, 18</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Brandon} alt="brandon" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Brandon Mitchwell</li><li className='text13 list-unstyled'>Male, 36</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2 jess'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Jessica} alt="Jessica" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Jessica Tylor</li><li className='text13 list-unstyled'>Female, 28</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Samantha} alt="samantha" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Samantha Johnson</li><li className='text13 list-unstyled'>Female, 56</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Ashley} alt="ashley" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Ashley Martinez</li><li className='text13 list-unstyled'>Female, 54</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Olivia} alt="olivia" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Olivia Brown</li><li className='text13 list-unstyled'>Female, 32</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Tyler} alt="tyler" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Tyler Davis</li><li className='text13 list-unstyled'>Male, 19</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Kevin} alt="kevin" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Kevin Anderson</li><li className='text13 list-unstyled'>Male, 30</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Dylan} alt="dylan" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Dylan Thompson</li><li className='text13 list-unstyled'>Male, 36</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Nathan} alt="ryan" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Nathan Evans</li><li className='text13 list-unstyled'>Male, 58</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
            <div className='container-fluid d-flex align-items-center py-2'>
                <div className='col-2 me-1 align-items-start'><a href="#"><img src={Mike} alt="ryan" className='users' /></a></div>
                <div className='col-8 ms-1'><a href="#"><li className='text2 list-unstyled'>Mike Nolan</li><li className='text13 list-unstyled'>Male, 31</li></a></div>
                <div className='col-2 align-items-end'><a href="#"><img className='img-fluid' src={More} alt="serch" /></a></div>
            </div>
        </div>
    )

}

