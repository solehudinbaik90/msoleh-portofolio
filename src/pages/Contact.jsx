import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import SectionTitle from "../components/common/SectionTitle";

const MAPTILER_KEY = process.env.REACT_APP_MAPTILER_KEY || "";

export default function Contact() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const [form, setForm] = useState({ name: "", user_email: "", message: "" });

  useEffect(() => {
    if (!MAPTILER_KEY || !mapContainer.current) return;

    if (mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`,
      center: [106.532593, -6.102504],
      zoom: 13,
    });

    new maplibregl.Marker({ color: "#e74c3c" })
      .setLngLat([106.532593, -6.102504])
      .addTo(map);

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.user_email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setForm({ name: "", user_email: "", message: "" });
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
      <div className="container">
        <div className="msoleh_tm_contact">
          <SectionTitle subtitle="Kontak" title="Mari Terhubung" />

          <div className="map_wrap">
            <div
              className="map"
              ref={mapContainer}
              style={{ width: "100%", height: 400, borderRadius: 8 }}
            />
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
