import asti from "../assets/images/asti.png";
import nisput from "../assets/images/nisput.png";
import eufra from "../assets/images/eufra.png";

const pendiri = [
  {
    gambar: asti,
    nama: "Asti Syafitri",
  },
  {
    gambar: nisput,
    nama: "Anisa Putri",
  },
  {
    gambar: eufra,
    nama: "Brigita Mery",
  },
];

const Tentang = () => {
  return (
    <>
      <div className="w-10/12 mx-auto py-20 font-montserrat">
        <div className="text-3xl font-bold mb-5">Tentang Insan</div>
        <div className="text-justify text-lg">
          Kami adalah komunitas yang bersatu untuk memajukan inklusi dan
          aksesibilitas bagi penyandang disabilitas. Sebagai platform yang
          didedikasikan untuk memberikan informasi, bimbingan, dan dukungan,
          kami bertekad untuk menciptakan dunia di mana setiap individu, tanpa
          memandang latar belakang atau kondisi fisik, memiliki kesempatan yang
          sama untuk bersinar.
        </div>
        <div className="text-xl font-bold mb-2 mt-10">Visi</div>
        <div className="text-justify text-lg">
          Visi kami adalah menciptakan masyarakat yang sepenuhnya inklusif, di
          mana setiap individu, termasuk penyandang disabilitas, memiliki
          kesempatan yang sama untuk berpartisipasi, berkembang, dan
          berkontribusi tanpa hambatan. Kami bermimpi tentang dunia yang
          mengakui keberagaman sebagai kekayaan, bukan sebagai hambatan.
        </div>
        <div className="text-xl font-bold mb-2 mt-10">Misi</div>
        <div className="text-justify text-lg mb-1">
          1. Memberikan aksesibilitas informasi yang lebih baik bagi penyandang
          disabilitas melalui teknologi.
        </div>
        <div className="text-justify text-lg mb-1">
          2. Memberdayakan penyandang disabilitas untuk mencapai potensi penuh
          dan terlibat aktif dalam masyarakat.
        </div>
        <div className="text-justify text-lg mb-1">
          3. Mendorong kesadaran dan pemahaman tentang isu-isu disabilitas di
          kalangan masyarakat umum.
        </div>
        <div className="text-justify text-lg mb-1">
          4. Berkolaborasi dengan organisasi dan lembaga untuk membangun
          ekosistem inklusi yang lebih luas.
        </div>
        <div className="mt-10">
          <div className="text-xl font-bold mb-2 mt-10 w-fit mx-auto">
            Pendiri
          </div>
          <div className="w-6/12 mx-auto flex mt-5">
            {pendiri.map((index, i) => (
              <div className="w-4/12" key={i}>
                <div className="w-11/12">
                  <img src={index.gambar} alt="" className="mx-auto" />
                  <div className="mx-auto w-fit">{index.nama}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tentang;
