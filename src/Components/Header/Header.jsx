import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import { UserIcon } from "@heroicons/react/24/solid";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import contact from "../../assets/contact-book.png";

import { useSelector } from "react-redux";

const Header = () => {
  const [Userloggedin, SetUserLoggedin] = useState(false);
  const [checked, setChecked] = useState(false);
  const [modetitle, setmodetitle] = useState("Light");

  const handleChange = (event) => {
    const ischecked = event.target.checked;
    setChecked(ischecked);
    setmodetitle(ischecked ? "Dark" : "Light");
  };

  const cartitems = useSelector((state) => state.items); // this holds the array

  return (
    <header
      className="
      sticky top-0 z-50 bg-white shadow-xl
      flex flex-wrap items-center justify-between gap-4
      px-4 py-2
    "
    >
      {/* <NavLink to="/">
        {" "}
        <div className="flex items-center justify-start">
          <img src={logo} alt="" />
          <p className="text-5xl self-end font-mono text-gray-800">
            {" "}
            ShoopyGlobe
          </p>
        </div>
      </NavLink>

      <div className="relative w-72">
        <input
          type="text"
          placeholder="Search Products here ...."
          className="w-full border-none outline-none p-2 pr-10 bg-blue-100 rounded-2xl"
        />
        <ManageSearchIcon
          fontSize="inherit"
          className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-500"
          style={{ width: "30px", height: "30px" }}
        />
      </div>

      <NavLink to="cart">
        <Badge badgeContent={cartitems.length} color="primary">
          <ShoppingCartTwoToneIcon />
        </Badge>
      </NavLink>

      <NavLink
        to="contact"
        className={
          ({ isActive }) =>
            isActive ? `block py-2 pr-4 pl-3 durtation-200 border-b` : "" // ← active style
        }
      >
        <img src={contact} alt="Contact" className="w-6" />
      </NavLink>

      <div>
        <label className="font-bold">{modetitle}</label>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>

      <div className="flex items-center gap-6">
        <UserIcon className="w-7 h-7 text-gray-600" />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: 35 }}
          className="bg-amber-950"
        />

        <Button
          variant="outlined"
          color="inherit"
          className="text-blue-950 hover:text-blue-800 font-medium"
        >
          Login
        </Button>
      </div> */}

      <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <p className="font-mono text-2xl md:text-4xl text-gray-800">
          ShoopyGlobe
        </p>
      </NavLink>

      {/* search box */}
      <div className="relative w-full sm:w-60 md:w-72 flex-shrink">
        <input
          type="text"
          placeholder="Search products..."
          className="
            w-full rounded-2xl bg-blue-100 p-2 pr-10
            outline-none placeholder:text-sm
          "
        />
        <ManageSearchIcon
          fontSize="inherit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          style={{ width: 24, height: 24 }}
        />
      </div>

      {/* cart */}
      <NavLink to="cart" className="flex-shrink-0">
        <Badge badgeContent={cartitems.length} color="primary">
          <ShoppingCartTwoToneIcon fontSize="medium" />
        </Badge>
      </NavLink>

      {/* contact (hidden on very small screens) */}
      <NavLink
        to="contact"
        className="hidden xs:block flex-shrink-0"
        style={{ lineHeight: 0 }}
      >
        <img src={contact} alt="Contact" className="w-6" />
      </NavLink>

      {/* dark‑mode toggle */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <label className="font-bold whitespace-nowrap">{modetitle}</label>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "theme toggle" }}
          size="small"
        />
      </div>

      {/* user / login */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <UserIcon className="h-6 w-6 text-gray-600" />

        <Divider orientation="vertical" flexItem sx={{ height: 28 }} />

        {!Userloggedin ? (
          <Link to="login">
            <Button
              variant="outlined"
              color="inherit"
              className="text-blue-950 hover:text-blue-800 font-medium"
            >
              Login
            </Button>
          </Link>
        ) : (
          <Link to="logout">
            <Button
              variant="outlined"
              color="inherit"
              className="text-blue-950 hover:text-blue-800 font-medium"
            >
              Logout
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
