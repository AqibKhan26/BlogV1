import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/219972/pexels-photo-219972.jpeg?cs=srgb&dl=pexels-pixabay-219972.jpg&fm=jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                <span className="singlePostMainTitle">Life at Sea</span>
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b className="singlePostAuthorName">Aqib Khan</b></span>
                <span className="singlePostDate"> 1 hour ago </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestias facere nemo repellat enim quo deleniti iure voluptate molestiae quia beatae, cupiditate eveniet corrupti cumque, mollitia non vero aut eligendi?
                
            </p>
        </div>
    </div>
  )
}
