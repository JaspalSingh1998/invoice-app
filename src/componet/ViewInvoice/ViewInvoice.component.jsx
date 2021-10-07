import BackArrow from "../../assets/icon-arrow-left.svg";
import "./ViewInvoice.styles.scss";

function ViewInvoice() {
  return (
    <div className="wrapper">
      <div className="back-wrapper">
        <img src={BackArrow} alt="Go Back To Homepage" />{" "}
        <span className="back-btn">Go Back</span>
      </div>
      <div className="invoice-options">
        <div className="invoice-status">
          <span className="status__title">Status</span>
          <span className="status_type pending">Pending</span>
        </div>
        <div className="invoice-actions">
          <button className="btn edit">Edit</button>
          <button className="btn delete">Delete</button>
          <button className="btn mpaid">Mark as Paid</button>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoice;
