"use client"
import CountButt from "./CountButt";

export default function Page() {
    return (
        <div>
            <CountButt name={"+1"} mult={1} />
            <CountButt name={"+2"} mult={2} />
            <hr />
            <a href="https://github.com/SSparky20/nextjs">This is GitHub</a>
            <hr />
            <p>search bar</p>
        </div>
    );
}
