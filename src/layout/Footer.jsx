const socialMedia = [
  {
    media: "Youtube",
    img: "/images/desktop/index/youtube.png",
  },
  {
    media: "Podcast",
    img: "/images/desktop/index/podcast.png",
  },
  {
    media: "Linkedin",
    img: "/images/desktop/index/linkedin.png",
  },
  {
    media: "Instagram",
    img: "/images/desktop/index/instagram.png",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact">
          <address>
            <a href="alysewang@hexschool.com" className="email">
              alysewang@hexschool.com
            </a>
          </address>
          <div className="socialMedia">
            {socialMedia.map((socialMedia) => (
              <img
                src={`${import.meta.env.BASE_URL}${socialMedia.img}`}
                alt={socialMedia.media}
              />
            ))}
          </div>
        </div>
        <p className="text-center copyright">
          © 2025 Alyse Wang. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
