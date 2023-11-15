import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center">
      <Link to={"/home"} className="d-flex gap-3 align-items-center">
        <img width={60} src="/coin.png" alt="" />
        <h2>
          <span style={{ color: "gold" }}>Crypto</span> Coin
        </h2>
      </Link>
      <div className="d-flex gap-3">
        {localStorage.getItem("user") ? (
          <NavLink onClick={() => localStorage.removeItem("user")}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink to={"/"}> Login </NavLink>
        )}

        <NavLink to={"/home"}>Homepage</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
