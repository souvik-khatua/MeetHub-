
import "../App.css";
import { Link, useNavigate } from "react-router-dom";


export default function LandingPage(){

    const router = useNavigate();
    return (
        <div className='landingPageContainer'>
          <nav>
                <div className='navHeader'>
                    <h2>souvik's Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/ak47")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color: "#FF9839"}}>connect</span> with your loved ones</h1>

                    <p> souvik's Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/landing1.jpg"/>
                </div>
            </div>

        </div>

        

    )
}



