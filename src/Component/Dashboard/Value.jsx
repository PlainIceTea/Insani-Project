import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import value3 from "../../assets/images/value3.png";
import { Link } from 'react-router-dom'; 
const Value = () => {
  return (
    <div className="md:flex py-10 px-5 w-10/12 mx-auto font-montserrat">
      <div className="flex-row self-center  ">
        <div className="text-3xl font-bold w-fit mx-auto md:mx-0 md:w-full">
          Value Website
        </div>
        <div className="w-6/12 mx-auto md:mx-0  text-center md:text-justify">
          nilai-nilai yang selalu dipegang teguh untuk memberikan manfaat dan
          pengalaman yang optimal kepada pengguna
        </div>
      </div>
      <div className="flex-row">
        <div class="container flex box shadow pl-5 pr-5 py-5 max-w-xl m-5">
          <img src={value1} class="h-20 self-center" />
          <div class="">
            <h1 class="text-xl font-medium ">Inklusi</h1>
            <p class="text-sm">
              Website INSAN menekankan pentingnya inklusi, yaitu menciptakan
              lingkungan yang ramah dan mendukung bagi semua
            </p>
            <Link to='/tentang'>
            <button class="py-1 px-2 shadow bg-orange-200 mt-3 rounded-md text-xs hover:bg-orange-300 active:bg-orange-500 duration-200">
              Baca Selengkapnya
            </button>
            </Link>
          </div>
        </div>
        <div class="container flex box shadow pl-5 pr-5 py-5 max-w-xl m-5">
          <img src={value2} class="h-20 self-center" />
          <div class="">
            <h1 class="text-xl font-medium ">Aksesibilitas</h1>
            <p class="text-sm">
              Aksesibilitas adalah nilai utama INSAN, yang berfokus pada
              memastikan bahwa semua orang dapat mengakses informasi dan layanan
              yang disediakan
            </p>
            <Link to='/tentang'>
            <button class="py-1 px-2 shadow bg-orange-200 mt-3 rounded-md text-xs hover:bg-orange-300 active:bg-orange-500 duration-200">
              Baca Selengkapnya
            </button>
            </Link>
          </div>
        </div>
        <div class="container flex box shadow pl-5 pr-5 py-5 max-w-xl m-5">
          <img src={value3} class="h-20 self-center" />
          <div class="">
            <h1 class="text-xl font-medium ">Empowerment</h1>
            <p class="text-sm">
              INSAN berupaya untuk memberdayakan penyandang disabilitas dengan
              menyediakan informasi, dukungan, dan bimbingan yang mereka
              butuhkan.
            </p>
            <Link to='/tentang'>
            <button class="py-1 px-2 shadow bg-orange-200 mt-3 rounded-md text-xs hover:bg-orange-300 active:bg-orange-500 duration-200">
              Baca Selengkapnya
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
