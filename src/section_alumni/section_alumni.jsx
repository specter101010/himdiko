import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

import ImgArrow from "../assets/ei_arrow-up.png"
import ImgArrow2 from "../assets/ei_arrow-up2.png"
import ImgProfile from "../assets/dummy man 1.png"
import Petik from "../assets/“.png"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './section_alumni.css';

function SectionAlumni() {
  const alumniList = [
    {
      nama: "Rizky Pratama, Alumni 2020",
      pesan: "HIMDIO bukan cuma organisasi, tapi rumah kedua yang ngajarin aku arti tanggung jawab, teamwork, dan komunikasi. Ilmu dan pengalaman yang aku dapetin di sini bener-bener ngaruh ke dunia kerja. Bangga pernah jadi bagian HIMDIO!"
    },
    {
      nama: "Andini Febriana, Alumni 2022",
      pesan: "HIMDIO bukan cuma organisasi, tapi rumah kedua yang ngajarin aku arti tanggung jawab, teamwork, dan komunikasi. Ilmu dan pengalaman yang aku dapetin di sini bener-bener ngaruh ke dunia kerja. Bangga pernah jadi bagian HIMDIO!"
    },
    {
      nama: "M. Fahri, Alumni 2019",
      pesan: "HIMDIO bukan cuma organisasi, tapi rumah kedua yang ngajarin aku arti tanggung jawab, teamwork, dan komunikasi. Ilmu dan pengalaman yang aku dapetin di sini bener-bener ngaruh ke dunia kerja. Bangga pernah jadi bagian HIMDIO!"
    }
  ];

  return (
    <div className="container_cerita_alumni">
    <h2 className="title_alumni">
      Cerita <div className="title_alumni_half">Para Alumni</div>
    </h2>
  
    {/* Custom Navigation Buttons */}
   <div className="dflex">
   <div className="custom-swiper-button next-button">
      <img src={ImgArrow2} alt="Next" />
    </div>
   <div className="custom-swiper-button prev-button">
      <img src={ImgArrow} alt="Prev" />
    </div>
   </div>
  
    <Swiper
      modules={[Pagination, Autoplay, EffectFade, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      navigation={{
        prevEl: '.prev-button',
        nextEl: '.next-button',
      }}
    >
      {alumniList.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="container_card">
            <div className="card_alumni">

                <img className='img_petik' src={Petik} alt="" />

            <div className="text_card">
              <p>{item.pesan}</p>
            </div>

              <div className="card_profile">
                <div className="card_photo">
                    <img src={ImgProfile} alt="" />
                </div>
              <h4>- {item.nama}</h4>
              </div>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  );
}

export default SectionAlumni;
