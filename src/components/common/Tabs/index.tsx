import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: any;
}

interface CustomTabsProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  value?: number;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  sx?: any;
  tabSx?: any;
  panelSx?: any;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, sx, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, ...sx }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  value = 0,
  onChange,
  sx,
  tabSx,
  panelSx,
}) => {
  const [internalValue, setInternalValue] = React.useState(value);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setInternalValue(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={onChange ? value : internalValue}
          onChange={onChange || handleChange}
          aria-label="custom tabs"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={tabSx}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel
          key={index}
          value={onChange ? value : internalValue}
          index={index}
          sx={panelSx}
        >
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabs;
