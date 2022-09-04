import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/219972/pexels-photo-219972.jpeg?cs=srgb&dl=pexels-pixabay-219972.jpg&fm=jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">River</span>
                <span className="postCat">Sea</span>
            </div>
            <span className="postTitle"> Life at Sea </span>
            <hr />
            <span className="postDate"> 1 hour ago </span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis porro nobis nihil, at iusto ratione dolorem neque a tempora deleniti nemo praesentium quasi id inventore quos suscipit quia explicabo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis porro nobis nihil, at iusto ratione dolorem neque a tempora deleniti nemo praesentium quasi id inventore quos suscipit quia explicabo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis porro nobis nihil, at iusto ratione dolorem neque a tempora deleniti nemo praesentium quasi id inventore quos suscipit quia explicabo?
        </p>
    </div>
  )
}
