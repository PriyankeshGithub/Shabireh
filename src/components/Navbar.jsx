import logo from "../logo/shabirehLogo.jpg";
import '../components/NavbarStyle.css';
import { ImParagraphRight, ImCross } from "react-icons/im";
import { Component } from "react";
import { Link } from "react-scroll";


class Navbar extends Component{
  state ={clicked : false}
  handleclick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  

return(
  <>
    <nav>
        <div className="logoAndtext">
        
          <a href="index.html"><img class="navLogo" src={logo} alt="logo" /></a>
          <h2>Shabireh</h2>
        
        
        </div>
        <div>
            <ul id="navContent" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><Link activeClass="active" smooth spy to="courses">Classes</Link></li>
                <li><Link activeClass="active" smooth spy to="appointment">Book Appointment</Link></li>
                <li><Link activeClass="active" smooth spy to="faq">FAQ</Link></li>
                <li><Link activeClass="active" smooth spy to="about">ABOUT</Link></li>
            </ul>
        </div>

        <div id="mobile" onClick={this.handleclick}>
            <i id="bar">{this.state.clicked ? <ImCross/> : <ImParagraphRight/> }</i>
          
        </div>
    </nav>
  </>
)
}}
export default Navbar