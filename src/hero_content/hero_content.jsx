import { useState } from "react";
import ImgHero from "../assets/ketum & waketum.png";
import "./hero_contnet.css";

function HeroContent() {
  const [hoveredWord, setHoveredWord] = useState(null);

  const deskripsiText = `
    Selamat datang di website resmi Himpunan Diploma Komputer 
    Universitas Sriwijaya (HIMDIO) 2025!  
    Kami adalah wadah kreativitas dan kolaborasi mahasiswa 
    Universitas Sriwijaya yang berkomitmen untuk mewujudkan 
    visi HIMDIO 2025. Dengan filosofi kepengurusan yang merepresentasikan 
    kekuatan ide dari berbagai sudut pandang, kami bertekad 
    menjalankan organisasi dengan integritas dan nilai-nilai keberbudayaan yang tinggi.
  `;

  const deskripsiWords = deskripsiText.trim().split(/\s+/);

  return (
    <div className="container_hero">
      <div className="container_hero_content">
        <div className="title_hero_content">HIMDIKO</div>

        <div className="deskripsi_hero_content">
          {deskripsiWords.map((word, index) => (
            <span
              key={index}
              className={`word ${hoveredWord === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredWord(index)}
              onMouseLeave={() => setHoveredWord(null)}
            >
              {word}&nbsp; 
            </span>
          ))}
        </div>
      </div>

      <div className="container_image_hero_content">
        <img src={ImgHero} alt="Hero" />
        <div className="title_hero_image">

            <div className="reactangle_nama">
                <span>DEAN KUSUMA ANGGARA</span>
                <span>EKA PRATIWI</span>
            </div>
            <div className="reactangle_title_nama">
                <span>Wakil Ketua Umum</span>
                <span>Ketua Umum</span>
            </div>

        </div>
      </div>
    </div>
  );
}

export default HeroContent;
