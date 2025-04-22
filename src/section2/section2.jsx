import ImgHimdiko from "../assets/logo himdiko.svg"

import "./section2.css"

function Section2(){
    return(
        <>
         <div className="container_section2">
            <img src={ImgHimdiko} alt="" />

            <div className="section_visi_misi">
                <div className="title_visiMisi">
                    VISI dan MISI
                </div>
                <div className="content_visiMisi">
                kabinet SPECTRA priode 2024-2025
                </div>
                <div className="title_visi">
                    VISI
                </div>
                <div className="content_visi">
                Mewujudkan mahasiswa Diploma Komputer yang memiliki kemampuan dibidang keorganisasian, akademik dan non akademik yang berbasis teknologi komputer.
                </div>
                <div className="title_misi">
                    MISI
                </div>
                <div className="content_misi">
                    <ol>
                        <li>
                            Mengembangkan kemampuan dibidang teknologi informasi dan teknologi komputer mahasiswa Diploma Komputer Fakultas Ilmu Komputer Universitas Sriwijaya</li>
                        <li>
                            Melakukan kegiatan organisasi yang bertemakan Information and Communication Technology (ICT).
                        </li>
                        <li>
                            Mewujudkan mahasiswa Diploma Komputer yang kreatif, inovatif, dan berjiwa technopreneurshi
                        </li>
                    </ol>
                </div>
            </div>

         </div>
        </>
    )
}

export default Section2;