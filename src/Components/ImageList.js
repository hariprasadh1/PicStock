import ImageShow from "./ImageShow"


function ImageList({images}){     


    return(
        <div className="container">
            <div className="columns is-multiline">
                {
                    images.map((url, index)=>(
                        <div key={index} className="column is-one-third">
                            <ImageShow url={url.urls.small} />
                        </div>
                    ))            
                }
            </div>        
                         
           
        </div>
    )
}


export default ImageList