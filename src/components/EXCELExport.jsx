import * as XLSX from 'xlsx'

export default function EXCELExport(props) {
const exportToExcel = () => {
  const wb = XLSX.utils.book_new(),
  ws = XLSX.utils.aoa_to_sheet(props.data);
  XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  XLSX.writeFile(wb, "MyExcel.xlsx");
}
  return (
    <button onClick={exportToExcel}>Excel</button>
  )
}
