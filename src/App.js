import './App.css';
import { useRef } from 'react';
import Table from './components/Table';
import {data} from "./dummyData"
import CSVExport from './components/CSVExport';
import EXCELExport from './components/EXCELExport';
import ReactToPrint from 'react-to-print';
import CopyToClipboard from './components/CopyToClipboard';

const header = ["ID", "Name", "Type", "Dob", "Mobile", "Email"];
const body = data.map((i) => {return i.items})
const dataArray = [header, ...body];

function App() {
  const componentRef = useRef();
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "flex", gap: "5px", margin: "10px"}}>
          <EXCELExport data={dataArray} />
          <CSVExport
            data={dataArray}
            fileName="react_csv.csv"
          />
          <ReactToPrint
            trigger={() => <button>PDF EXPORT / PRINT</button>}
            content={() => componentRef.current}
          />
          <CopyToClipboard data={dataArray}/>
        </div>
        <Table ref={componentRef} heading={header} data={data}/>
      </header>
    </div>
  );
}

export default App;
