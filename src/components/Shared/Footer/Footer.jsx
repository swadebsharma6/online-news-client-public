import logo from '../../../assets/contact/one.png';

const Footer = () => {
  return (
    <section className="mb-2">
    <footer className="footer grid-rows-2 p-10 bg-neutral rounded-t-xl text-neutral-content">
   <div>
    <img className='w-60 h-60 rounded-full' src={logo} alt="" />
   </div>
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <header className="footer-title">Legal</header> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav> 
    <nav>
      <header className="footer-title">Social</header> 
      <a className="link link-hover">Twitter</a>
      <a className="link link-hover">Instagram</a>
      <a className="link link-hover">Facebook</a>
      <a className="link link-hover">Github</a>
    </nav> 
    <nav>
      <header className="footer-title">Explore</header> 
      <a className="link link-hover">Features</a>
      <a className="link link-hover">Enterprise</a>
      <a className="link link-hover">Security</a>
      <a className="link link-hover">Pricing</a>
    </nav> 
    <nav>
      <header className="footer-title">Apps</header> 
      <a className="link link-hover">Mac</a>
      <a className="link link-hover">Windows</a>
      <a className="link link-hover">iPhone</a>
      <a className="link link-hover">Android</a>
    </nav>
  </footer>
      <div className="footer footer-center p-4 bg-primary text-base-content text-white">
          <aside>
            <p>Copyright © 2023 - All right reserved by One!1 NEWS Ltd</p>
          </aside>
        </div>
    </section>
  );
};

export default Footer;
