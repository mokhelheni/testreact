import React from "react"

export default function ExportCsv() {
  const handleExport = (e) => {
    e.preventDefault();
    // get users
    // create CSV
    // open for download
  }
  return <div>
    <button onClick={handleExport}>Export to CSV</button>
  </div>
}