import logo from "./assets/logo1.JPG";
function Header() {
  return (
    <header className="Header">
        <div className="HeaderTop">
          <img src={logo} alt="Glide and Go Safaris Logo" className="LogoImage" />
        </div>
      <h1 className="Heading">GLIDE AND GO SAFARIS</h1>
        
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <p className="Synopsis">
        Experience the thrill of adventure with Glide and Go Safaris. Join us for unforgettable trips and explore the beauty of nature.
        At Glide and Go Safaris, we are dedicated to providing you with the best safari experiences. Our team of experts ensures that every trip is safe, enjoyable, and memorable.
      </p>

    </header>
  );
}

export default Header;