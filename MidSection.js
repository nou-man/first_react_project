import React from "react"
import Details from "./Details"

export default function MidSection() {
    return (
        <div className="mid-section">
            <h1 className="MyName">Mohammed Nouman</h1>
            <h2 className="position">Full stack Developer</h2>
            <p className="website">mnouman.website</p>
            <button className="email-button"> Email </button>
            <div className="link-button">LinkedIn</div>
            <Details />
        </div>
    )
}