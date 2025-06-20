function Pagination() {
  return (
    <nav aria-label="pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <span className="page-link">
            <i className="bi bi-chevron-left"></i>
          </span>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item" aria-current="page">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            ...
          </a>
        </li>
        <li className="page-item">
          <span className="page-link">
            <i className="bi bi-chevron-right"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
