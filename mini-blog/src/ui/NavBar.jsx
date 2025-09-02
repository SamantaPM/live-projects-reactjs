import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/posts" end>
        Posts
      </NavLink>
    </nav>
  )
}

export default NavBar