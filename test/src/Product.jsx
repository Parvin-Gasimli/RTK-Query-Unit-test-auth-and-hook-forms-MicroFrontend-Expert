import React, { useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },

  {
    firstName: "John",
    lastName: "Doe",
    company: "John Doe LLC",
    city: "New York",
    country: "USA",
    age: 30,
    id: 21,
  },
];

//defining columns outside of the component is fine, is stable
const columns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 40,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    size: 120,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    size: 120,
  },
  {
    accessorKey: "company",
    header: "Company",
    size: 300,
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
    size: 220,
  },
  {
    accessorKey: "country",
    header: "Country",
    size: 220,
  },
];

const csvOptions = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

const Example = () => {
  const [progress, setProgress] = useState(0);

  //simulate random progress for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.random() * 20;
        return Math.min(oldProgress + newProgress, 100);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      positionToolbarAlertBanner="bottom"
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{ display: "flex", gap: "1rem", p: "0.5rem", flexWrap: "wrap" }}
        >
          <Button
            color="primary"
            //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
            onClick={handleExportData}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Data
          </Button>
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Rows
          </Button>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Page Rows
          </Button>
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Selected Rows
          </Button>
        </Box>
      )}
    />
  );
};

export default Example;
