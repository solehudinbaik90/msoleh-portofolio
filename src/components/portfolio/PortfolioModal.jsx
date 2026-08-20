import React from "react";
import Modal from "react-modal";
import { Gallery, Item } from "react-photoswipe-gallery";
import { socialLinks } from "../../data/social";

export default function PortfolioModal({ item, isOpen, onClose }) {
  if (!item) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="myoverlay"
      className="mymodal"
      contentLabel="Portfolio dialog"
    >
      <div className="msoleh_tm_modalbox_news portfolio_tm_modalbox">
        <button className="close-modal" onClick={onClose}>
          <img src="/assets/img/svg/cancel.svg" alt="close icon" />
        </button>

        <div className="box_inner">
          <div className="description_wrap scrollable">
            <div className="image">
              <img src="/assets/img/thumbs/4-3.jpg" alt="thumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url("/assets/img/portfolio/${item.image}")`,
                }}
              />
            </div>

            <div className="portfolio_main_title">
              <h3>{item.name}</h3>
              <span>{item.tag}</span>
            </div>

            <div className="main_details">
              <div className="textbox">
                {item.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>{item.client}</span>
                  </li>
                  <li>
                    <span className="first">Category</span>
                    <span>{item.category}</span>
                  </li>
                  <li>
                    <span className="first">Date</span>
                    <span>{item.date}</span>
                  </li>
                  <li>
                    <span className="first">Share</span>
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
                  </li>
                </ul>
              </div>
            </div>

            {item.additionalImages?.length > 0 && (
              <div className="additional_images">
                <Gallery>
                  <ul className="gallery_zoom">
                    {item.additionalImages.map((img, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <Item
                            original={`/assets/img/portfolio/${img}`}
                            thumbnail={`/assets/img/portfolio/${img}`}
                            width="500"
                            height="550"
                          >
                            {({ ref, open }) => (
                              <div className="my_image" ref={ref} onClick={open} role="button">
                                <img src="/assets/img/thumbs/4-2.jpg" alt="thumb" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: `url("/assets/img/portfolio/${img}")`,
                                  }}
                                />
                              </div>
                            )}
                          </Item>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Gallery>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
