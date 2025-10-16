import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
// import Forum from "./pages/Forum";
// import Message from "./pages/Message";
// import Glitch1 from "./pages/Glitch1";
// import Archive2 from "./pages/Archive2";
// import Glitch2 from "./pages/Glitch2";
// import DiaryFinal from "./pages/DiaryFinal";
// import HiddenMessage from "./pages/HiddenMessage";
// import Final from "./pages/Final";

function App() {
    return (
        <Router basename="/archive-arg-react">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                {/* <Route path="/forum" element={<Forum />} />
                <Route path="/message" element={<Message />} />
                <Route path="/glitch1" element={<Glitch1 />} />
                <Route path="/archive2" element={<Archive2 />} />
                <Route path="/glitch2" element={<Glitch2 />} />
                <Route path="/diary_final" element={<DiaryFinal />} />
                <Route path="/hidden_message" element={<HiddenMessage />} />
                <Route path="/final" element={<Final />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
