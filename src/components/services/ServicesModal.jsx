import React from "react";
import Modal from "react-modal";

export default function ServicesModal({ service, isOpen, onClose }) {
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="myoverlay"
      className="mymodal"
      contentLabel="Service dialog"
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
                style={{
                  backgroundImage: `url(/assets/img/portfolio/${service.image})`,
                }}
              />
            </div>

            <div className="details">
              <div className="extra">
                <p className="date">
                  Service <span>#{service.number}</span>
                </p>
              </div>
              <h3 className="title">{service.title}</h3>
            </div>

            <div className="main_content">
              <div className="descriptions">
                <p className="bigger">{service.description[0]}</p>
                {service.description.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {service.features?.length > 0 && (
                <div className="msoleh_tm_skill_list">
                  <ul>
                    {service.features.map((f) => (
                      <li key={f}>
                        <span>
                          <img
                            className="svg"
                            src="/assets/img/svg/rightarrow.svg"
                            alt="arrow"
                          />{" "}
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}