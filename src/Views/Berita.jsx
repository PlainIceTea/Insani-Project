import { ArrowLeft } from "react-feather";
import berita1 from "../assets/images/berita1.png";
import berita2 from "../assets/images/berita2.png";
import berita3 from "../assets/images/berita3.png";
import berita4 from "../assets/images/berita4.png";

const fasilitas = [
  {
    image: berita1,
    header:
      "Mahasiswa Difabel Baru Ikuti Sosialisasi Beasiswa dan Layanan Inklusif di UB",
    tanggal: "22/08/2023",
    desc: "Subdirektorat Layanan Disabilitas Universitas Brawijaya mensosialisasikan layanan dan beasiswa bagi mahasiswa difabel yang baru diterima pada 2023 ini. Kegiatan ini dihadiri mahasiswa baru penyandang disabilitas beserta orang tua baik luring maupun daring di lantai 6 Gedung Rektorat, Jumat (18/8/2023).",
  },
  {
    image: berita2,
    header:
      "Mahasiswa Difabel Baru Ikuti Sosialisasi Beasiswa dan Layanan Inklusif di UB",
    tanggal: "22/08/2023",
    desc: "Subdirektorat Layanan Disabilitas Universitas Brawijaya mensosialisasikan layanan dan beasiswa bagi mahasiswa difabel yang baru diterima pada 2023 ini. Kegiatan ini dihadiri mahasiswa baru penyandang disabilitas beserta orang tua baik luring maupun daring di lantai 6 Gedung Rektorat, Jumat (18/8/2023).",
  },
  {
    image: berita3,
    header:
      "Mahasiswa Difabel Baru Ikuti Sosialisasi Beasiswa dan Layanan Inklusif di UB",
    tanggal: "22/08/2023",
    desc: "Subdirektorat Layanan Disabilitas Universitas Brawijaya mensosialisasikan layanan dan beasiswa bagi mahasiswa difabel yang baru diterima pada 2023 ini. Kegiatan ini dihadiri mahasiswa baru penyandang disabilitas beserta orang tua baik luring maupun daring di lantai 6 Gedung Rektorat, Jumat (18/8/2023).",
  },
  {
    image: berita4,
    header:
      "Mahasiswa Difabel Baru Ikuti Sosialisasi Beasiswa dan Layanan Inklusif di UB",
    tanggal: "22/08/2023",
    desc: "Subdirektorat Layanan Disabilitas Universitas Brawijaya mensosialisasikan layanan dan beasiswa bagi mahasiswa difabel yang baru diterima pada 2023 ini. Kegiatan ini dihadiri mahasiswa baru penyandang disabilitas beserta orang tua baik luring maupun daring di lantai 6 Gedung Rektorat, Jumat (18/8/2023).",
  },
];

const Berita = () => {
  return (
    <>
      <div className="w-full font-montserrat py-10">
        <div className="w-11/12 mx-auto flex">
          <ArrowLeft size="30px" />
          <div className="text-xl font-bold ml-5">Berita</div>
        </div>
        <div className="w-10/12 mx-auto mt-10">
          <div className="font-medium text-lg">
            Ikuti terus berita dan informasi
          </div>
          {fasilitas.map((index, i) => (
            <div className="w-full flex my-16" key={i}>
              <img src={index.image} alt="" className="w-3/12" />
              <div className="w-full ml-5">
                <div className="font-medium text-xl">{index.header}</div>
                <div className="my-3 text-sm font-medium text-gray-400">
                  Tanggal: {index.tanggal}
                </div>
                <div className="font-medium mt-2 text-justify">
                  {index.desc}
                </div>
                <div className="w-fit border-[1px] border-gray-400 mt-4">
                  <button className="px-2 py-1s">Baca Selengkapnya</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Berita;
