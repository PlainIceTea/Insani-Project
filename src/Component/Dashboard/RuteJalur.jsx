import h1 from "../../assets/images/h1.png";
import h2 from "../../assets/images/h2.png";
import h3 from "../../assets/images/h3.png";
import h4 from "../../assets/images/h4.png";
import { Link } from 'react-router-dom';
const data = [
  {
    gambar: h1,
    header: "Area Parkir",
    jalur:"Mulai dari area parkir",
    jarak: "500 m",
    waktu: "5 menit",
  },
  {
    gambar: h2,
    header: "Junction",
    jalur:"Menuju junction melewati gedung G",
    jarak: "300 m",
    waktu: "3 menit",
  },
  {
    gambar: h3,
    header: "Mushola Ulul Al-Baab",
    jalur:"Melewati koridor depan mushola",
    jarak: "100 m",
    waktu: "1 menit",
  },
  {
    gambar: h4,
    header: "Fasilitas Penerjemah",
    jalur:"Melewati koridor depan mushola",
    jarak: "Selesai",
    waktu: "Tujuan anda",
  },
];

const RuteJalur = () => {
  return (
    <>
      <div className="w-full  font-montserrat">
       
        <div className=" mx-auto w-full">
          {data.map((item, i) => (
             <div class="shadow max-w-sm  flex items-center rounded-md my-5 mx-10 px-2" key={i}>
             <img src={item.gambar} class="h-16 mr-2" />
             <div class="">
                 <h1 class="mb-2 mt-3 font-medium text-base">{item.header}</h1>
                 <p class="mb-4 text-xs">{item.jalur}</p>
             </div>
             <div class="ml-auto text-center w-3/12">
                 <h1 class="font-bold text-base">{item.jarak}</h1>
                 <p class="text-xs">{item.waktu}</p>
             </div>
         </div>
          ))}
          <div className="w-11/12  flex justify-between ">
            <Link to='/rute'>
          <button class="px-5 py-3 bg-white font-medium text-primary rounded-xl m-5 border border-primary  hover:bg-primary hover:text-white  duration-200">Kembali</button>
          </Link>
          <Link to='/'>
          <button class="px-5 py-3 bg-primary font-medium text-white rounded-xl m-5 border border-primary  hover:bg-white hover:text-primary duration-200">Selesai</button>
          </Link>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default RuteJalur;
