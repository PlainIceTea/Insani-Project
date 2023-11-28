import filkom from "../../assets/images/filkom.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
import f4 from "../../assets/images/f4.png";
import f5 from "../../assets/images/f5.png";
import f6 from "../../assets/images/f6.png";
import f7 from "../../assets/images/f7.png";
import f8 from "../../assets/images/f8.png";
import f9 from "../../assets/images/f9.png";
import { Link } from 'react-router-dom';

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
    gambar:f4,
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

const RuteFakultas = () => {
  return (
    <>
      <div className=" font-montserrat mx-auto pb-10 pt-5 px-3">
       
        <div className="w-full flex flex-wrap  ">
          {fakultas.map((item, i) => (
            <div className="w-4/12 my-4 group" key={i}>
              <Link to='/rute/hasil'>
              <div className="w-10/12 mx-auto">
                <img src={item.gambar} alt="" className="mx-auto rounded-xl brightness-50 group-hover:brightness-100 duration-100" />
                <div className="w-fit mx-auto font-bold mt-2">{item.nama}</div>
              </div>
              </Link>
            </div>
          ))}
          <div className="w-full">
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default RuteFakultas;
