import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Message.css";
import Compose from "./Compose";
import Exit from "./Exit";

export default function Message() {
    const navigate = useNavigate();
    const [isGlitching, setIsGlitching] = useState(false);
    const [warning, setWarning] = useState("");
    const [activeAction, setActiveAction] = useState(null);

    const sounds = {
        open: new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg"), // открытие письма

        error: new Audio(
            "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
        ), // ошибка
        mail: new Audio(
            "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
        ), // уведомление
        delete: new Audio(
            "https://actions.google.com/sounds/v1/cartoon/wind_up_toy.ogg"
        ), // удаление
    };

    useEffect(() => {
        // звук при открытии страницы
        sounds.open.volume = 0.4;
        sounds.open.play().catch(() => {});
        // короткая задержка — будто письмо "открывается"
        const t = setTimeout(() => sounds.mail.play().catch(() => {}), 600);
        return () => clearTimeout(t);
    }, []);

    function handleSuccess() {
        navigate("/archive");
    }

    const handleDelete = () => {
        sounds.delete.play().catch(() => {});
        setIsGlitching(true);
        setWarning(
            "⚠️ Ошибка: письмо не может быть удалено.\n[сообщение защищено отправителем]"
        );

        // смена на “глитч-сообщение” через 2 секунды
        setTimeout(() => {
            setWarning("...ты не должен был это видеть...");
        }, 2000);

        // возврат в норму через 4 секунды
        setTimeout(() => {
            setIsGlitching(false);
            setWarning("");
        }, 4000);
    };

    function handleWrite() {
        setActiveAction("Compose");
    }

    function handleExit() {
        setActiveAction("Exit");
    }

    return (
        <div className={`mail-window ${isGlitching ? "glitch-active" : ""}`}>
            {/* Верхняя панель */}
            <header className="mail-header">
                <div className="logo">📧 MailBox 2001</div>
                <div className="header-buttons">
                    <button onClick={handleWrite}>Ответить</button>
                    {activeAction === null && (
                        <button onClick={handleDelete}>Удалить</button>
                    )}
                    <button onClick={handleExit}>Выход</button>
                </div>
            </header>

            <div className="mail-body">
                {/* Боковое меню */}
                <aside className="mail-sidebar">
                    <ul>
                        <li className="active">Входящие</li>
                        <li>Отправленные</li>
                        <li>Черновики</li>
                        <li>Корзина</li>
                        <li>Избранное ⭐ </li>
                    </ul>
                </aside>

                {/* Содержимое письма */}
                <main className="mail-content">
                    {!activeAction && (
                        <>
                            <div className="mail-title">
                                <h2>Письмо самому себе</h2>
                            </div>
                            <div className="mail-meta">
                                <p>
                                    <strong>От:</strong> Алекс
                                    &lt;alexsecret2001@mail.com&gt;
                                </p>
                                <p>
                                    <strong>Дата:</strong> 20.05.2008
                                </p>
                                <p>
                                    <strong>Тема:</strong> (без темы)
                                </p>
                            </div>

                            <div className="mail-text">
                                <p>
                                    Привет. <br />
                                    Не забудь цифры: <b>3, 7, 1, 5</b>. <br />
                                    Они помогут открыть скрытую страницу. <br />
                                    Иногда стоит смотреть между строк…
                                    <br />
                                </p>
                                <span className="hidden-msg">
                                    Ответь мне с темой "Секрет"
                                </span>
                                {warning && (
                                    <div className="mail-warning">
                                        <p>{warning}</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {activeAction === "Compose" && (
                        <Compose
                            onBack={() => setActiveAction(null)}
                            onSuccess={() => handleSuccess()}
                            originalSender="Алексей"
                        />
                    )}

                    {activeAction === "Exit" && <Exit />}
                </main>
            </div>

            {/* Нижняя панель */}
            <footer className="mail-footer">
                <p>© 2001 MailBox — Все права защищены</p>
            </footer>
        </div>
    );
}
