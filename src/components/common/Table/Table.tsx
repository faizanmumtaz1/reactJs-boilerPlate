import DataTable, { TableColumn } from "react-data-table-component";
import { Box, Chip } from "@mui/material";
import "./table.scss";
import DashboardChip from "../CustomChip/CustomChip";
interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  progressPending?: boolean;
  pagination?: boolean;
  paginationPerPage?: number;
  paginationRowsPerPageOptions?: number[];
  selectableRows?: boolean;
  onSelectedRowsChange?: (selected: { selectedRows: T[] }) => void;
  onSort?: (column: TableColumn<T>, sortDirection: string) => void;
  customStyles?: any;
  className?: string;
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Mild":
      return "warning";
    case "Moderate":
      return "success";
    case "Severe":
      return "error";
    default:
      return "default";
  }
};

// Helper function to render severity chip
const renderSeverityChip = (severity: string) => {
  return (
    <DashboardChip
      label={severity}
      size="small"
      rounded={true}
      color={getSeverityColor(severity)}
    />
  );
};

const Table = <T extends object>({
  columns,
  data,
  progressPending = false,
  pagination = true,
  paginationPerPage = 10,
  paginationRowsPerPageOptions = [10, 20, 30, 50],
  selectableRows = false,
  onSelectedRowsChange,
  onSort,
  customStyles,
  className,
}: TableProps<T>) => {
  // Transform columns to handle severity chip rendering
  const transformedColumns = columns.map((column) => {
    if (
      column.selector &&
      typeof column.selector === "function" &&
      typeof column.name === "string" &&
      column.name.toLowerCase().includes("severity")
    ) {
      return {
        ...column,
        cell: (row: any) => {
          const selector = column.selector as (row: any) => any;
          const value = selector(row);
          return renderSeverityChip(String(value));
        },
      };
    }
    return column;
  });

  return (
    <Box className={`table-wrapper ${className || ""}`}>
      <DataTable
        columns={transformedColumns}
        data={data}
        progressPending={progressPending}
        pagination={pagination}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        selectableRows={selectableRows}
        onSelectedRowsChange={onSelectedRowsChange}
        onSort={onSort}
        sortServer
        className="table-common"
        customStyles={{
          ...customStyles,
        }}
        responsive
        persistTableHead
      />
    </Box>
  );
};

export default Table;
