import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

function Waumini() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 3,
    maxColumns: 3,
  });
  console.log(data);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <div className="d-flex h-100">
        <div style={{ flexGrow: 1 }}>
          <DataGrid {...data} />
        </div>
      </div>
    </div>
  );
}

export default Waumini;
