import { Tooltip, TooltipProps } from "@mui/material";
import "./tooltip.scss";

interface TooltipCustomProps extends Omit<TooltipProps, "title"> {
  body: React.ReactNode;
  children: React.ReactElement;
  customClass?: string;
}

const TooltipCustom = ({
  body,
  placement = "right",
  children,
  customClass,
  ...props
}: TooltipCustomProps) => {
  return (
    <Tooltip
      title={body}
      placement={placement}
      arrow
      {...props}
      classes={{
        tooltip: `tooltip-custom ${customClass || ""}`,
        arrow: "MuiTooltip-arrow",
      }}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipCustom;
