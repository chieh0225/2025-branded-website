const services = [
  {
    title: "履歷健檢",
    description:
      "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
    img: "/images/desktop/index/photo.png",
  },
  {
    title: "線上諮詢",
    description:
      "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
    img: "/images/desktop/index/photo2.png",
  },
  {
    title: "網頁開發",
    description:
      "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
    img: "/images/desktop/index/photo3.png",
  },
  {
    title: "企業內訓",
    description:
      "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
    img: "/images/desktop/index/photo4.png",
  },
];

function ServiceList() {
  return (
    <ul className="serviceList list">
      {services.map((item, index) => {
        const isReverse = index % 2 === 1;
        const itemClass = `list-item ${
          isReverse ? "list-item-reverse" : "list-item-row"
        }`;

        return (
          <li className={itemClass} key={index}>
            <div className="list-img">
              <img
                src={`${import.meta.env.BASE_URL}${item.img}`}
                alt={item.title}
                className="w-100"
              />
            </div>
            <div className="list-text">
              <i className="bi bi-dash-lg"></i>
              <h3 className="list-title">{item.title}</h3>
              <p className="list-description">{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ServiceList;
