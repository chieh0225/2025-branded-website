const mediaList = [
  {
    media: "Youtube",
    img: "/images/desktop/index/youtube.png",
    link: "",
    text: "職涯諮詢室",
  },
  {
    media: "Podcast",
    img: "/images/desktop/index/podcast.png",
    link: "",
    text: "職涯諮詢室",
  },
  {
    media: "Facebook",
    img: "/images/desktop/index/facebook.png",
    link: "",
    text: "前端社群",
  },
  {
    media: "Linkedin",
    img: "/images/desktop/index/linkedin.png",
    link: "",
    text: "職涯交流",
  },
  {
    media: "Instagram",
    img: "/images/desktop/index/instagram.png",
    link: "",
    text: "日常分享",
  },
];

function MediaIcons() {
  return (
    <ul className="mediaIcons d-flex">
      {mediaList.map((mediaList, i) => (
        <li className="d-flex" key={i}>
          <a href={mediaList.link} className="mediaLink">
            <div className="mediaInfo">
              <img
                src={`${import.meta.env.BASE_URL}${mediaList.img}`}
                alt={mediaList.media}
              />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MediaIcons;
