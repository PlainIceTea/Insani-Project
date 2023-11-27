import kelasF from "../assets/images/kelasF.png";
import { ArrowLeft } from "react-feather";

const fasilitas = [
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
  {
    header: "Smart Class Gedung F",
    desc: "Smart Class Gedung F terletak pada gedung F yang merupakan gedung tertinggi di Universitas Brawijaya. Smart Class merupakan tempat belajar mahasiswa Fakultas Ilmu Komputer. Ruangan ini dilengkapi proyektor, papan tulis, speaker, CCTV, air conditioner, dan smart TV. Daya tampung kelas rata-rata mencapai 50 mahasiswa. Smart Class berada pada lantai 2, 3, dan 4.",
  },
];

const FasilitasFilkom = () => {
  return (
    <>
      <div className="w-10/12 mx-auto py-10 font-montserrat relative">
        <ArrowLeft className="absolute top-12 left-0" size="35px" />
        <div className="text-3xl w-fit mx-auto font-bold mb-10">
          Fasilitas di FILKOM
        </div>
        {fasilitas.map((index, i) => (
          <div className="w-full flex my-16" key={i}>
            <img src={kelasF} alt="" />
            <div className="w-full ml-5">
              <div className="font-medium text-xl">{index.header}</div>
              <div className="font-medium mt-2 text-justify">{index.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FasilitasFilkom;
