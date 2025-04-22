import logo_unsri_footer from "../assets/logo unsri 1.png"

import logo_tiktok_footer from "../assets/logo tiktok.svg"
import logo_linkin_footer from "../assets/logo linkin.svg"
import logo_instagram_footer from "../assets/logo instagram.svg"

import "./footer.css"

function Footer(){
    return(
        <>
        <div className="container_footer">

            <div className="copyright">
            ©  2025 Himpunan Diploma Kompoter Universitas Sriwijaya
            </div>

            <div className="section_footer">

               <div className="section1_footer">
                <div className="section_unsri">
                    <div className="logo_unsri_footer">
                        <img src={logo_unsri_footer} alt="" />
                    </div>
                        <div className="title_unsri_footer">
                            <div>UNIVERSITAS</div>
                            <div>SRIWIJAYA</div>
                        </div>
                    </div>

                    <div className="section_contact">
                        <div className="title_contact_footer">
                    Follow us on social media
                        </div>

                    <ul>
                        <li><img src={logo_tiktok_footer} alt="" /></li>
                        <li><img src={logo_linkin_footer} alt="" /></li>
                        <li><img src={logo_instagram_footer} alt="" /></li>
                    </ul>

                    </div>
               </div>

               <div className="section2_footer">

                <div className="alamat_footer">
                Jl. Masjid Al Gazali, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30128
                </div>

                <div className="contact_footer">
                E: info@ugm.ac.id | P: +62(274)588688 | F: +62(274)565223 | WA: +628112869988
                </div>

               </div>

            </div>

        </div>
        </>
    )
}

export default Footer;