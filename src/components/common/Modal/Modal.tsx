import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  subtitle: string;
}

export default function Modal({
  open,
  onClose,
  onConfirm,
  title,
  subtitle,
}: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          boxShadow: "var(--box-shadow-4)",
        },
      }}
    >
      <DialogTitle
        sx={{
          pt: 3,
          pb: 0,
          fontSize: 24,
          fontWeight: 400,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          pb: 3,
          px: 3,
        }}
      >
        <Button
          sx={{
            width: "50%",
            textTransform: "capitalize",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: 80,
            fontWeight: 500,
          }}
          onClick={onClose}
          color="inherit"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          sx={{
            width: "50%",
            textTransform: "capitalize",
            borderRadius: 80,
            fontWeight: 500,
          }}
          variant="outlined"
          onClick={onConfirm}
          color="error"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
