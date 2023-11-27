import berita1 from "../../assets/images/berita1.png";
import berita2 from "../../assets/images/berita2.png";
import berita3 from "../../assets/images/berita3.png";
import berita4 from "../../assets/images/berita4.png";
const data = [
  {
    gambar: berita1,
    header: "UB Juara Umum MTQMN XVII 2023",
    tanggal: "09/11/2023",
    text: "Universitas Brawijaya (UB) menjadi juara umum dalam Musabaqoh Tilawatil Qur’an Mahasiswa Tingkat Nasional ke XVII. Pengumuman tersebut dibacakan oleh Ketua Dewan Hakim MTQMN Prof. KH Said Agil Husein Al ...",
  },
  {
    gambar: berita2,
    header: "Supporter Disabilitas Kagumi Fasilitas Stadion GBT Surabaya",
    tanggal: "11/11/2023",
    text: "Salah seorang suporter penyandang disabilitas asal Jember Wiviano Rizky mengaku senang dan kagum datang ke Stadion Gelora Bung Tomo Surabaya, untuk melihat ...",
  },
  {
    gambar: berita3,
    header:
      "Mahasiswa Difabel Baru Ikuti Sosialisasi Beasiswa dan Layanan Inklusif di UB",
    tanggal: "22/08/2023",
    text: "Subdirektorat Layanan Disabilitas Universitas Brawijaya mensosialisasikan layanan dan beasiswa bagi mahasiswa difabel yang baru diterima pada 2023 ini. Kegiatan ini ...",
  },
  {
    gambar: berita4,
    header: "Riung Inklusif 2023 Fokus pada Kemandirian Mahasiswa",
    tanggal: "09/10/2023",
    text: "Rangkaian Riung Inklusif 2023 terdiri dari penyajian materi SWOT, sharing alumni, aktivitas kelompok, dan outbound. Pada materi SWOT, peserta turut langsung menganalisis ...",
  },
];
const Berita = () => {
  return (
    <div>
        <div className="w-10/12 mx-auto ">
        <div className="text-3xl font-bold">Berita Terbaru</div>
        <div className="py-2">Berita terkini seputar Universitas Brawijaya dan Disabilitas</div>
        </div>
    <div className="w-10/12 py-10 flex flex-wrap mx-auto">
        
      {data.map((item, i) => (
        <div className="w-6/12 my-5 mx-auto" key={i}>
          <div className="w-11/12 border py-5 px-2 rounded-xl flex mx-auto">
            <img
              src={item.gambar}
              alt=""
              className="h-20 flex self-center pr-10"
            />
            <div>
              <div class="text-xl font-medium ">{item.header}</div>
              <div>{item.tanggal}</div>
              <div class="text-sm">{item.text}</div>
              <button class="py-1 px-2 shadow bg-orange-200 mt-3 rounded-md text-xs">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Berita;
