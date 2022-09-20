import { CSVLink } from "react-csv";

const CSVExport = ({csvData, fileName }) => (
  <CSVLink data={csvData} filename={fileName}>
    <button variant="success">Export CSV</button>
  </CSVLink>
);

export default CSVExport;