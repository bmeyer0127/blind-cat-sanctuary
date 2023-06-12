import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Donate">Donate</Link>
          </li>
          <li>
            <Link to="/HelpUs">Help Us</Link>
          </li>
          <li>
            <Link to="/TheCats">The Cats</Link>
          </li>
          <li>
            <Link to="/PhotosAndMore">Photos and More</Link>
          </li>
          <li>
            <Link to="/Wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/Volunteer">Volunteer</Link>
          </li>
          <li>
            <Link to="/Memorials">Memorials</Link>
          </li>
          <li>
            <Link to="/WatchLive">Watch Live</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
