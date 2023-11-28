import RuteFakultas from "../Component/Dashboard/RuteFakultas";
import cari1 from "../assets/images/cari1.png";
import cari2 from "../assets/images/cari2.png";
import cari3 from "../assets/images/cari3.png";
import cari4 from "../assets/images/cari4.png";
import map from "../assets/images/map.svg";


const Rute = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="w-4/12 border ">
        <div className="form  mx-auto ">
          <div className="flex mb-5">
            <div className="text-xl mx-auto">Pencarian Rute Fasilitas</div>
          </div>

          <div className="flex w-11/12 mb-5">
            <div className="w-2/12 flex">
              <img src={cari1} className="m-auto" alt="Search Icon" />
            </div>
            <div className="border w-10/12 mx-auto rounded-xl">
              <input
                type="text"
                placeholder="Posisi sekarang"
                className="w-full px-4 rounded-xl py-2"
              />
            </div>
          </div>

          <div className="flex w-11/12 mb-5">
            <div className="w-2/12 flex">
              <img src={cari2} className="m-auto" alt="Search Icon" />
            </div>
            <div className="border w-10/12 mx-auto rounded-xl">
              <input
                type="text"
                placeholder="Tujuan"
                className="w-full px-4 rounded-xl py-2"
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-6/12  border">
              <div className="w-2/12 flex w-full h-16">
                <img src={cari3} className="m-auto p-1" alt="Search Icon" />
              </div>
            </div>
            <div className="w-6/12  border">
              <div className="w-2/12 flex w-full h-16">
                <img src={cari4} className="m-auto p-1" alt="Search Icon" />
              </div>
            </div>
          </div>

        
            <RuteFakultas />
        

        </div>
      </div>
      <div className="w-8/12 bg-slate-800 h-screen flex items-center justify-center">
        <img src={map} className="w-full h-full object-cover" alt="Map" />
      </div>
    </div>
  );
};

export default Rute;
