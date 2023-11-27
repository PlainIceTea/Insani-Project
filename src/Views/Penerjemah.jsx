import rekam1 from "../assets/images/rekam1.png";
import pause from "../assets/images/pause.png";
import stop from "../assets/images/stop.png";
const Penerjemah = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto py-10">
        <div className="text-3xl font-bold w-fit mx-auto">
          Fasilitas Penerjemah
        </div>
        <div className="w-fit mx-auto">
          Dapatkan kemudahan untuk belajar, dengan fitur AI
        </div>
        <div className="rounded-full bg-primary w-fit mx-auto my-10 p-5 ">
          <img src={rekam1} />
        </div>
        <div className="w-fit mx-auto font-bold text-xl">Rekam Suaramu</div>
        <div className="flex w-3/12 justify-between mx-auto">
          <div>
            <div className="rounded-full mask mask-circle flex bg-primary w-fit mx-auto mt-10 p-5 ">
              <img src={pause} className="my-auto w-[40px]" />
            </div>
            <div className="mx-auto w-fit mt-2">Pause</div>
          </div>
          <div>
            <div className="rounded-full mask mask-circle flex bg-primary w-fit mx-auto mt-10 p-5 ">
              <img src={stop} className="my-auto w-[40px]" />
            </div>
            <div className="mx-auto w-fit mt-2">Stop</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penerjemah;
