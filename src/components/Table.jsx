import React from 'react'

const Table = React.forwardRef((props, ref) => {
  return (
    <div className="table" ref={ref}>
      <table>
        <thead>
          <tr className="fs-14">
            {props.heading.map((head) => (
              <th key={head}>{head}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((i) => (
            <tr className="fs-12">
              {i.items.map((item) => (
                <>
                  <td>{item}</td>
                </>
              ))}
              <td className="center">
               <button> Edite </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Table;

