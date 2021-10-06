import ArrowDown from "../../assets/icon-arrow-down.svg";
import AddButton from "../../assets/icon-plus.svg";
import "./Invoice.styles.scss";

function Invoices() {
  return (
    <div class="wrapper">
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
    </div>
  );
}

export default Invoices;
