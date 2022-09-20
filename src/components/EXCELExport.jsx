import { downloadExcel } from "react-export-table-to-excel";


// Excel export function
export default function EXCELExport(props) {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: "react_excel",
      sheet: "sheet 1",
      tablePayload: {
        header: props.header,
        body: props.body,
      },
    });
  }
  return (
    <button onClick={handleDownloadExcel}> EXCEL EXPORT</button>
  )
}
