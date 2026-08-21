import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import ServicesModal from "../components/services/ServicesModal";
import { services, pricingPlans, facts, partners } from "../data/services";

export default function Service() {
  const [selected, setSelected] = useState(null);

  return (
    <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
      <div className="container">
        <div className="msoleh_tm_services">
          <SectionTitle subtitle="Layanan" title="Apa yang bisa saya kerjakan" />
          <div className="list">
            <ul>
              {services.map((s) => (
                <li key={s.number}>
                  <div className="list_inner">
                    <span className="number">{s.number}</span>
                    <h3 className="title">{s.title}</h3>
                    <p className="text">{s.text}</p>
                    <div className="msoleh_tm_read_more">
                      <button onClick={() => setSelected(s)}>
                        <span>buka</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_partners">
        <div className="container">
          <div className="msoleh_section_title"><h3>Partners</h3></div>
          <div className="partners_inner">
            <ul>
              {partners.map((n) => (
                <li key={n}>
                  <div className="list_inner">
                    <img src={`/assets/img/partners/dark/${n}.png`} alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_facts">
        <div className="container">
          <div className="msoleh_section_title"><h3>Fun Facts</h3></div>
          <div className="list">
            <ul>
              {facts.map((f) => (
                <li key={f.label}>
                  <div className="list_inner">
                    <h3>{f.number}</h3>
                    <span>{f.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_pricing">
        <div className="container">
          <div className="msoleh_section_title"><h3>Pricing</h3></div>
          <div className="list">
            <ul>
              {pricingPlans.map((p) => (
                <li key={p.plan}>
                  <div className="list_inner">
                    <div className="price">
                      <h3><span>{p.price}<span className="currency">$</span></span></h3>
                    </div>
                    <div className="plan"><h3>{p.plan}</h3></div>
                    <ul className="item">
                      {p.features.map((f) => (
                        <li key={f} className="active"><p>{f}</p></li>
                      ))}
                    </ul>
                    <div className="msoleh_tm_button" data-position="left">
                      <a href="#buy"><span>Purchase</span></a>
                    </div>
                    {p.popular && <span className="popular">Popular</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ServicesModal
        service={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
