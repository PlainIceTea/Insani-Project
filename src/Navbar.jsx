import logo from "./assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Tentang</a>
            </li>
            <li>
              <a>Layanan</a>
              <ul className="p-2 text-black">
                <li>
                  <a>Informasi Fasilitas</a>
                </li>
                <li>
                  <a>Rute Fasilitas</a>
                </li>
                <li>
                    <a>Fasilitas Penerjemah</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Berita</a>
            </li>
          </ul>
        </div>
        <img src={logo} className="h-10" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Beranda</a>
          </li>
          <li>
            <a>Tentang</a>
          </li>
          <li>
            <details>
              <summary>Layanan</summary>
              <ul className="p-2 text-black">
              <li>
                  <a>Informasi Fasilitas</a>
                </li>
                <li>
                  <a>Rute Fasilitas</a>
                </li>
                <li>
                    <a>Fasilitas Penerjemah</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Berita</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

      </div>
    </div>
  );
};

export default Navbar;
