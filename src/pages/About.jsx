import React from "react";
import Slider from "react-slick";
import SectionTitle from "../components/common/SectionTitle";
import ProgressBar from "../components/common/ProgressBar";
import {
  programmingSkills,
  languageSkills,
  knowledgeList,
  interestList,
} from "../data/skills";
import { education, experience, testimonials } from "../data/resume";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function About() {
  return (
    <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
      <div className="container">
        <div className="msoleh_tm_about">
          <SectionTitle subtitle="Profil" title="Profil Saya" />

          <div className="top_author_image">
            <img src="/assets/img/slider/1.jpg" alt="about" />
          </div>

          <div className="about_title">
            <h3>Muhamad Soleh</h3>
            <span>Guru Fisika</span>
          </div>

          <div className="about_text">
            <p>
              Halo, saya Muhamad Soleh, seorang pendidik IPA dan Fisika dengan pengalaman selama lebih dari satu dekade di dunia pendidikan. Saya memiliki pengalaman mengajar di MTs, SMK, SMA, dan bimbingan belajar, serta terus mengembangkan kemampuan untuk menjadi pendidik yang profesional dan adaptif terhadap perkembangan zaman.
            </p>
            <p>
              Selain mengajar, saya memiliki ketertarikan pada teknologi pendidikan, pengembangan media pembelajaran digital, pengelolaan website sekolah, serta digitalisasi sistem pendidikan. Saya ingin mengembangkan ilmu yang saya miliki untuk memberikan manfaat bagi peserta didik, guru, dan lingkungan pendidikan.
            </p>
          </div>

          <div className="msoleh_tm_short_info">
            <div className="left">
              <div className="msoleh_tm_info">
                <ul>
                  <li><span>Tgl Lahir:</span><span>01.01.1990</span></li>
                  <li><span>Usia:</span><span>32</span></li>
                  <li><span>Alamat:</span><span>Jungkel, Tanjakan Mekar, Rajeg</span></li>
                  <li><span>Email:</span><span><a href="mailto:solehudinz3692@gmail.com">solehudinz3692@gmail.com</a></span></li>
                  <li><span>Phone:</span><span><a href="tel:+62 887 4331 30861">+62 887 4331 30861</a></span></li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="msoleh_tm_info">
                <ul>
                  <li><span>Kebangsaan:</span><span>Indonesia</span></li>
                  <li><span>Sekolah:</span><span>Universitas Kehidupan</span></li>
                  <li><span>Gelar:</span><span>Master</span></li>
                  <li><span>Hobi:</span><span>Sepak Bola</span></li>
                  <li><span>Freelance:</span><span>Tersedia</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="msoleh_tm_button" data-position="left">
            <a href="/assets/img/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_progressbox">
        <div className="container">
          <div className="in">
            <div className="left">
              <div className="msoleh_section_title">
                <h3>Keterampilan Akademik</h3>
              </div>
              <div className="msoleh_progress">
                {programmingSkills.map((s) => (
                  <ProgressBar key={s.label} {...s} />
                ))}
              </div>
            </div>
            <div className="right">
              <div className="msoleh_section_title">
                <h3>Keterampilan Bahasa</h3>
              </div>
              <div className="msoleh_progress">
                {languageSkills.map((s) => (
                  <ProgressBar key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_skillbox">
        <div className="container">
          <div className="in">
            <div className="left">
              <div className="msoleh_section_title"><h3>Pengetahuan</h3></div>
              <div className="msoleh_tm_skill_list">
                <ul>
                  {knowledgeList.map((item) => (
                    <li key={item}>
                      <span>
                        <img className="svg" src="/assets/img/svg/rightarrow.svg" alt="arrow" /> {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="msoleh_section_title"><h3>Hobi</h3></div>
              <div className="msoleh_tm_skill_list">
                <ul>
                  {interestList.map((item) => (
                    <li key={item}>
                      <span>
                        <img className="svg" src="/assets/img/svg/rightarrow.svg" alt="arrow" /> {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_resumebox">
        <div className="container">
          <div className="in">
            <div className="left">
              <div className="msoleh_section_title"><h3>Pendidikan</h3></div>
              <div className="msoleh_tm_resume_list">
                <ul>
                  {education.map((e) => (
                    <li key={e.place}>
                      <div className="list_inner">
                        <div className="time"><span>{e.time}</span></div>
                        <div className="place"><h3>{e.place}</h3><span>{e.degree}</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="msoleh_section_title"><h3>Pengalaman</h3></div>
              <div className="msoleh_tm_resume_list">
                <ul>
                  {experience.map((e) => (
                    <li key={e.place}>
                      <div className="list_inner">
                        <div className="time"><span>{e.time}</span></div>
                        <div className="place"><h3>{e.place}</h3><span>{e.role}</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="msoleh_tm_testimonials">
        <div className="container">
          <div className="msoleh_section_title"><h3>Testimonials</h3></div>
          <div className="list">
            <Slider {...sliderSettings}>
              {testimonials.map((t) => (
                <div key={t.name} className="list_inner">
                  <div className="text"><p>{t.text}</p></div>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        style={{ backgroundImage: `url(${t.image})` }}
                      />
                    </div>
                    <div className="info">
                      <h3>{t.name}</h3>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}