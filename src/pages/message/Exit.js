import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Exit() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/"); // возвращаем на главную страницу
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="action-window">
            <h2>Приложение пытается закрыться…</h2>
            <p>Подождите несколько секунд...</p>
        </div>
    );
}
