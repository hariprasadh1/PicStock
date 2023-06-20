import './ImageShow.css'

function ImageShow({url}){
    return(
        <div>
            <img className="searchResult" src={url} alt="Result of search"></img>
        </div>
    )
}


export default ImageShow