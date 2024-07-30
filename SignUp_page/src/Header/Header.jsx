import "./Header.css";
import image from "../assets/image.png";

export default function Header(){
    return(
        <header>
            <div className="h-left">
                <img src={image} alt="" />
                <h1><span>Water</span>Wise</h1>
            </div>
            <div className="h-right">
                <button>SignUp</button>
                <button>Login</button>
            </div>
        </header>
    )
}