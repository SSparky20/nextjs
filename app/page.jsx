"use client"
import CountB from "./CountB";
import SearchBar from "./SearchBar"

export default function Page() {
    return (
        <div>
            <CountB name={"+1"} mult={1} />
            <CountB name={"+2"} mult={2} />
            <hr />
            <a href="https://github.com/SSparky20/nextjs">This is GitHub</a>
            <hr />
            <SearchBar />
        </div>
        
    );
}
