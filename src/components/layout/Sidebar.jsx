import React from "react";
import { NavLink } from "react-router-dom";
import { socialLinks } from "../../data/social";

const menuItems = [
  { to: "/", icon: "home-run.svg", label: "Beranda" },
  { to: "/about", icon: "avatar.svg", label: "Profil" },
  { to: "/service", icon: "setting.svg", label: "Layanan" },
  { to: "/portfolio", icon: "briefcase.svg", label: "Proyek" },
  { to: "/news", icon: "paper.svg", label: "Artikel" },
  { to: "/contact", icon: "mail.svg", label: "Kontak" },
];

export default function Sidebar() {
  return (
    <ul className="react-tabs__tab-list" role="tablist">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img src="/assets/img/logo/dark.png" alt="brand" />
            </NavLink>
          </div>

          <div className="menu">
            <ul>
              {menuItems.map((item) => (
                <li key={item.to} role="tab">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      isActive ? "react-tabs__tab react-tabs__tab--selected" : "react-tabs__tab"
                    }
                  >
                    <img
                      className="svg"
                      src={`/assets/img/svg/${item.icon}`}
                      alt={item.label.toLowerCase()}
                    />
                    <span className="menu_content">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="copyright">
            <p>
              © {new Date().getFullYear()} msoleh <br /> Created by
              <a
                href="https://msoleh.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Msoleh
              </a>
            </p>
          </div>
        </div>
      </div>
    </ul>
  );
}

export { socialLinks };