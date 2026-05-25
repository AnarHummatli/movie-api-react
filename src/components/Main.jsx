import { useState } from "react";
import Movies from "./Movies";
import "./Main.css";

function Main() {
    const [input, setInput] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearch = () => {
        setSearchText(input);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <main>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <Movies searchText={searchText} />
        </main>
    )
}

export default Main;