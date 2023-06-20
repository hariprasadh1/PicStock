import { useState } from "react";
import ImageList from "./Components/ImageList"
import SearchBar from "./Components/SearchBar"
import "bulma/css/bulma.css"
import searchImages from "./Api";


function App(){
    const [imageUrl, setImageUrl] = useState([]);

    const handleSubmit = async (term) =>{
        const result = await searchImages(term)

        setImageUrl(result)
    }



    return(
        <div>
            <section className="hero is-info">
                <div className="hero-body">
                    <p className="title">Pic$tock</p>
                    <p className="subtitle">search for any picture</p>
                </div>
            </section>
            <SearchBar onSubmit={handleSubmit}/> 
            <ImageList images={imageUrl}/>
        </div>
    )
}

export default App