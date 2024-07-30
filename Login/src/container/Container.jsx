import "./container.css";
import bg from "../assets/Background.jpeg";
import image from "../assets/imageCurve.png";
import icon from "../assets/google.png";

export default function Container() {
  return (
    <div className="container">
      <div className="c-left">
        <h2>login</h2>
        <form action="#">
          <div className="row">
            <label htmlFor="user">User Name</label>
            <input type="text" id="user" name="user" required />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
      <div className="c-right">
        <img src={bg} alt="" className="background" />
        <img src={image} alt="Background Image" className="side" />
        <div className="content">
          <div className="circle">
            <img src={icon} alt="" />
          </div>
          <p>
            Do not Have any account,yet? <a href="#">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
}
