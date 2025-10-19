import React, { useState, useEffect } from "react";
import "./Diary.css";

export default function Diary() {
    const [showHidden, setShowHidden] = useState(false);
    const [glitchText, setGlitchText] = useState("");
    const entry = `
  [01.03.2029]  
  Сегодня я снова слышал этот звук.  
  Казалось, будто кто-то пытается подключиться...  
  Я попытался записать логи — но файл испортился.  
  Остались только обрывки.
  `;

    useEffect(() => {
        if (showHidden) {
            const glitch = "••• 7-2-9 ••• CONNECTING...";
            let i = 0;
            const interval = setInterval(() => {
                setGlitchText(glitch.slice(0, i));
                i++;
                if (i > glitch.length) clearInterval(interval);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [showHidden]);

    return (
        <div className="diary-container">
            <h2 className="diary-title">📓 Личный дневник (запись 001)</h2>
            <div className="diary-entry">
                {entry.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>

            <button
                className="decode-btn"
                onClick={() => setShowHidden(!showHidden)}
            >
                {showHidden
                    ? "Скрыть расшифровку"
                    : "Попробовать восстановить запись"}
            </button>

            {showHidden && (
                <div className="glitch-box">
                    <p className="glitch-text">{glitchText}</p>
                    <p className="hidden-msg">
                        (внизу на странице есть координаты... но они не мои)
                    </p>
                </div>
            )}

            <footer className="diary-footer">
                <p>Файл: diary_001.txt</p>
                <p>Состояние: поврежден ⚠️</p>
            </footer>
        </div>
    );
}
