import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const rootRender = createRoot(rootElement);

rootRender.render(<App />);
