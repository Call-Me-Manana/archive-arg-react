import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    const sounds = {
        open: new Audio(
            "https://www.soundjay.com/communication/sounds/modem-calling-tone-01.mp3"
        ),
    };
    useEffect(() => {
        // звук при открытии страницы
        sounds.open.volume = 0.3;
        const t = setTimeout(() => sounds.open.play().catch(() => {}), 600);
        return () => clearTimeout(t);
    }, []);
    return (
        <div className="home-container">
            <h1 className="home-title">Архив исчезнувших сайтов</h1>

            <p>
                Добро пожаловать в <strong>архив</strong> — место, где хранятся
                утерянные страницы раннего интернета. Здесь можно найти сайты,
                которые люди создавали в начале 2000-х, со всеми их странностями
                и уникальными особенностями.
            </p>

            <p>
                Некоторые страницы сохранились частично, другие ведут себя
                неожиданно. Каждая страница — маленький кусочек цифровой
                истории.
            </p>

            <p>Вот несколько интересных находок:</p>

            <ul>
                <li>
                    <Link to="/blog">mychildhooddiary.neocities.org</Link> —
                    дневник подростка, полный заметок о школе, фильмах и
                    маленьких секретах.
                </li>
                <li>
                    <a
                        href="https://neocities.org/site/8bitcorner"
                        target="_blank"
                        rel="noreferrer"
                    >
                        8bitcorner.neocities.org
                    </a>{" "}
                    — ретро-графика, мини-игры и забавные анимации.
                </li>
                <li>
                    <a
                        href="https://www.cameronsworld.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Cameron's World
                    </a>{" "}
                    — архив заброшенных GeoCities страниц, с GIF, фоном и
                    типичными нулевыми эффектами.
                </li>
                <li>
                    <a
                        href="https://archive.org/web/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Wayback Machine
                    </a>{" "}
                    — сохранившиеся старые версии сайтов, утерянные медиа и
                    архивные записи.
                </li>
                <li>
                    <a
                        href="https://textfiles.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Textfiles.com
                    </a>{" "}
                    — коллекция текстовых файлов из BBS, заметок и руководств
                    конца 90-х.
                </li>
                <li>
                    <Link to="/forum">secret-forum.neocities.org</Link> — старые
                    обсуждения и загадки, которые до сих пор интригуют
                    посетителей.
                </li>
            </ul>

            <p>
                Каждый день архив пополняется новыми находками. Иногда
                встречаются удивительные детали: старые GIF-баннеры, ASCII-арт,
                скрытые сообщения. Возвращайтесь сюда — кто знает, что вы
                обнаружите завтра?
            </p>

            <p className="home-footer">
                (Архив обновляется каждые 24 часа. Некоторые записи могут
                изменяться.)
            </p>
        </div>
    );
}
