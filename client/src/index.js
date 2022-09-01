import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const rootRender = createRoot(rootElement);

rootRender.render(<App />);
