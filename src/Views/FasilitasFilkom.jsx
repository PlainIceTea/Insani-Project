import kelasF from "../assets/images/kelasF.png";
import fas2 from "../assets/images/fas2.png";
import fas3 from "../assets/images/fas3.png";
import fas4 from "../assets/images/fas4.png";
import fas5 from "../assets/images/fas5.png";
import fas6 from "../assets/images/fas6.png";
import fas7 from "../assets/images/fas7.png";
import { ArrowLeft } from "react-feather";
import { Link } from 'react-router-dom';

const fasilitas = [
  {
    header: "Smart Class Gedung F",
    img: kelasF,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    img: fas2,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    img: fas3,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    img: fas4,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    img: fas5,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    img: fas6,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    img: fas7,
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
];

const FasilitasFilkom = () => {
  return (
    <>
      <div className="w-10/12 mx-auto py-10 font-montserrat ">
        <Link to='/layanan/fakultas'>
        <ArrowLeft className=" top-12 left-0" size="35px" />
        </Link>
        <div className="text-3xl w-fit mx-auto font-bold mb-10">
          Fasilitas di FILKOM
        </div>
        {fasilitas.map((index, i) => (
          <div className="w-full flex my-16 border shadow-lg hover:scale-110 duration-200 active:bg-slate-600" key={i}>
            
            <img src={index.img} alt="" />
            <Link to='/layanan/fakultas/filkom/class-gedung-f'>
            <div className="w-full ml-5 p-10">
              <div className="font-bold text-xl">{index.header}</div>
              <div className=" mt-2 text-justify">{index.desc}</div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FasilitasFilkom;
