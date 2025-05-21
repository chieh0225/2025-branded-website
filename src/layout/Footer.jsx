const socialMedia = [
  {
    media: "Youtube",
    img: "/images/desktop/index/youtube.png",
    link: "",
  },
  {
    media: "Podcast",
    img: "/images/desktop/index/podcast.png",
    link: "",
  },
  {
    media: "Linkedin",
    img: "/images/desktop/index/linkedin.png",
    link: "",
  },
  {
    media: "Instagram",
    img: "/images/desktop/index/instagram.png",
    link: "",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact d-none d-md-flex">
          <address>
            <a href="alysewang@hexschool.com" className="email">
              alysewang@hexschool.com
            </a>
          </address>
          <div className="socialMedia">
            {socialMedia.map((socialMedia) => (
              <a href={socialMedia.link}>
                <img
                  src={`${import.meta.env.BASE_URL}${socialMedia.img}`}
                  alt={socialMedia.media}
                />
              </a>
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
