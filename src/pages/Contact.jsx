import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import mapboxgl from "mapbox-gl";
import SectionTitle from "../components/common/SectionTitle";
import 'mapbox-gl/dist/mapbox-gl.css';


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || "";

export default function Contact() {
  const mapContainer = useRef(null);
  const [form, setForm] = useState({ name: "", user_email: "", message: "" });

  useEffect(() => {
    if (!MAPBOX_TOKEN || !mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: `https://maptiler.com${MAPBOX_TOKEN}`,
      center: [106.532593, -6.102504],
      zoom: 12,
    });

    return () => map.remove();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.user_email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Integrate with your email service (EmailJS, backend API, etc.)
    toast.success("Message sent successfully!");
    setForm({ name: "", user_email: "", message: "" });
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
      <div className="container">
        <div className="msoleh_tm_contact">
          <SectionTitle subtitle="Kontak" title="Mari Terhubung" />

          <div className="map_wrap">
            <div className="map" ref={mapContainer} style={{ width: "100%", height: 400 }} />
          </div>

          <div className="fields">
            <form className="contact_form" id="myForm" onSubmit={handleSubmit}>
              <div className="first">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                      value={form.user_email}
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <textarea
                      name="message"
                      placeholder="Pesan"
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </li>
                </ul>
              </div>
              <div className="msoleh_tm_button">
                <button type="submit" className="ib-button">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
