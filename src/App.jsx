import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import NotFound from "./pages/NotFound";
import UsersInfo from "./pages/UsersInfo";
import PostsItem from "./pages/PostsItem";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersInfo />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsItem />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}

export default App;



