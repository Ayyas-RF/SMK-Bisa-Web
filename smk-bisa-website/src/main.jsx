import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SMKBisaWebsite from "./SMKBisaWebsite.jsx";

// Mark document as JS-enabled early to ensure CSS reveal works
document.documentElement.classList.add("js-enabled");

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SMKBisaWebsite />
	</StrictMode>
);
