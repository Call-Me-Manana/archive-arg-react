import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CodeInput({ correctCode, nextPath }) {
    const [input, setInput] = useState("");
    const [feedback, setFeedback] = useState("");
    const navigate = useNavigate();

    const checkCode = () => {
        if (input.toUpperCase() === correctCode.toUpperCase()) {
            navigate(nextPath);
        } else {
            setFeedback("Неверный код...");
        }
    };
    return (
        <div style={{ marginTop: "20px" }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите код"
            />
            <button onClick={checkCode}>ОК</button>
            <p>{feedback}</p>
        </div>
    );
}
