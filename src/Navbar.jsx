//sfc
const Navbar = () => {
    return ( 
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8 bg-primary" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Insani</span>
                        <img class="h-8 w-auto" src="assests/images/logo.png" alt="" />
                    </a>
                </div>
                <div class="flex sm:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden sm:flex sm:gap-x-12">
                    <a href="#" class="text-sm font-semibold leading-6 text-white">Beranda</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white">Tentang</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white">Layanan</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-white">Berita</a>
                </div>

            </nav>
            
        </header>
     );
}
 
export default Navbar;