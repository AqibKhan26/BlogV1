import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topLeftSocialIcon fa-brands fa-square-facebook"></i>
                <i className="topLeftSocialIcon fa-brands fa-square-twitter"></i>
                <i className="topLeftSocialIcon fa-brands fa-google-plus-g"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" ><Link className="link" to="/" >HOME</Link></li>
                    <li className="topListItem" >ABOUT</li>
                    <li className="topListItem" >CONTACT</li>
                    <li className="topListItem" ><Link className="link" to="/write" >WRITE</Link></li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link className="link" to="/settings" >
                            <img className="topImg"
                                src="https://w0.peakpx.com/wallpaper/900/71/HD-wallpaper-whatsapp-dp-black-colourful-cool-fb-instagram-mask-monster-neon.jpg"
                                alt="" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
