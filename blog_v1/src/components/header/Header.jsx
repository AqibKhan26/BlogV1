import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm"> MERN Stack </span>
            <span className="headerTitleLg"> Blog </span>
        </div>
        <img className="headerImg" src="https://wallpaperaccess.com/full/51363.jpg" alt="" />
    </div>
  )
}
