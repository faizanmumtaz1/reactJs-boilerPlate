import React, { useState, useCallback } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import "./table.scss";
import DashboardChip from "../CustomChip/CustomChip";
import { DeleteIcon } from "../../../assets/Images/svg";
import Modal from "../Modal/Modal";

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
  onRowClicked?: (row: T) => void | null;
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
  onRowClicked,
}: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [showModal, setShowModal] = useState(false);
  const handleSelectedRowsChange = useCallback(
    (state: { selectedRows: T[] }) => {
      setSelectedRows(state.selectedRows);
      if (onSelectedRowsChange) {
        onSelectedRowsChange(state);
      }
    },
    [onSelectedRowsChange]
  );

  const getDeleteAction = () => {
    if (selectedRows.length > 0) {
      return (
        <IconButton color="secondary" onClick={() => setShowModal(true)}>
          <DeleteIcon />
        </IconButton>
      );
    }
    return null;
  };

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
        onSelectedRowsChange={handleSelectedRowsChange}
        contextActions={getDeleteAction()}
        onSort={onSort}
        sortServer
        className="table-common"
        customStyles={{
          ...customStyles,
          rows: {
            style: {
              cursor: onRowClicked !== null ? "pointer" : "default",
            },
          },
        }}
        responsive
        persistTableHead
        onRowClicked={onRowClicked}
        selectableRowsComponent={Checkbox as unknown as React.ReactNode}
        actions={getDeleteAction()}
      />
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={() => {}}
          title="Delete rows"
          subtitle="Are you sure you would like to remove these rows?"
        />
      )}
    </Box>
  );
};

export default Table;
