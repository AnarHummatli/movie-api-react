import { useState } from "react";
import Movies from "./Movies";
import "./Main.css";

function Main() {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const clearSearch = () => {
        setInput("");
    };

    return (
        <main>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button onClick={clearSearch}>Search</button>
            </div>

            <Movies />
        </main>
    )
}

export default Main;