import Link from "./Link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navigationData = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="mt-4 flex justify-between mx-10 ">
      <span className="flex " onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul className={`md:hidden absolute duration-1000 text-black
            ${open? 'top-8':'-top-40'}
            bg-green-500`}>{links}</ul>

        <h2 className="ml-4">My App</h2>
      </span>

      <ul className="md:flex hidden">{links}</ul>
      <button>Sing in</button>

      {/* <ul className="flex">
                {
                    navigationData.map(route=><li  className="mr-10">
                        <a href={route.url}>{route.name}</a></li>)
                }

            </ul> */}
      {/* <ul className="flex">
                <li  className="mr-10"><a href="/">Home</a></li>
                <li  className="mr-10"><a href="/">About</a></li>
                <li  className="mr-10"><a href="/">Contact</a></li>
                <li  className="mr-10"><a href="/">Help</a></li>
            </ul> */}
    </nav>
  );
};

export default NavBar;
