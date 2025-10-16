export default function PageLayout({ title, children }) {
    return (
        <div
            style={{
                background: "#111",
                color: "#eee",
                fontFamily: "Courier New, monospace",
                minHeight: "100vh",
                padding: "40px",
            }}
        >
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    );
}
