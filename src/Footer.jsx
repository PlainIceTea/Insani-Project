import logo from './assets/images/logo.png';
const Footer = () => {
    return ( 
        <footer className="footer p-10 bg-primary  text-white">
        <aside>
          <img src={logo} className='h-10' />
          <p>eufrajayawijaya Ltd.<br/>Kelompok 11</p>
        </aside> 
        <nav >
          <header className="footer-title">INSAN</header> 
          <a className="link link-hover">Tentang</a>
          <a className="link link-hover">Kerjasama</a>
    
        </nav> 
        <nav>
          <header className="footer-title">Bantuan dan Panduan</header> 
          <a className="link link-hover">Layanan Pengaduan</a>
          <a className="link link-hover">Syarat dan Ketentuan</a>
          <a className="link link-hover">Bantuan</a>
        </nav> 
        <nav>
          <header className="footer-title">Hubungi kami</header> 
          <a className="link link-hover">Alamat : Jalan Veteran Malang</a>
          <a className="link link-hover">Telepon : (+62)341 - 234567</a>
          <a className="link link-hover">Email: insan@gmail.com</a>
        </nav>
      </footer>
     );
}
 
export default Footer;