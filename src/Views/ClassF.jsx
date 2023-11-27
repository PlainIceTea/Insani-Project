import { ArrowLeft } from "react-feather";
import bigF from "../assets/images/bigClassF.png";

const ClassF = () => {
  return (
    <>
      <div className="w-10/12 mx-auto py-10 font-montserrat relative">
        <ArrowLeft className="absolute top-12 left-0" size="35px" />
        <div className="text-3xl w-fit mx-auto font-bold mb-10">
          Smart Class Gedung F
        </div>
        <img src={bigF} alt="" className="mx-auto " />
        <div className="px-16 py-4 shadow-2xl mt-10 rounded-2xl">
          Smart Class Gedung F terletak pada gedung F yang merupakan gedung
          tertinggi di Universitas Brawijaya. Smart Class merupakan tempat
          belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi
          proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV.
          Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada
          pada lantai 2, 3, dan 4.
        </div>
      </div>
    </>
  );
};

export default ClassF;
