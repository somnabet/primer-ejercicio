import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Welcome from "./pages/Welcome";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";
import Task from "./pages/Task";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/tasks/:id" element={<Task />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
