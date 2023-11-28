import { ArrowLeft } from "react-feather";
import bigF from "../assets/images/bigClassF.png";
import { Link } from 'react-router-dom';

const ClassF = () => {
  return (
    <>
      <div className="w-10/12 mx-auto py-10 font-montserrat h-screen ">
        <Link to='/layanan/fakultas/filkom'>
        <ArrowLeft className="absolute top-12 left-0" size="35px" />
        </Link>
        <div className="text-3xl w-fit mx-auto font-bold mb-10">
          Smart Class Gedung F
        </div>
        <div className="flex flex-wrap">
        <img src={bigF} alt="" className="mx-auto h-96 w-full object-cover" />
        <div className="px-16 py-4  mt-10 w-11/12 text-center rounded-2xl my-auto ml-5">
          Smart Class Gedung F terletak pada gedung F yang merupakan gedung
          tertinggi di Universitas Brawijaya. Smart Class merupakan tempat
          belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi
          proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV.
          Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada
          pada lantai 2, 3, dan 4.
        </div>
        </div>
      </div>
    </>
  );
};

export default ClassF;
