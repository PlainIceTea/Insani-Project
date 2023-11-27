import filkom from "../assets/images/filkom.png";

const fakultas = [
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
  },
  {
    nama: "FILKOM",
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
                <img src={filkom} alt="" className="mx-auto rounded-xl" />
                <div className="w-fit mx-auto font-bold mt-2">{item.nama}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between mt-5">
          <div className="w-fit border-2 border-black rounded-lg">
            <button className="px-12 py-2 text-black font-bold">Kembali</button>
          </div>
          <div className="w-fit bg-black rounded-lg">
            <button className="px-12 py-2 text-white font-bold">Cari</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PilihFakultas;
