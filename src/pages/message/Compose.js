import { useState } from "react";
import { useGlitchMessageSend } from "../../hooks/useGlitchMessageSend";
import "./Message.css";

export default function Compose({ onBack, onSuccess, originalSender }) {
    const [text, setText] = useState("");
    const [to, setTo] = useState("alexsecret2001@mail.com");
    const [subject, setSubject] = useState("");
    const glitchHints = ["7", "2", "9"];
    const [showWarning, setShowWarning] = useState(false);
    const correctSubject = "Секрет";
    const correctCode = "3715729";
    const { glitch, triggerGlitch } = useGlitchMessageSend();

    const handleSend = () => {
        triggerGlitch("⚠️ Сбой отправки… Система нестабильна!");

        if (subject.trim() === correctSubject) {
            setText("");
            glitchHints.forEach((digit, idx) => {
                setTimeout(() => {
                    // используем колбэк setText для безопасного обновления
                    setText((prev) => prev + digit);
                }, 1500 * (idx + 1));
            });
        } else {
            setShowWarning(true);
        }

        // Скрываем предупреждение через 5 секунд
        setTimeout(() => setShowWarning(false), 5000);
        if (text.trim() === correctCode) {
            onSuccess();
        }
    };
    return (
        <div className={`action-window ${glitch ? "glitch-active" : ""}`}>
            <h2>↺ Ответить {originalSender}</h2>
            <div className="email-field">
                <label>Кому:</label>
                <input
                    type="email"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="alexsecret2001@mail.com"
                />
            </div>

            <div className="email-field">
                <label>Тема:</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Введите тему письма"
                />
            </div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст письма..."
            ></textarea>
            <div className="action-buttons">
                <button onClick={handleSend}>Отправить</button>
                <button onClick={onBack}>Назад к письму</button>
            </div>
            {showWarning && (
                <div className="warning-glitch">
                    ⚠️ Сбой отправки… Система нестабильна!{" "}
                </div>
            )}
        </div>
    );
}
