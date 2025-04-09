import { Stack, Button, Typography, Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { CrossSmIcon } from "../../assets/Images/svg";

interface Notification {
  avatar: string;
  title: string;
  time: string;
  message: string;
}

const notifications: Notification[] = [
  {
    avatar: "A",
    title: "Data Push Request",
    time: "4:42 PM",
    message: "You have received a request to push data.",
  },
  {
    avatar: "B",
    title: "New Comment",
    time: "2:30 PM",
    message: "Someone commented on your data set.",
  },
  {
    avatar: "C",
    title: "System Update",
    time: "11:15 AM",
    message: "System maintenance scheduled for tomorrow.",
  },
  {
    avatar: "D",
    title: "Access Request",
    time: "10:22 AM",
    message: "New access request for project XYZ.",
  },
  {
    avatar: "E",
    title: "Data Export Complete",
    time: "9:15 AM",
    message: "Your data export has finished processing.",
  },
  {
    avatar: "F",
    title: "New Team Member",
    time: "Yesterday",
    message: "Sarah Johnson has joined the project team.",
  },
  {
    avatar: "G",
    title: "Report Generated",
    time: "Yesterday",
    message: "Monthly analytics report is ready for review.",
  },
  {
    avatar: "H",
    title: "Security Alert",
    time: "Yesterday",
    message: "Unusual login activity detected on your account.",
  },
  {
    avatar: "I",
    title: "Database Backup",
    time: "2 days ago",
    message: "Automated backup completed successfully.",
  },
  {
    avatar: "J",
    title: "Task Assignment",
    time: "2 days ago",
    message: "You have been assigned to review data quality.",
  },
  {
    avatar: "K",
    title: "Meeting Reminder",
    time: "2 days ago",
    message: "Project status meeting in 30 minutes.",
  },
  {
    avatar: "L",
    title: "Data Validation",
    time: "3 days ago",
    message: "New data set requires validation.",
  },
  {
    avatar: "M",
    title: "System Performance",
    time: "3 days ago",
    message: "System performance report available.",
  },
  {
    avatar: "N",
    title: "Password Expiry",
    time: "4 days ago",
    message: "Your password will expire in 7 days.",
  },
  {
    avatar: "O",
    title: "Project Milestone",
    time: "4 days ago",
    message: "Phase 1 completion deadline approaching.",
  },
  {
    avatar: "P",
    title: "Data Archive",
    time: "5 days ago",
    message: "Old data sets have been archived.",
  },
  {
    avatar: "Q",
    title: "API Update",
    time: "5 days ago",
    message: "New API version will be deployed soon.",
  },
  {
    avatar: "R",
    title: "Training Session",
    time: "6 days ago",
    message: "New feature training session scheduled.",
  },
  {
    avatar: "S",
    title: "Budget Review",
    time: "6 days ago",
    message: "Quarterly budget review meeting tomorrow.",
  },
  {
    avatar: "T",
    title: "System Upgrade",
    time: "1 week ago",
    message: "Critical system upgrade completed.",
  },
];

const NotificationDrawer = () => {
  return (
    <Box
      sx={{
        padding: 0,
        py: 3,
        display: "flex",
        width: {
          xs: "100%",
          sm: "487px",
        },
        height: "100vh",
        overflowY: "auto",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        borderRadius: {
          xs: "0px",
          sm: "24px 0px 0px 24px",
        },
        background: "var(--white)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" width="100%" px={3}>
        <Typography variant="h5">Notification</Typography>
        <Button variant="outlined" className="icon-button" size="small">
          <CrossSmIcon />
        </Button>
      </Stack>
      <Stack direction="column" justifyContent="space-between" width="100%">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </Stack>
    </Box>
  );
};

export default NotificationDrawer;

const NotificationItem = ({ avatar, title, time, message }: Notification) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "12px 24px",
        alignItems: "center",
        gap: "4px",
        flex: "1 0 0",
        cursor: "pointer",
        "&:hover": {
          background: "var(--primary-states-focus)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          borderRadius: "8px",
        }}
      >
        <Avatar
          sx={{
            width: "32px",
            height: "32px",
            color: "var(--background-paper-elevation-0, #FFF)",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "450",
            lineHeight: "20px",
            letterSpacing: "0.14px",
          }}
        >
          {avatar}
        </Avatar>
      </Box>

      <Stack direction="column" justifyContent="start" width="100%" gap="4px">
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography
            className="subtitle3"
            sx={{ fontWeight: "400 !important" }}
          >
            {title}
          </Typography>
          <Typography
            className="timeCaption"
            sx={{ color: "var(--text-secondary)" }}
          >
            {time}
          </Typography>
        </Stack>
        <Typography
          className="body2"
          sx={{ color: "var(--text-secondary) !important" }}
        >
          {message}
        </Typography>
      </Stack>
    </Box>
  );
};
