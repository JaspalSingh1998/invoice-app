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
      <div className="invoice-details">
        <div className="row">
          <div className="invoiceId">
            <h2>#RT3080</h2>
            <p>Re-branding</p>
          </div>
          <div className="address">
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="row">
          <div className="invoice__date">
            <div>
              <p className="details">Invoice Date</p>
              <h2 className="heading">18 Aug 2021</h2>
            </div>
            <div>
              <p className="details">Payment Due</p>
              <h2 className="heading">19 Aug 2021</h2>
            </div>
          </div>
          <div className="billTo">
            <p className="details">Bill To</p>
            <h2 className="heading">Jensen Huang</h2>
            <p className="details">106 Kendell Street</p>
            <p className="details">Sharringtont</p>
            <p className="details">NR24 5WQ</p>
            <p className="details">United Kingdom</p>
          </div>
          <div className="sentTo">
            <p className="details">Sent To</p>
            <h2 className="heading">jensenh@mail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoice;
