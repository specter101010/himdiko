import logo_himdiko from "../assets/logo himdiko.svg"
import logo_tiktok from "../assets/logo tiktok.svg"
import logo_linkin from "../assets/logo linkin.svg"
import logo_instagram from "../assets/logo instagram.svg"
import "./header.css"

function Header(){
    return(
        <div className="container_header">
            <div className="logo_himdiko">
                <div className="logo_himdiko">
                    <img src={logo_himdiko} alt="" />
                </div>
                <div className="title_himdiko">
                   <a href="/"> HIMDIKO</a>
                </div>
            </div>

            <div className="navbar">
                
                <div className="nav_item">
                    <div className="nav_list">Tentang kita</div>
                    <div className="dropdown_navbar1">
                    <div className="dropdown_list"><a href="">HIMDIKO</a></div>
                    <div className="dropdown_list"><a href="">WEBSITE</a></div>
                    <div className="dropdown_list"><a href="">VISI & MISI</a></div>
                    </div>
                </div>

                <div className="nav_item">
                    <div className="nav_list">Profile</div>
                    <div className="dropdown_navbar2">
                    <div className="dropdown_list"><a href="">ANGKATAN 2021</a></div>
                    <div className="dropdown_list"><a href="">ANGKATAN 2022</a></div>
                    <div className="dropdown_list"><a href="">ANGKATAN 2023</a></div>
                    </div>
                </div>

                <div className="nav_item">
                    <div className="nav_list">Proker</div>
                    <div className="dropdown_navbar3">
                    <div className="dropdown_list"><a href="">AKADEMIK</a></div>
                    <div className="dropdown_list"><a href="">KASTRAD</a></div>
                    <div className="dropdown_list"><a href="">PSDM</a></div>
                    <div className="dropdown_list"><a href="">PMB</a></div>
                    <div className="dropdown_list"><a href="">DANUS</a></div>
                    <div className="dropdown_list"><a href="">ADM</a></div>
                    <div className="dropdown_list"><a href="">INFOKOM</a></div>
                    </div>
                </div>

                </div>


            <div className="kontak">

                    <div className="kontak_list">
                        <a href="https://www.tiktok.com/@himdiko.unsri">
                          <img src={logo_tiktok} alt="" />
                        </a>        
                </div>
                <div className="kontak_list">
                    <img src={logo_linkin} alt="" />
                </div>
                <div className="kontak_list">
                    <a href="https://www.instagram.com/himdiko.unsri/">
                    <img src={logo_instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;