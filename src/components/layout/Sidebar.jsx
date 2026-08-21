import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../../data/social";

const menuItems = [
  { to: "/", icon: "home-run.svg", alt: "homerun", label: "Beranda" },
  { to: "/about", icon: "avatar.svg", alt: "avatar", label: "Profil" },
  { to: "/service", icon: "setting.svg", alt: "setting", label: "Layanan" },
  { to: "/portfolio", icon: "briefcase.svg", alt: "briefcase", label: "Proyek" },
  { to: "/news", icon: "paper.svg", alt: "paper", label: "Artikel" },
  { to: "/contact", icon: "mail.svg", alt: "mail", label: " Kontak" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ul className="react-tabs__tab-list" role="tablist">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/dark.png" alt="brand" />
            </Link>
          </div>

          <div className="menu">
            <ul>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <li
                    key={item.to}
                    role="tab"
                    id={`tab:r0:${index}`}
                    aria-selected={isActive}
                    aria-disabled="false"
                    aria-controls={`panel:r0:${index}`}
                    data-rttab="true"
                    tabIndex={isActive ? 0 : -1}
                    className={
                      isActive
                        ? "react-tabs__tab react-tabs__tab--selected"
                        : "react-tabs__tab"
                    }
                    onClick={() => navigate(item.to)}
                  >
                    <img className="svg" src={`/assets/img/svg/${item.icon}`} alt={item.alt} />
                    <span className="menu_content">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="copyright">
            <p>
              © {new Date().getFullYear()} Msoleh <br /> Created by
              <a href="https://msoleh-portofolio.vercel.app/" target="_blank" rel="noreferrer">
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
