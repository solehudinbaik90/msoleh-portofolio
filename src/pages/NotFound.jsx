import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="msoleh_tm_error">
        <div className="msoleh_tm_error_inner">
          <h1>404</h1>
          <h3>Halaman tidak ditemukan</h3>
          <p>Halaman yang Anda cari mungkin sudah dipindahkan atau dihapus.</p>
          <div className="msoleh_tm_button">
            <Link to="/">
              <span>Kembali ke Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
