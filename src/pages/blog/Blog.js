import React, { useState, useEffect } from "react";
import CodeInput from "../../components/CodeInput";
import "./Blog.css";

// ссылки на PNG иконки
const icons = {
    star: "https://www.cameronsworld.net/img/content/26/left-side/16.gif",
    home: "https://www.cameronsworld.net/img/content/15/row-2/13.png",
    diary: "https://www.cameronsworld.net/img/content/26/shelf/2.gif",
    guestbook: "https://www.cameronsworld.net/img/content/21/19.gif",
    secrets: "https://www.cameronsworld.net/img/content/16/8.gif",
    clock: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Clock_icon.svg/32px-Clock_icon.svg.png",
    computer: "https://www.cameronsworld.net/img/content/15/row-2/7.gif",
};

export default function Blog() {
    const posts = [
        `всем привет (ну, если кто-то вообще читает) решил сделать себе сайт — просто чтобы где-то хранить заметки.
        буду выкладывать сюда свои эксперименты, коды, может музыку.
        ещё я подключил “архиватор” — штуку, которая сохраняет всё, что я пишу, даже если я это удалю.
        интересно, сможет ли кто-то потом это расшифровать?..`,

        "Смотрел недавно пару фильмов: скала, без лица, воздушная тюрьма и глаза змеи. Каждый по‑своему кайф",

        "Пока всё, что успел заметить, хочется, чтобы потом можно было вспомнить.",
        "Кстати, вчера начал читать комиксы про супергероев. Настолько увлекательно, что забыл про домашку",
        "Вообще не знаю, зачем пишу это всё. Может, чтобы не забыть. А может, кто-то ещё это читает…",
    ];

    const [visiblePosts, setVisiblePosts] = useState([]);

    useEffect(() => {
        let index = 0;
        const startDate = new Date(2001, 9, 16);
        const interval = setInterval(() => {
            if (index < posts.length - 1) {
                const postDate = new Date(startDate);
                postDate.setDate(startDate.getDate() + index);
                const dateStr = postDate.toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                });

                setVisiblePosts((prev) => [
                    ...prev,
                    { text: posts[index], date: dateStr },
                ]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="geo-bg">
            <div className="geo-container">
                <marquee behavior="alternate" className="geo-title">
                    <img
                        src={icons.star}
                        alt="star"
                        style={{ width: 54, verticalAlign: "middle" }}
                    />
                    &nbsp; Welcome to Alex’s Totally Awesome Page! &nbsp;
                    <img
                        src={icons.star}
                        alt="star"
                        style={{ width: 54, verticalAlign: "middle" }}
                    />
                </marquee>

                <div className="geo-sidebar">
                    <a href="#">
                        <img
                            src={icons.home}
                            alt="home"
                            style={{ width: 30, verticalAlign: "middle" }}
                        />{" "}
                        Home
                    </a>
                    <a href="#">
                        <img
                            src={icons.diary}
                            alt="diary"
                            style={{ width: 30, verticalAlign: "middle" }}
                        />{" "}
                        Diary
                    </a>
                    <a href="#">
                        <img
                            src={icons.guestbook}
                            alt="guestbook"
                            style={{ width: 30, verticalAlign: "middle" }}
                        />{" "}
                        Guestbook
                    </a>
                    <a href="#">
                        <img
                            src={icons.secrets}
                            alt="secrets"
                            style={{ width: 30, verticalAlign: "middle" }}
                        />{" "}
                        Secrets
                    </a>
                </div>

                <div className="geo-content">
                    {visiblePosts.map((post, idx) => (
                        <div key={idx} className="geo-post">
                            <h2>{post.date}</h2>
                            <p>{post.text}</p>
                        </div>
                    ))}
                </div>

                <CodeInput correctCode="CAGE" nextPath="/forum" />

                <div className="geo-footer">
                    <p>
                        Best viewed in Netscape Navigator 4.0{" "}
                        <img
                            src={icons.computer}
                            alt="computer"
                            style={{ width: 24, verticalAlign: "middle" }}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}
