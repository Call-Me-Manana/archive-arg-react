import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import GlitchText from "../components/glitchText/GlitchText";

export default function Home() {
    return (
        <PageLayout title="Архив исчезнувших сайтов">
            <p>
                Добро пожаловать в <strong>архив</strong> — здесь собраны
                утерянные страницы раннего интернета.
            </p>
            <p>
                Некоторые сайты сохранились частично, другие... ведут себя
                странно.
            </p>
            <GlitchText
                text="По легенде, один из сайтов принадлежал пользователю по имени Алекс..."
                phrases={[
                    "Ты уверен, что хочешь продолжить?",
                    "Иногда страницы говорят сами за себя.",
                    "Кто-то до сих пор оставляет сообщения.",
                ]}
            />
            <p style={{ marginTop: "30px" }}>
                Один из сайтов был найден недавно:
            </p>
            <Link
                to="/blog"
                style={{
                    color: "#0ff",
                    textDecoration: "underline",
                    fontFamily: "Courier New, monospace",
                }}
            >
                mychildhooddiary.neocities.org
            </Link>

            <p style={{ marginTop: "40px", color: "#666" }}>
                (Архив перезапускается каждые 24 часа. Некоторые записи могут
                изменяться.)
            </p>
        </PageLayout>
    );
}
