import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

export default function RolesAndPermissionsTable() {
  const roles = [
    "Super Admin",
    "Client Admin",
    "Client Admin View Only",
    "Region Manager",
    "User",
  ];

  const permissions = [
    {
      section: "Map",
      rows: [
        { label: "Global Map", values: [true, false, false, false, true] },
        { label: "Selected Region", values: [false, true, true, true, true] },
      ],
    },
    {
      section: "Language Module",
      rows: [
        { label: "Create", values: [true, false, false, false, false] },
        { label: "Edit", values: [true, false, false, false, false] },
        { label: "Select", values: [true, false, true, true, true] },
      ],
    },
    {
      section: "Dashboard",
      rows: [{ label: "View", values: [true, true, true, true, true] }],
    },
    {
      section: "3rd party data push",
      rows: [
        { label: "Push Data", values: [true, false, false, false, false] },
        { label: "Request Data Push", values: [true, true, true, true, false] },
      ],
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "var(--background-default)" }}>
            <TableCell sx={{ p: 2 }} padding="none">
              <Typography variant="body2" fontWeight={500}>
                Roles
              </Typography>
            </TableCell>
            {roles.map((role) => (
              <TableCell key={role} padding="none">
                <Stack direction="row" alignItems="center">
                  <Checkbox />
                  <Typography variant="body2" fontWeight={500}>
                    {role}
                  </Typography>
                </Stack>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((section) => (
            <React.Fragment key={section.section}>
              <TableRow sx={{ backgroundColor: "#eeeff1" }}>
                <TableCell sx={{ p: 2 }} colSpan={roles.length + 1}>
                  <Typography variant="body2">{section.section}</Typography>
                </TableCell>
              </TableRow>
              {section.rows.map((row, rowIndex) => (
                <TableRow
                  key={row.label + rowIndex}
                  sx={{ backgroundColor: "var(--background-default)" }}
                >
                  <TableCell>
                    <Typography color="text.secondary" variant="body2">
                      {row.label}
                    </Typography>
                  </TableCell>
                  {row.values.map((val, index) => (
                    <TableCell padding="none" key={index}>
                      <Checkbox checked={val} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
