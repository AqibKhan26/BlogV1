import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topLeftSocialIcon fa-brands fa-square-facebook"></i>
            <i className="topLeftSocialIcon fa-brands fa-square-twitter"></i>
            <i className="topLeftSocialIcon fa-brands fa-google-plus-g"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem" >HOME</li>
                <li className="topListItem" >ABOUT</li>
                <li className="topListItem" >CONTACT</li>
                <li className="topListItem" >WRITE</li>
                <li className="topListItem" >LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg"
            src="https://w0.peakpx.com/wallpaper/900/71/HD-wallpaper-whatsapp-dp-black-colourful-cool-fb-instagram-mask-monster-neon.jpg" 
            alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
