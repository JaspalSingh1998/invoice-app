import Sidebar from "./componet/Sidebar/Sidebar.component";

import "./app.scss";
// import Invoices from "./componet/Invoice/Invoice.component";
import ViewInvoice from "./componet/ViewInvoice/ViewInvoice.component";

function App() {
  return (
    <div className="main-wrapper">
      <Sidebar />
      {/* <Invoices /> */}
      <ViewInvoice />
    </div>
  );
}

export default App;
