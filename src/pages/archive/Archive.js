import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Archive.css";

export default function Archive() {
    const [visibleLines, setVisibleLines] = useState([]);
    const lines = [
        "> accessing backup storage...",
        "> decrypting fragments...",
        "[OK] fragment_001 restored",
        "[OK] fragment_002 restored",
        "[WARN] fragment_003 corrupted",
        "[FAIL] fragment_004 missing",
        "> open file: diary_003.txt",
        "> open file: memory_dump_07.bin",
        "> done.",
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < lines.length) {
                setVisibleLines((prev) => [...prev, lines[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="archive-page">
            <div className="archive-terminal">
                <h1>ARCHIVE SYSTEM v0.92</h1>
                <div className="terminal-content">
                    {visibleLines.map((line, index) => {
                        if (!line) return null;

                        let className = "";
                        if (line.includes("[OK]")) {
                            className = "ok";
                        } else if (line.includes("[WARN]")) {
                            className = "warn glitch-text";
                        } else if (line.includes("[FAIL]")) {
                            className = "fail glitch-text intense";
                        }

                        return (
                            <p key={index} className={className}>
                                {line === "> open file: diary_003.txt" ? (
                                    <>
                                        {"> open file: "}
                                        <Link to="/diary" className="file-link">
                                            diary_003.txt
                                        </Link>
                                    </>
                                ) : (
                                    line
                                )}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
