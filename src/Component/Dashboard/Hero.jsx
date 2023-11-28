import background from "../../assets/images/about-content-bg.png";
import { Link } from 'react-router-dom'; 
const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full py-20 bg-fixed font-montserrat bg-cover bg-center"
      >
        <div className="w-fit mx-auto text-5xl text-white font-bold">
          Selamat Datang di Insan!
        </div>
        <div className="w-fit mx-auto text-xl text-white my-5">
          "Menuntun Menuju Kesetaraan, Menginspirasi Melalui Aksi"
        </div>
        <div className="flex w-5/12 mx-auto">
          <div className="w-10/12">
            <input
              type="text"
              placeholder="Mencari Fasilitas"
              className="w-11/12 px-4 rounded-xl py-2"
            />
          </div>
          <div className="w-2/12">
    <Link to='/rute'>
            <button className="px-12 py-2 text-white bg-black rounded-xl hover:opacity-60 active:bg-slate-700 duration-200">
              Cari
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
