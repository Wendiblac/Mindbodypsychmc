import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/react-fixes.css";

export function renderPage(page: ReactNode) {
  let rootElement = document.getElementById("root");

  if (!rootElement) {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById("root");
  }

  if (!rootElement) {
    throw new Error("Missing #root mount element.");
  }

  createRoot(rootElement).render(<StrictMode>{page}</StrictMode>);
}
