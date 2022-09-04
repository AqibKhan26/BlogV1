import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/219972/pexels-photo-219972.jpeg?cs=srgb&dl=pexels-pixabay-219972.jpg&fm=jpg" alt="" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeFormIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" className="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus= {true}/>
            </div>
            <div className="writeFormGroup">
                <textarea type="text" placeholder="tell your story ..." className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
