import MediaIcons from "../components/MediaIcons";
import CardSwiper from "../components/CardSwiper";
import ServiceList from "../components/ServiceList";

const caseData = [
  {
    img: "/images/desktop/index/people.png",
    title: "無經驗到前端工程師 Offer",
    content1: "打造前端專案與履歷亮點",
    content2: "深度強化面試表現",
    podcastUrl: "",
  },
  {
    img: "/images/desktop/index/people2.png",
    title: "轉職迷茫到明確學習規劃",
    content1: "制訂階段性目標與時間安排",
    content2: "鼓勵參與前端社群或活動",
    podcastUrl: "",
  },
  {
    img: "/images/desktop/index/people3.png",
    title: "面試緊張到從容應對",
    content1: "透過面試模擬找出常犯的邏輯漏洞",
    content2: "討論遇到不熟悉議題時的回應方式",
    podcastUrl: "",
  },
  {
    img: "/images/desktop/index/people4.png",
    title: "面試緊張到從容應對",
    content1: "擬定進階框架或技術研究目標",
    content2: "培養跨團隊溝通與簡報能力",
    podcastUrl: "",
  },
];

const socialMedia = [
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

function HomePage() {
  return (
    <main className="homePage">
      <section className="container-fluid px-0 heroSection">
        <div className="row g-0">
          <div className="col-md-6">
            <picture>
              <source
                media="(min-width: 375px)"
                srcSet={`${
                  import.meta.env.BASE_URL
                }/images/desktop/index/heroSection.png`}
              />
              <img
                src={`${
                  import.meta.env.BASE_URL
                }/images/mobile/index/heroSection.png`}
                alt="人物照片"
                className="img-fluid w-100 h-100"
              />
            </picture>
          </div>
          <div className="col-md-6 position-relative heroSection2">
            <div className="position-absolute top-50 start-10 translate-middle-y heroSectionText">
              <h1 className="title">Alyse Wang</h1>
              <p className="about">前端工程師 & 職涯諮詢師</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-end">
            <div className="heroSection3">
              <div className="d-flex flex-column flex-md-row mb-3">
                <p className="mb-md-2">
                  嗨，我是<span className="px-2">Alyse</span>
                </p>
                <p>一名深耕前端技術的工程師。</p>
              </div>

              <p className="mb-3">
                擅長 React、Vue
                等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
              </p>
              <MediaIcons />
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <h2 className="sectionHeading">專業服務與方案</h2>
          <ServiceList />
          <a href="#" className="getInfo">
            <p>聯繫我，取得更多資訊！</p>
            <i className="bi bi-arrow-right d-flex"></i>
          </a>
        </div>
      </section>

      <section className="blogFeatured">
        <div className="feature-wrapper mx-auto">
          <div className="container">
            <div>
              <h2 className="sectionHeading">部落格精選</h2>
              <CardSwiper />
            </div>
            <div className="swiper-button-wrapper">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="successCases">
        <div className="container">
          <h2 className="sectionHeading">
            <span>職涯諮詢</span>
            <span>成功案例</span>
          </h2>
          <div className="d-flex gap-4 caseTop-outer-wrapper">
            <div className="column-custom-7 w-100">
              <div className="img-wrapper h-100">
                <picture>
                  <source
                    media="(min-width: 375px)"
                    srcSet={`${
                      import.meta.env.BASE_URL
                    }/images/desktop/index/photo8.png`}
                  />
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }/images/mobile/index/photo8.png`}
                    alt="人物圖片"
                    className="img-fluid object-fit-cover w-100 h-100"
                  />
                </picture>
              </div>
            </div>
            <div className="column-custom-5 w-100 d-flex flex-column content-wrapper">
              <div className="d-flex flex-column gap-4 w-100 h-100 contentTop-wrapper">
                <i className="bi bi-dash-lg"></i>
                <p className="fw-bolder">
                  在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
                  <span className="text-primary">突破原有的舒適圈</span>。
                </p>
              </div>
              <div className="d-flex flex-column gap-4 align-items-start w-100 h-100 contentBottom-wrapper">
                <i className="bi bi-dash-lg"></i>
                <p className="fw-bolder">
                  期待在下一個新機會中，我能與你一起攜手邁向更高峰！
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary fw-bolder"
                >
                  立即預約諮詢
                </button>
              </div>
            </div>
          </div>

          <div className="caseBottom-outer-wrapper">
            <ul className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 row-gap-4 caseList">
              {caseData.map((item, i) => (
                <li className="col" key={i}>
                  <div className="caseInfo">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.img}`}
                      alt="人物圖片"
                    />
                    <div className="text py-3 mb-3">
                      <h3 className="fs-4 fw-bolder mb-2">{item.title}</h3>
                      <ul className="d-flex flex-column gap-2">
                        <li>
                          <span className="pe-2">
                            <i className="bi bi-check-square-fill"></i>
                          </span>
                          {item.content1}
                        </li>
                        <li>
                          <span className="pe-2">
                            <i className="bi bi-check-square-fill"></i>
                          </span>
                          {item.content2}
                        </li>
                      </ul>
                    </div>
                    <a
                      href={item.podcastUrl}
                      className="btn btn-main align-self-start"
                    >
                      前往聆聽 podcast
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="emailSubscribe">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-md-6">
              <picture>
                <source
                  media="(max-width: 375px)"
                  srcSet={`${
                    import.meta.env.BASE_URL
                  }/images/mobile/index/photo9.png`}
                />
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }/images/desktop/index/photo9.png`}
                  alt="人物照片"
                  className="h-100 w-100 img-fluid object-fit-cover"
                />
              </picture>
            </div>
            <div className="col-md-6">
              <div className="d-flex h-100 emailSubscribeBg">
                <div className="emailSubscribeText my-auto mx-auto">
                  <h2 className="sectionHeading mb-3">訂閱電子報</h2>
                  <p className="fs-5 mb-4">
                    立即訂閱，搶先掌握
                    <span className="highlight">前端 x 職涯</span>的獨家資訊！
                  </p>
                  <form>
                    <input
                      type="text"
                      className="form-control fs-5 mb-2"
                      placeholder="請輸入您的大名"
                      required
                    />
                    <input
                      type="email"
                      className="form-control fs-5 mb-4"
                      placeholder="請輸入您的電子信箱"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-primary fw-bolder"
                    >
                      啟動訂閱
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contactMe">
        <div className="container">
          <h2 className="sectionHeading">與我聯繫</h2>
          <address>
            <a
              href="mailto:alysewang@hexschool.com"
              className="email addressContent"
            >
              <div className="text-wrapper">
                <span className="text-decoration-underline">
                  alysewang@hexschool.com
                </span>
                <span className="text">合作洽談</span>
              </div>

              <span>
                <i className="bi bi-arrow-right d-flex"></i>
              </span>
            </a>
          </address>
          <ul className="socialMedia">
            {socialMedia.map((socialMedia, i) => (
              <li className="d-flex" key={i}>
                <a href={socialMedia.link} className="mediaLink">
                  <div className="mediaInfo">
                    <img
                      src={`${import.meta.env.BASE_URL}${socialMedia.img}`}
                      alt={socialMedia.media}
                    />
                    <span>{socialMedia.media}</span>
                    <span>{socialMedia.text}</span>
                  </div>

                  <span>
                    <i className="bi bi-arrow-right d-flex"></i>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
