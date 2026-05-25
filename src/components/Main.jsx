import { useState } from "react";
import "./Main.css";

function Main(){
    const {input, setInput} = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return(
        <main>
            <div className="search-box">
            <input 
                type="text" 
                placeholder="Search movies..." 
                value={input}
                onChange={handleInputChange}
            />
            <button>Search</button>
            </div>
        </main>
    )
}

export default Main;