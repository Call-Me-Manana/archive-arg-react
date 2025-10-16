import React from "react";
import "./GlitchText.css";

export default function GlitchText({ text = "", phrases = [] }) {
    const items = phrases.length ? phrases : [text];

    return (
        <div className="glitch-wrapper">
            {items.map((phrase, idx) => (
                <div key={idx} className="glitch-text">
                    <span className="glitch-layer glitch-main">{phrase}</span>
                    <span className="glitch-layer glitch-red">{phrase}</span>
                    <span className="glitch-layer glitch-cyan">{phrase}</span>
                </div>
            ))}
        </div>
    );
}
