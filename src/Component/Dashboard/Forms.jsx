const Forms = () => {
  return (
    <div className=" bg-secondary font-montserrat">
      <div className="w-10/12 py-10 mx-auto flex flex-wrap">
        <div className="w-5/12 my-auto">
          <div className="w-11/12 py-3 px-2">
            <div className="text-3xl font-bold">
              Rekrutmen Relawan Pendamping Disabilitas Universitas Brawijaya
            </div>
            <div className="py-3">
              Jadilah bagian dari komunitas relawan pendamping disabilitas dari
              Pusat Layanan Disabilitas Universitas Brawijaya
            </div>
            <a href="https://pld.ub.ac.id/en/services/volunteer/">
                <button className=" active:bg-slate-600  px-12 py-2 text-white bg-black rounded-xl hover:opacity-60 active:bg-slate-700 duration-200">
              Daftar
            </button>
            </a>
          </div>
        </div>
        <div className="w-7/12 ">
          <div className="w-11/12 py-3 px-2">
            <div className="text-3xl font-bold w-fit mx-auto">Hubungi kami</div>
            <div className="w-fit mx-auto">
              Punya pertanyaan atau butuh bantuan?
            </div>
            <div class="border border-slate-200 rounded-xl mx-auto  p-5 ">
              <div className="mb-5">
                <div for="form">
                  <span class="block font-bold text-slate-700 text-sm">
                    Nama
                  </span>
                </div>
                <input
                  type="form"
                  id="form"
                  placeholder="Masukkan nama Anda"
                  className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary "
                />
                <div className="text-xs text-slate-500 my-2">
                  Nama lengkap Anda
                </div>
              </div>

              <div className="mb-5">
                <div for="form">
                  <span class="block font-bold text-slate-700 text-sm">
                    Email
                  </span>
                </div>
                <input
                  type="form"
                  id="form"
                  placeholder="Masukkan email Anda"
                  className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary "
                />
                <div className="text-xs text-slate-500 my-2">
                  Alamat email anda
                </div>
              </div>

              <div className="mb-5">
                <div for="form">
                  <span class="block font-bold text-slate-700 text-sm">
                    Pesan
                  </span>
                </div>
                <input
                  type="form"
                  id="form"
                  placeholder="Masukkan pesan Anda"
                  className="px-3 pt-3 py-10 border shadow rounded placeholder:mb-auto w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary "
                />
                <div className="text-xs text-slate-500 my-2">Pesan Anda</div>
                <div className="w-full flex ">
                <button className="mx-auto active:bg-slate-600  px-12 py-2 text-white bg-black rounded-xl hover:opacity-60 active:bg-slate-700 duration-200">
              Mengirim pesan
            </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
