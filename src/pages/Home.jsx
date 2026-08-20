import React from "react";
import { socialLinks } from "../data/social";

export default function Home() {
  return (
    <div data-aos="fade-right" data-aos-duration="1200">
      <div className="msoleh_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{ backgroundImage: 'url("/assets/img/slider/1.jpg")' }}
            />
          </div>

          <div className="details">
            <h3 className="name">Muhamad Soleh</h3>
            <p className="job">
              Guru Fisika yang berdedikasi dalam menciptakan pembelajaran interaktif serta mengembangkan teknologi pendidikan untuk sekolah.
            </p>

            <ul className="social">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <img
                      className="svg"
                      src={`/assets/img/svg/social/${s.name}.svg`}
                      alt="social"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}