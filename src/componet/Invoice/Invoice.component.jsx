import ArrowDown from "../../assets/icon-arrow-down.svg";
import AddButton from "../../assets/icon-plus.svg";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import "./Invoice.styles.scss";

function Invoices() {
  return (
    <div className="wrapper">
      <div className="invoice__header">
        <div className="header__title">
          <h2 className="title">Invoices</h2>
          <p className="subtitle">There are Total 7 invoices</p>
        </div>
        <div className="header__options">
          <div className="option filter-options">
            <h3>Filter by status</h3>
            <img src={ArrowDown} alt="select" />

            <ul className="options">
              <li>All</li>
              <li>Paid</li>
              <li>Pending</li>
              <li>Draft</li>
            </ul>
          </div>
          <div className="option new-options">
            <div className="btn-box">
              <img src={AddButton} alt="Add New Invoice" />
            </div>
            <h3>New Invoice</h3>
          </div>
        </div>
      </div>
      <div className="invoices-list">
        <div className="invoice">
          <div className="invoice__id">
            <h3>
              <span>#</span>
              RT3080
            </h3>
          </div>
          <div className="date-wrapper">
            <p className="date">Due 19 Aug 2021</p>
          </div>
          <div className="name-wrapper">
            <h4 className="name">Jaspal Singh</h4>
          </div>
          <div className="price-wrapper">
            <h2 className="price">£ 1,800.90</h2>
          </div>
          <div className="status-wrapper">
            <div className="status paid">
              <p>Paid</p>
            </div>
            <span>
              <img src={ArrowRight} alt="View Invoice" className="view" />
            </span>
          </div>
        </div>
        <div className="invoice">
          <div className="invoice__id">
            <h3>
              <span>#</span>
              RT3080
            </h3>
          </div>
          <div className="date-wrapper">
            <p className="date">Due 19 Aug 2021</p>
          </div>
          <div className="name-wrapper">
            <h4 className="name">Jaspal Singh</h4>
          </div>
          <div className="price-wrapper">
            <h2 className="price">£ 1,800.90</h2>
          </div>
          <div className="status-wrapper">
            <div className="status pending">
              <p>Pending</p>
            </div>
            <span>
              <img src={ArrowRight} alt="View Invoice" className="view" />
            </span>
          </div>
        </div>
        <div className="invoice">
          <div className="invoice__id">
            <h3>
              <span>#</span>
              RT3080
            </h3>
          </div>
          <div className="date-wrapper">
            <p className="date">Due 19 Aug 2021</p>
          </div>
          <div className="name-wrapper">
            <h4 className="name">Jaspal Singh</h4>
          </div>
          <div className="price-wrapper">
            <h2 className="price">£ 1,800.90</h2>
          </div>
          <div className="status-wrapper">
            <div className="status draft">
              <p>Draft</p>
            </div>
            <span>
              <img src={ArrowRight} alt="View Invoice" className="view" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
