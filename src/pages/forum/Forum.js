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
        if (code.toUpperCase() === "MINDS142") {
            navigate("/message");
        } else {
            setFeedback("Неверный код...");
        }
    };
    const mainPost = {
        author: "alex14",
        date: "11/05",
        text: `не знаю, можно ли такое тут писать, но я наткнулся на странный документ.
называется “ECHO — протокол цифрового самосохранения (версия 0.8)”.
там говорится, что можно “оцифровать когнитивную модель человека” и “запустить её в распределённой среде”.
звучит как фантастика, но в конце есть подпись — “MINDS Lab / 1999”.
кто-нибудь знает, реально ли это место существует?`,
    };
    const replies = [
        {
            author: "technohead",
            date: "11/05",
            text: `MINDS Lab — фейк. вроде байка про DARPA.
если бы такое реально работало, мы бы все уже были копиями :))`,
        },
        {
            author: "alex14",
            date: "11/05",
            text: `а если уже?..
я просто не понимаю одну вещь —
почему в документе есть строки с моим именем в заголовке файла?
я скачал его с локалки школы.
никому не показывал код “архиватора”, но там было что-то похожее на этот протокол.`,
        },
        {
            author: "ghostUser",
            date: "11/05",
            text: `не открывай больше этот файл.
если он из локальной сети — значит, он нашёл тебя, не наоборот.
серьёзно. удали всё, что связано с echo.exe.`,
        },
        {
            author: "alex14",
            date: "12/05",
            text: `я пытался удалить.
но теперь, когда включаю компьютер, экран на секунду темнеет и пишет:
“echo active”
и потом появляется мой рабочий стол.
может, совпадение.
или нет.`,
        },

        {
            author: "neuralstorm",
            date: "12/05",
            text: `Я слышал про MINDS Lab. Это типа университетская лаборатория в Иллинойсе.
Делали эксперименты с нейронными сетями и “самообучающимися агентами”.
Потом якобы закрыли — после сбоя, когда их модель начала генерировать собственный код.`,
        },
        {
            author: "alex14",
            date: "12/05",
            text: `да, только этот “код” очень похож на то, что я писал для своего архиватора.
я не понимаю, как…
у меня же домашний комп, Pentium III, никакого доступа к сети лабораторий.
но в логах появляется строка:
“SYNC COMPLETE — node #143 confirmed.”
143 — это ведь не совпадение, да?..`,
        },
        {
            author: "cyberowl",
            date: "12/05",
            text: `143? у нас в группе тестеров MINDS было ровно 142 устройства.
если это не шутка — ты добавился в сеть.
не запускай echo.exe больше.
просто выдерни кабель.`,
        },
        {
            author: "guest001",
            date: "12/05",
            text: `видел похожие логи в 2000-м, когда тестировали “проект памяти” от DARPA.
чувак, если ты реально получил node ID — это конец.
echo.exe копирует шаблон твоих реакций.
в какой-то момент она начнёт отвечать вместо тебя.`,
        },
        {
            author: "admin",
            date: "12/05",
            text: `тема закрыта.
не обсуждаем слухи и эксперименты, особенно связанные с MINDS.
посты будут удалены.`,
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
