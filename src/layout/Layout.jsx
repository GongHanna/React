import GlobalNav from "./GlobalNav";
// import Home from "../components/Home";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <GlobalNav />
    </div>
  );
};

export default Layout;