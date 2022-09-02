import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://www.deutsche-flagge.de/en/redaktion-englisch/pictures/bilder/bilder-rubrik-umweltschutz/energieeffizienz-helgoland.jpg/@@images/135dec34-8369-40c8-bc20-298102a32ae6.jpeg" alt="" className="sidebarImg" />
            <p className="sidebarPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos perferendis recusandae officiis facere voluptate quas corrupti esse inventore commodi ipsum quaerat earum error, accusamus, sed similique laboriosam aperiam libero. Quisquam!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Sea</li>
                <li className="sidebarListItem">Oceans</li>
                <li className="sidebarListItem">Lakes</li>
                <li className="sidebarListItem">Rivers</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarSocialIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarSocialIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarSocialIcon fa-brands fa-google-plus-g"></i>
            </div>
        </div>
    </div>
  )
}
