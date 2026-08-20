import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import NewsModal from "../components/news/NewsModal";
import { newsItems } from "../data/news";

export default function News() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <div className="msoleh_tm_news">
        <SectionTitle subtitle="Artikel" title="Artikel Terbaru" />

        <ul>
          {newsItems.map((item, idx) => (
            <li
              key={item.id}
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay={idx * 100}
            >
              <div className="list_inner">
                <div className="image">
                  <img src="/assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{ backgroundImage: `url(/assets/img/news/${item.image})` }}
                  />
                </div>

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#author">{item.author}</a>
                      <span>{item.date}</span>
                    </p>
                  </div>
                  <h3 className="title">{item.title}</h3>
                  <div className="msoleh_tm_read_more">
                    <a onClick={() => setSelected(item)} role="button" tabIndex={0}>
                      <span>Lebih Lengkap</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <NewsModal
        item={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}