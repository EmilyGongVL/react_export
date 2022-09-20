import { CSVLink } from "react-csv";

const CSVExport = ({data, fileName }) => (
  <CSVLink data={data} filename={fileName}>
    <button variant="success">Export CSV</button>
  </CSVLink>
);

export default CSVExport;