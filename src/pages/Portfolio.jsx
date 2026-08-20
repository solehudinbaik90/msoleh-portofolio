import React, { useState, useMemo } from "react";
import { Tooltip } from "react-tooltip";
import ModalVideo from "react-modal-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "react-modal-video/css/modal-video.min.css";

import SectionTitle from "../components/common/SectionTitle";
import PortfolioModal from "../components/portfolio/PortfolioModal";
import { portfolioCategories, portfolioItems } from "../data/portfolio";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [video, setVideo] = useState({ isOpen: false, channel: "youtube", videoId: "" });
  const [selectedDetail, setSelectedDetail] = useState(null);

  const filtered = useMemo(
    () =>
      activeTab === "All"
        ? portfolioItems
        : portfolioItems.filter((i) => i.category === activeTab),
    [activeTab]
  );

  const handleItemClick = (item) => {
    if (item.type === "vimeo" || item.type === "youtube") {
      setVideo({ isOpen: true, channel: item.type, videoId: item.videoId });
    } else if (item.type === "details") {
      setSelectedDetail(item);
    }
    // type "photo" ditangani langsung oleh onClick={open} dari <Item>
  };

  return (
    <div className="container">
      <div className="msoleh_tm_portfolio">
        <SectionTitle subtitle="Portfolio" title="Creative Portfolio" />

        <div className="portfolio_filter">
          <div className="react-tabs" data-rttabs="true">
            <ul className="react-tabs__tab-list" role="tablist">
              {portfolioCategories.map((cat) => (
                <li
                  key={cat}
                  role="tab"
                  className={
                    activeTab === cat
                      ? "react-tabs__tab react-tabs__tab--selected"
                      : "react-tabs__tab"
                  }
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>

            <div className="list_wrapper">
              <Gallery>
                <ul className="portfolio_list">
                  {filtered.map((item, idx) => (
                    <li
                      key={item.id}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={idx * 100}
                    >
                      <div className="inner">
                        <div className="entry msoleh_tm_portfolio_animation_wrap">
                          {item.type === "photo" ? (
                            <Item
                              original={`/assets/img/portfolio/${item.image}`}
                              thumbnail={`/assets/img/portfolio/${item.image}`}
                              width="500"
                              height="550"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={`/assets/img/portfolio/${item.image}`}
                                  alt={item.category}
                                  data-tooltip-id={`tip-${item.id}`}
                                  role="button"
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                            </Item>
                          ) : (
                            <img
                              src={`/assets/img/portfolio/${item.image}`}
                              alt={item.category}
                              data-tooltip-id={`tip-${item.id}`}
                              role="button"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleItemClick(item)}
                            />
                          )}

                          <Tooltip
                            id={`tip-${item.id}`}
                            place="top"
                            className="tooltip-wrapper"
                          >
                            <h5>{item.name}</h5>
                            <span>{item.tag}</span>
                          </Tooltip>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Gallery>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel={video.channel}
        isOpen={video.isOpen}
        videoId={video.videoId}
        onClose={() => setVideo((prev) => ({ ...prev, isOpen: false }))}
      />

      <PortfolioModal
        item={selectedDetail}
        isOpen={!!selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />
    </div>
  );
}
