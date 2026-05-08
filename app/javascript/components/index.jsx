import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
    const root = document.getElementById('root')
    if (root) {
        const reactRoot = createRoot(root)
        reactRoot.render(
            <StrictMode>
                <App />
            </StrictMode>
        )
    }
});
