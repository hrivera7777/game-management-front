import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Reports from "./pages/Reports";
import Logout from "./pages/Logout";

const app = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact strict path="/" element={<App />} />
      <Route exact strict path="/games" element={<Home category={"game"} />} />
      <Route
        exact
        strict
        path="/favorites"
        element={<Home category={"favorite"} />}
      />
      <Route exact strict path="/sign-in" element={<SignIn />} />
      <Route exact strict path="/sign-up" element={<SignUp />} />
      <Route exact strict path="/reports" element={<Reports />} />
      <Route exact strict path="/logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>,
  app
);
