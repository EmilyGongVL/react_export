import {utils, writeFile} from 'xlsx'

export default function EXCELExport(props) {
const exportToExcel = () => {
  const wb = utils.book_new(),
  ws = utils.aoa_to_sheet(props.data);
  utils.book_append_sheet(wb, ws, "MySheet1");
  writeFile(wb, "MyExcel.xlsx");
}
  return (
    <button onClick={exportToExcel}>Excel</button>
  )
}
