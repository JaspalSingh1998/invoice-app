import Sidebar from "./componet/Sidebar/Sidebar.component";

import "./app.scss";
import Invoices from "./componet/Invoice/Invoice.component";

function App() {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <Invoices />
    </div>
  );
}

export default App;
