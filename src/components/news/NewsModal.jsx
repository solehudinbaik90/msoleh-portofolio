import React from "react";
import Modal from "react-modal";
import { socialLinks } from "../../data/social";

export default function NewsModal({ item, isOpen, onClose }) {
  if (!item) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="myoverlay"
      className="mymodal"
      contentLabel="My dialog"
    >
      <div className="msoleh_tm_modalbox_news">
        <button className="close-modal" onClick={onClose}>
          <img src="/assets/img/svg/cancel.svg" alt="close icon" />
        </button>

        <div className="box_inner">
          <div className="description_wrap scrollable">
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
            </div>

            <div className="main_content">
              <div className="descriptions">
                <p className="bigger">{item.paragraphs[0]}</p>
                {item.paragraphs.slice(1).map((p, i) => (
                  <p key={`pre-${i}`}>{p}</p>
                ))}

                {item.quote && (
                  <div className="quotebox">
                    <div className="icon">
                      <img className="svg" src="/assets/img/svg/quote.svg" alt="quote" />
                    </div>
                    <p>{item.quote}</p>
                  </div>
                )}

                {item.paragraphsAfter?.map((p, i) => (
                  <p key={`post-${i}`}>{p}</p>
                ))}
              </div>

              <div className="news_share">
                <span>Share:</span>
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
      </div>
    </Modal>
  );
}