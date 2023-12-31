import layanan1 from "../../assets/images/layanan1.png";
import layanan2 from "../../assets/images/layanan2.png";
import layanan3 from "../../assets/images/layanan3.png";
import { Link } from 'react-router-dom'; 

const data = [
  {
    gambar: layanan1,
    value: "/layanan/fakultas",
    header: "Informasi Fasilitas",
    text: "Temukan informasi mengenai fasilitas setiap fakultas",
  },
  {
    gambar: layanan2,
    value: "/rute",
    header: "Rute Fasilitas",
    text: "Dapatkan detail rute untuk fasilitas",
  },
  {
    gambar: layanan3,
    value: "/penerjemah",
    header: "Fasilitas Penerjemah",
    text: "Dapatkan kemudahan untuk belajar, dengan fitur AI",
  },
];

const Layanan = () => {
  return (
    <>
      <div className="w-full py-10 font-montserrat">
        <div className="text-3xl font-bold w-fit mx-auto">Layanan Kami</div>
        <div className="w-fit mx-auto my-5 font-medium">
          Temukan bagaimana kami dapat mendukung Anda
        </div>
        <div className="w-10/12 mx-auto flex">
          {data.map((item, i) => (
            <div className="w-4/12" key={i}>
              <Link to={item.value} >
              <div className="w-10/12 mx-auto h-80  border rounded-xl hover:shadow-xl hover:bg-primary hover:text-white active:bg-blue-950 duration-200 hover:scale-110">
                <img src={item.gambar} alt="" className="mx-auto rounded-xl" />
                <div className="w-fit mx-auto font-medium my-2">
                  {item.header}
                </div>
                <div className=" text-center w-11/12 mx-auto">{item.text}</div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Layanan;
