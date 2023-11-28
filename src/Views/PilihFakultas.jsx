import filkom from "../assets/images/filkom.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import f6 from "../assets/images/f6.png";
import f7 from "../assets/images/f7.png";
import f8 from "../assets/images/f8.png";
import f9 from "../assets/images/f9.png";
import { Link } from "react-router-dom";

const fakultas = [
  {
    nama: "FILKOM",
    gambar: filkom,
  },
  {
    nama: "FIKES",
    gambar: f2,
  },
  {
    nama: "FEB",
    gambar: f3,
  },
  {
    nama: "FAPET",
    gambar: f4,
  },
  {
    nama: "FH",
    gambar: f5,
  },
  {
    nama: "FTP",
    gambar: f6,
  },
  {
    nama: "FKG",
    gambar: f7,
  },
  {
    nama: "FPIK",
    gambar: f8,
  },
  {
    nama: "FIMIPA",
    gambar: f9,
  },
];

const PilihFakultas = () => {
  return (
    <>
      <div className="w-4/12 font-montserrat mx-auto py-10">
        <div className="w-fit text-3xl font-bold mx-auto mb-5">
          Pilih Fakultas
        </div>
        <div className="w-full flex flex-wrap ">
          {fakultas.map((item, i) => (
            <div className="w-4/12 my-4" key={i}>
              <div className="w-10/12 mx-auto">
                <img src={item.gambar} alt="" className="mx-auto rounded-xl " />
                <div className="w-fit mx-auto font-bold mt-2">{item.nama}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between mt-5">
          <Link to="/layanan">
            <div className="w-fit border-2 border-black rounded-lg">
              <button className="px-12 py-2 text-black font-bold">
                Kembali
              </button>
            </div>
          </Link>
          <Link to="/layanan/fakultas/filkom">
            <div className="w-fit bg-black rounded-lg">
              <button className="px-12 py-2 text-white font-bold hover:opacity-70 duration-200">
                Cari
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PilihFakultas;
