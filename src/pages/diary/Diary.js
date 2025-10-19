import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Diary.css";

export default function Diary() {
    const [logs, setLogs] = useState([
        "📓 Личный дневник (запись 001)",
        "Введите команду ('help' для списка команд):",
    ]);
    const [input, setInput] = useState("");
    const [progress, setProgress] = useState(0); // шаг последовательности
    const [secretRevealed, setSecretRevealed] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const [glitch, setGlitch] = useState(false);
    // Правильная последовательность команд
    const correctSequence = [
        "scan",
        "analyze",
        "scan",
        "decode",
        "decode",
        "extract",
        "confirm",
    ];

    const handleCommand = () => {
        const cmd = input.toLowerCase().trim();
        let newLog = [...logs, `> ${cmd}`];

        if (cmd === "help") {
            newLog.push(
                "Доступные команды: scan, analyze, decode, extract, confirm"
            );
        } else if (cmd === correctSequence[progress]) {
            newLog.push(`Команда '${cmd}' выполнена успешно.`);
            const nextProgress = progress + 1;
            setProgress(nextProgress);

            // если последовательность завершена
            if (nextProgress === correctSequence.length) {
                newLog.push("Все шаги выполнены! Вы восстановили секрет.");
                newLog.push("Система экспортирует фрагмент дневника...");
                setSecretRevealed(true);
                downloadDiaryFragment();
            }
        } else {
            newLog.push("⚠️ Ошибка: неверная команда или порядок выполнения!");
            newLog.push("⚡ Прогресс сброшен, попробуйте снова.");
            setProgress(0); // сброс прогресса
            triggerGlitch();
        }

        setLogs(newLog);
        setInput("");
    };

    // Автоматическая прокрутка вниз при обновлении логов
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [logs]);

    const handleNextLevel = () => {
        navigate("/diary-final");
    };

    const triggerGlitch = () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 600);
    };

    const downloadDiaryFragment = () => {
        const text = `
📓 Дневник исследователя (фрагмент 001)
----------------------------------------
...12 октября. 
Я наконец расшифровал последовательность. Она оказалась не просто кодом, а ключом к другой записи.
Но сигнал нестабилен — возможно, часть данных утрачена.

Следующий след скрыт в разделе ARCHIVE.
----------------------------------------
(конец фрагмента)
        `.trim();

        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "diary_fragment_001.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="diary-container">
            <div
                className={`diary-terminal ${glitch ? "glitch" : ""}`}
                ref={containerRef}
            >
                {logs.map((line, i) => (
                    <p
                        key={i}
                        className={
                            line.includes("✅")
                                ? "success"
                                : line.includes("⚠️")
                                ? "error"
                                : ""
                        }
                    >
                        {line}
                    </p>
                ))}

                {!secretRevealed && (
                    <div className="terminal-input">
                        <span>&gt;</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && handleCommand()
                            }
                            placeholder="Введите команду"
                            autoFocus
                        />
                    </div>
                )}

                {secretRevealed && (
                    <p className="success">
                        Теперь вы можете перейти на следующий уровень!
                    </p>
                )}
                {secretRevealed && (
                    <div className="next-level">
                        <p className="success">
                            🗝 Система подтверждает доступ.
                        </p>
                        <button className="next-btn" onClick={handleNextLevel}>
                            Перейти на следующий уровень
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
