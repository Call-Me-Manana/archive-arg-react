import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Forum.css";

export default function Forum() {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [feedback, setFeedback] = useState("");
    const [glitchedMessages, setGlitchedMessages] = useState([]);
    const banner =
        "https://www.cameronsworld.net/img/content/22/left-side/28.gif";
    const checkForumCode = () => {
        if (code === "123") {
            navigate("/message");
        } else {
            setFeedback("Неверный код...");
        }
    };
    const mainPost = {
        author: "Алексей",
        date: "10/05",
        text: "Привет! Кажется, блог снова работает. Кто-то оставил странные комментарии, которые я не писал",
    };
    const replies = [
        {
            author: "Друг",
            date: "11/05",
            text: "Привет, Алексей! Крутой список фильмов. Особенно Без лица запомнился. Тоже люблю обсуждать такие вещи здесь.",
        },
        {
            author: "Алексей",
            date: "12/05",
            text: "Да, Без лица реально впечатлил. А ещё вчера попробовал написать небольшой код для блога, получилось немного криво, но идея есть.",
        },
        {
            author: "Друг",
            date: "13/05",
            text: "Хаха, у меня с кодом тоже так. Главное — пробовать. Кстати, видел твой старый пост? Там была странная фраза: 'Кто-то здесь был'. Что это значит?",
        },
        {
            author: "Алексей",
            date: "14/05",
            text: "Не знаю… кажется, кто-то действительно заходил на блог без моего ведома. Немного жутко.",
        },
        {
            author: "Друг",
            date: "15/05",
            text: "Вот это да… Может это кто-то из школы? Или просто баг? Во всяком случае, продолжай писать!",
        },
        {
            author: "Алексей",
            date: "16/05",
            text: "Спасибо! Сегодня попробовал добавить новую заметку о фильмах и играх. Хочу собрать все впечатления в одном месте.",
        },
        {
            author: "Друг",
            date: "17/05",
            text: "Отличная идея! Мне интересно будет почитать твои заметки.",
        },
        {
            author: "Алексей",
            date: "18/05",
            text: "Сегодня ещё добавил список любимых игр. Надеюсь, кто-то предложит свои варианты для обсуждения.",
        },
        {
            author: "Друг",
            date: "20/05",
            text: "Ух ты… Твой блог становится настоящим архивом впечатлений. Продолжай в том же духе!",
        },
        {
            author: "Алексей",
            date: "21/05",
            text: "Да, согласен. Сегодня попробую добавить картинку в главный пост и посмотреть, как это будет смотреться.",
        },
    ];

    const glitchMessages = [
        "Сообщение повреждено",
        "Данные не совпадают",
        "Ответ получен слишком поздно",
        "Соединение прервано",
        "Время не синхронизировано",
        "Неверная сигнатура пакета",
        "Текст не подлежит восстановлению",
        "Здесь кто-то был",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * replies.length);
            setGlitchedMessages((prev) =>
                prev.includes(randomIndex)
                    ? prev.filter((i) => i !== randomIndex)
                    : [...prev, randomIndex]
            );
        }, 4000 + Math.random() * 4000);
        return () => clearInterval(interval);
    }, [replies.length]);

    const getGlitchText = (idx, original) => {
        if (!glitchedMessages.includes(idx)) return original;
        const random =
            glitchMessages[Math.floor(Math.random() * glitchMessages.length)];
        return random;
    };

    return (
        <div className="forum-container">
            {/* Шапка */}
            <header className="forum-header">
                <h1 className="forum-title">Тред-рум</h1>
                <nav className="forum-nav">
                    <a href="/">Главная</a> | <a href="/threads">Треды</a> |{" "}
                    <a href="/about">О форуме</a>
                </nav>
            </header>
            {/* Баннер */}
            <div className="forum-banner">
                <img
                    src={banner}
                    alt="banner"
                    style={{ width: 300, verticalAlign: "middle" }}
                />
            </div>
            {/* Секция с постами */}
            <div className="forum-posts">
                {/* Главный пост */}
                <div className="forum-post main-post">
                    <div className="post-header">
                        <span className="post-number">#OP</span>
                        <span className="author">{mainPost.author}</span>
                        <span className="date">{mainPost.date}</span>
                    </div>
                    <div className="post-content">
                        {/* Картинка слева */}
                        <div className="post-image">
                            <img
                                src="https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg"
                                alt="Главная картинка"
                            />
                        </div>

                        {/* Текст справа */}
                        <div className="post-body">{mainPost.text}</div>
                    </div>
                </div>

                {/* Ответы */}
                {replies.map((msg, idx) => (
                    <div key={idx} className="forum-post reply-post">
                        <div className="post-header">
                            <span className="post-number">#{idx + 1}</span>
                            <span className="author">{msg.author}</span>
                            <span className="date">{msg.date}</span>
                        </div>
                        <div
                            className={`post-body ${
                                glitchedMessages.includes(idx) ? "glitch" : ""
                            }`}
                        >
                            {getGlitchText(idx, msg.text)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Кодовая секция */}
            <div className="forum-code-section">
                <p>Введите код:</p>
                <input
                    className="code-input"
                    type="text"
                    placeholder="Введите код"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button className="code-btn" onClick={checkForumCode}>
                    ОК
                </button>
                {feedback && <p className="forum-feedback">{feedback}</p>}
            </div>
        </div>
    );
}
