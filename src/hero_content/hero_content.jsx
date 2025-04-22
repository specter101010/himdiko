import ImgHero from "../assets/preswapres.png"

import "./hero_contnet.css"

function HeroContent(){
    return(
        <>

     <div className="container_hero">
     <div className="container_hero_content">
            <div className="title_hero_content">
                HIMDIKO
            </div>
            <div className="deskripsi_hero_content">
            Selamat datang di website resmi Himpunan Diploma Komputer 
Universitas Sriwijaya (HIMDIO) 2025!  
Kami adalah wadah kreativitas dan kolaborasi mahasiswa 
Universitas Sriwijaya yang berkomitmen untuk mewujudkan 
visi HIMDIO 2025. Dengan filosofi kepengurusan yang merepresentasikan 
kekuatan ide dari berbagai sudut pandang, kami bertekad 
menjalankan organisasi dengan integritas dan nilai-nilai keberbudayaan yang tinggi.
            </div>
        </div>

        <div className="container_image_hero_content">
            <img src={ImgHero} alt="" />
        </div>
     </div>

        </>
    )
}


export default HeroContent;