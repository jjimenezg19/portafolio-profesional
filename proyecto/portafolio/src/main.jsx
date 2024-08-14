import "@/assets/styles/index.css"
import "@fontsource-variable/onest"
import "react-toastify/dist/ReactToastify.css"

import React from "react"
import ReactDOM from "react-dom/client"

import App from "@/layout/App.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={createBrowserRouter([
      {
        path: ":section?",
        element: <App />
      }
    ])}
  />
)
