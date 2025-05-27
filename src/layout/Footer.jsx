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
    <footer className="footer">
      <div className="container">
        <div className="contact d-none d-md-flex">
          <address>
            <a href="mailto:alysewang@hexschool.com" className="email">
              alysewang@hexschool.com
            </a>
          </address>
          <ul className="socialMedia">
            {socialMedia.map((socialMedia) => (
              <li>
                <a href={socialMedia.link}>
                  <img
                    src={`${import.meta.env.BASE_URL}${socialMedia.img}`}
                    alt={socialMedia.media}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center copyright">
          © 2025 Alyse Wang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
