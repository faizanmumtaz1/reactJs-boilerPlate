import { Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../../../assets/Images/svg";
interface BreadcrumbLink {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

const Breadcrumb = ({ links }: BreadcrumbProps) => {
  return (
    <Breadcrumbs separator={<ArrowRightIcon />} aria-label="breadcrumb">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;

        if (isLast) {
          return (
            <Typography
              key={link.label}
              className="body1 MuiTypography-root"
              sx={{ color: "var(--primary-main) !important" }}
            >
              {link.label}
            </Typography>
          );
        }

        return (
          <Link
            key={link.label}
            color="inherit"
            to={link.href || "#"}
            className="body1 MuiTypography-root breadcrumb-link"
          >
            {link.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
