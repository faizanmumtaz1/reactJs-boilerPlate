import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADD_NEW_USER } from "../../utils/constant";
import "./style.scss";
import { useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import RolesAndPermissionsTable from "./RolesAndPermissionsTable";
import AllUsersTable from "./AllUsersTable";

const RolesAndPermissionsListing = () => {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        px: 3,
        mt: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Roles and Permissions</Typography>
        <Button
          className="rounded-full-button"
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_ADD_NEW_USER)}
        >
          Add New User
        </Button>
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: "var(--divider)" }}>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              textTransform: "capitalize !important",
              fontWeight: 500,
            }}
            label="All Users"
          />
          <Tab
            sx={{
              textTransform: "capitalize !important",
              fontWeight: 500,
            }}
            label="Roles & Permission"
          />
        </Tabs>
      </Box>

      {tabValue === 0 && <AllUsersTable />}
      {tabValue === 1 && (
        <Box mt={2}>
          <RolesAndPermissionsTable />
        </Box>
      )}
      <Modal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {}}
        title="Delete device?"
        subtitle="Are you sure you would like to remove this device?"
      />
    </Box>
  );
};

export default RolesAndPermissionsListing;
