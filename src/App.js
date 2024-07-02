import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Notice from "./components/Notice";
import User from "./components/User";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resevation" element={<Reservation />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/user" element={<User /> } />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;