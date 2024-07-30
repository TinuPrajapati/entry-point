import "./container.css";
import bg from "../assets/Background.jpeg";
import image from "../assets/imageCurve.png";
import icon from "../assets/google.png";

export default function Container() {
  return (
    <div className="container">
      <div className="c-left">
        <h2>Sign-Up</h2>
        <form action="#">
          <div className="row">
            <label htmlFor="user">User Name</label>
            <input type="text" id="user" name="user" required />
          </div>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="row">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" id="confirm" name="confirm" required />
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
            Already have an account, yet? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
