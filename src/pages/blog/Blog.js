import React from "react";
import { useState, useEffect } from "react";
import CodeInput from "../../components/CodeInput";
import "./Blog.css";

export default function Blog() {
    const posts = [
        "Эй, это я, Алексей. Сегодня был полный хаос. Школа, потом тусовка с ребятам",

        "Короче, решил вести этот блог. Просто писать что придёт в голову иногда бред, иногда крутые мысли.",
        "Смотрел кучу фильмов: скала, без лица, воздушная тюрьма и глаза змеи. Каждый по‑своему кайф",
        "Пока всё, что успел заметить, хочется, чтобы потом можно было вспомнить.",
        "Кстати, вчера начал читать комиксы про супергероев. Настолько увлекательно, что забыл про домашку",
        "Сегодня дождь. Вышел на улицу — всё мокрое, но классно гулять под шум капель ",
        "Вообще не знаю, зачем пишу это всё. Может, чтобы не забыть. А может, кто-то ещё это читает…",
    ];
    const [visiblePosts, setVisiblePosts] = useState([]);
    useEffect(() => {
        let index = 0;
        const startDate = new Date(2001, 9, 16); // 16 октября 2001
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
                    🌟 Welcome to Alex’s Totally Awesome Page! 🌟
                </marquee>

                <div className="geo-sidebar">
                    <a href="#">🏠 Home</a>
                    <a href="#">📔 Diary</a>
                    <a href="#">💬 Guestbook</a>
                    <a href="#">📡 Secrets</a>
                </div>

                <div className="geo-content">
                    {visiblePosts.map((post, idx) => (
                        <div key={idx} className="geo-post">
                            <h2>🕒 {post.date}</h2>
                            <p>{post.text}</p>
                        </div>
                    ))}
                </div>

                <CodeInput correctCode="CAGE" nextPath="/forum" />
                <div className="geo-footer">
                    <img
                        src="https://www.cameronsworld.net/img/content/97/3.gif"
                        alt="under construction"
                    />
                    <p>Best viewed in Netscape Navigator 4.0 💻</p>
                    <p>
                        Visitors:{" "}
                        <img
                            src="https://www.cameronsworld.net/img/content/155/1.gif"
                            alt="counter"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}
