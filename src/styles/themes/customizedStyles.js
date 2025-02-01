import { styled } from "@mui/system";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";

const violet = {
  50: "#f1eff6",
  100: "#e2deed",
  200: "#c6beda",
  300: "#a99dc8",
  400: "#8d7cb6",
  500: "#705ca3",
  600: "#5a4983",
  700: "#433762",
  800: "#2d2541",
  900: "#161221",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${violet[500]};
  width: 11rem;
  padding: 0.6rem;
  margin: 1rem 0.5rem;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${violet[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${violet[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${violet[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanelForm = styled(BaseTabPanel)`
  width: 100%;
`;

export const TabPanelDisplay = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `
);

export const TabsList = styled(BaseTabsList)`
  width: 100%;
  background-color: transparent;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;
