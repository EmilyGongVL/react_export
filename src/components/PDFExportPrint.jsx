import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { data } from '../dummyData';

export default function PDFExportPrint() {
  const componentdef = useRef();
  const header = ["ID", "Name", "Type", "Dob", "Mobile", "Email"];
  const body = data.map((i) => {return i.items})

  const handlePrint = useReactToPrint({
    content: () => componentdef.current,
    documentTitle: "MyPDF"
  });
  return (
    <>
      <div style={{display: "none"}}>
        <div ref={componentdef}>
          <h1 style={{color: "pink"}} >Location data</h1>
          <table>
            <thead>
              <tr>
                {header.map(i => <td key={i}>{i}</td>)}
              </tr>
            </thead>
            <tbody>
              {body.map(bodyRow => (
                <tr>
                  {bodyRow.map(cell => <td key={cell}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  )
}
