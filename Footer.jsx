function Footer() {
    return (
        
            <div className="Footer">
                <p className="FooterText">
                    &copy; {new Date().getFullYear()} Glide and Go Safaris. All rights reserved.
                </p>
                <p className="FooterText">Follow us on:</p>
                <ul className="SocialLinks">
                    <li><a href="https://www.facebook.com/glideandgosafaris" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/glideandgosafaris" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com/glideandgosafaris" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.tiktok.com/company/glideandgosafaris" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
                </ul>
            </div>
        
    );
}

export default Footer;  // 