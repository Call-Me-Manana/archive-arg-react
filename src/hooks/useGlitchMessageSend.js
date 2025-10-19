import { useState } from "react";

export function useGlitchMessageSend() {
    const [glitch, setGlitch] = useState(false);
    const [warning, setWarning] = useState("");

    const triggerGlitch = (
        initialMsg = "⚠️ Сбой отправки… Система нестабильна!"
    ) => {
        setGlitch(true);
        setWarning(initialMsg);

        setTimeout(() => {
            setWarning("...ты не должен был это видеть...");
        }, 2000);

        setTimeout(() => {
            setGlitch(false);
            setWarning("");
        }, 5000);
    };

    return { glitch, warning, triggerGlitch };
}
