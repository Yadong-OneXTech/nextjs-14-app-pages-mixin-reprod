'use client'

import React, { FC, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community'
 // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

export interface AgGridTableProps {}

const AgGridTable: FC<AgGridTableProps> = (props) => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);

  return (
    // wrapping container with theme & size
  <div
  className="ag-theme-quartz" // applying the grid theme
  style={{ height: 500 }} // the grid will fill the size of the parent container
 >
   <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
   />
 </div>
  )
}

export default AgGridTable
