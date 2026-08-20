export const services = [
  {
    number: "01",
    title: "Pendidikan IPA & Fisika",
    text: "Pembelajaran IPA dan Fisika yang mudah dipahami, interaktif, dan sesuai kebutuhan peserta didik...",
    image: "5.jpg",
    description: [
      "Saya menyediakan pembelajaran IPA dan Fisika yang interaktif, terarah, dan mudah dipahami. Setiap materi disusun dengan memahami kebutuhan peserta didik agar konsep dapat diterima secara jelas dan menyenangkan.",
      "Saya menggabungkan penjelasan konsep, media digital, dan metode belajar yang sesuai agar siswa lebih aktif, memahami materi, serta mampu mengembangkan kemampuan berpikir secara mandiri dan terarah.",
      "Baik untuk pembelajaran sekolah maupun bimbingan belajar, tujuan saya tetap sama: membantu siswa memahami Fisika dengan lebih mudah sekaligus meningkatkan hasil belajar secara nyata.",
    ],
    features: [
      "Pembelajaran IPA & Fisika",
      "Metode belajar interaktif",
      "Materi mudah dipahami",
      "Evaluasi hasil belajar",
    ],
  },
  {
    number: "02",
    title: "Website Sekolah",
    text: "Pengelolaan website sekolah yang informatif, modern, dan mudah digunakan oleh seluruh warga sekolah...",
    image: "2.jpg",
    description: [
      "Saya membantu sekolah, madrasah, dan yayasan mengelola website sebagai pusat informasi yang rapi, modern, dan mudah diakses. Setiap konten disusun agar sesuai dengan kebutuhan sekolah dan masyarakat.",
      "Saya menangani pembaruan informasi, publikasi kegiatan, serta penyusunan konten agar website mampu menjadi media komunikasi yang informatif bagi peserta didik, orang tua, guru, dan masyarakat.",
      "Hasilnya adalah website sekolah yang informatif, terpercaya, dan mendukung komunikasi serta publikasi kegiatan pendidikan secara lebih efektif.",
    ],
    features: [
      "Informasi sekolah terstruktur",
      "Publikasi kegiatan pendidikan",
      "Pengelolaan konten website",
      "Website mudah digunakan",
    ],
  },
  {
    number: "03",
    title: "Media Pembelajaran",
    text: "Pengembangan media pembelajaran digital yang menarik untuk mendukung proses belajar yang lebih efektif...",
    image: "4.jpg",
    description: [
      "Saya mengembangkan media pembelajaran digital yang menarik, interaktif, dan sesuai kebutuhan peserta didik. Materi dapat dikemas dalam presentasi, infografis, video, maupun simulasi pembelajaran.",
      "Setiap media dirancang dengan memperhatikan tujuan pembelajaran, karakteristik siswa, dan kemudahan penggunaan agar guru dapat menyampaikan materi secara lebih jelas, kreatif, dan tidak monoton.",
      "Hasilnya adalah media pembelajaran yang membantu meningkatkan perhatian siswa, mempermudah pemahaman konsep, dan membuat proses belajar terasa lebih aktif.",
    ],
    features: [
      "Presentasi pembelajaran interaktif",
      "Infografis & materi edukasi",
      "Video pembelajaran digital",
      "Simulasi konsep pembelajaran",
    ],
  },
  {
    number: "04",
    title: "Administrasi Pendidikan",
    text: "Pengelolaan administrasi dan sistem pendidikan untuk mendukung kegiatan sekolah yang lebih tertata dan efektif...",
    image: "3.jpg",
    description: [
      "Saya memiliki pengalaman mengelola administrasi pendidikan dan sistem ujian berbasis komputer untuk mendukung kegiatan sekolah yang tertata. Setiap pekerjaan dilakukan secara teliti, sistematis, dan bertanggung jawab.",
      "Pengelolaan mencakup data akademik, penginputan nilai, sinkronisasi sistem, serta kebutuhan administrasi pembelajaran agar proses kerja sekolah dapat berjalan lebih efektif dan terorganisir.",
      "Tujuannya adalah membantu sekolah mengurangi kendala administratif, menjaga ketepatan data, dan mendukung kelancaran kegiatan pendidikan melalui sistem yang lebih terstruktur.",
    ],
    features: [
      "Proktor ujian berbasis komputer",
      "Pengelolaan data akademik",
      "Administrasi pembelajaran",
      "Sinkronisasi data pendidikan",
    ],
  },
  {
    number: "05",
    title: "Pelatihan Teknologi",
    text: "Pelatihan teknologi pendidikan untuk membantu guru beradaptasi dengan pembelajaran digital secara praktis dan efektif...",
    image: "6.jpg",
    description: [
      "Saya memberikan pelatihan teknologi pendidikan untuk membantu guru memanfaatkan berbagai platform digital secara praktis. Materi disesuaikan dengan kebutuhan agar teknologi dapat digunakan untuk mendukung pembelajaran.",
      "Pelatihan mencakup Google Classroom, Zoom, Canva, Microsoft Office, dan platform pembelajaran digital lainnya. Setiap sesi dibuat sederhana, bertahap, dan mudah dipraktikkan setelah pelatihan.",
      "Hasilnya adalah guru yang lebih percaya diri menggunakan teknologi, mampu membuat materi digital, dan siap menerapkan pembelajaran yang lebih interaktif di kelas.",
    ],
    features: [
      "Google Classroom & pembelajaran",
      "Canva untuk materi edukasi",
      "Microsoft Office untuk guru",
      "Pelatihan pembelajaran daring",
    ],
  },
  {
    number: "06",
    title: "Digitalisasi Sekolah",
    text: "Pendampingan transformasi digital sekolah untuk membangun sistem pembelajaran dan informasi yang lebih modern...",
    image: "7.jpg",
    description: [
      "Saya membantu sekolah menata kebutuhan digital mulai dari media pembelajaran, website, hingga pengelolaan informasi. Setiap solusi disesuaikan dengan kondisi dan kebutuhan sekolah agar mudah diterapkan.",
      "Pendampingan dilakukan secara bertahap melalui pemetaan kebutuhan, pemilihan platform, pengembangan media, dan pelatihan pengguna agar proses transformasi digital berjalan lebih terarah dan berkelanjutan.",
      "Tujuannya adalah membantu sekolah memanfaatkan teknologi secara tepat untuk meningkatkan kualitas layanan pendidikan, komunikasi, serta pengalaman belajar bagi seluruh warga sekolah.",
    ],
    features: [
      "Pemetaan kebutuhan digital",
      "Pengembangan media sekolah",
      "Pendampingan transformasi digital",
      "Strategi teknologi pendidikan",
    ],
  },
].map((s) => s);

export const pricingPlans = [
  { plan: "Gratis", price: 0, popular: false },
  { plan: "Dasar", price: 30, popular: true },
  { plan: "Profesional", price: 70, popular: false },
].map((p) => ({
  ...p,
  features: ["Konsultasi Awal", "Kualitas Profesional", "Materi Digital", "Dukungan Gratis"],
}));

export const facts = [
  { number: "10+", label: "Tahun Mengajar" },
  { number: "4+", label: "Bidang Keahlian" },
  { number: "5+", label: "Layanan Profesional" },
];

export const partners = Array.from({ length: 8 }, (_, i) => i + 1);