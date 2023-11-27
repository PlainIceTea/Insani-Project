import logo from "../../assets/images/biglogo.jpg";

const Desc = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-9/12 mx-auto flex font-montserrat justify-between py-10">
          <img src={logo} alt="" />
          <div className="w-8/12">
            <div className="text-3xl font-bold">Apa itu INSAN?</div>
            <div className="mt-5 text-justify">
              Website "INSAN" memiliki tujuan utama untuk mempromosikan inklusi
              dan aksesibilitas bagi penyandang disabilitas, berkomitmen
              memberikan informasi, fitur bantuan, dan dukungan untuk mewujudkan
              masyarakat yang lebih inklusif dan ramah disabilitas.
              Aksesibilitas dalam konteks website ini mengacu pada usaha untuk
              memastikan bahwa semua orang, termasuk penyandang disabilitas,
              dapat mengakses informasi dan layanan dengan mudah.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
