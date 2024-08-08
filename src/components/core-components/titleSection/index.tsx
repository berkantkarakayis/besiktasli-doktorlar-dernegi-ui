import { styled } from "@mui/system";
import { Box } from "@mui/material";

interface TitleSectionProps {
  titleText: string;
  mt?: number;
}

const TitleSectionComponent: React.FC<TitleSectionProps> = ({ titleText }) => {
  const TitleSection = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(4, 2),
  }));

  return (
    <TitleSection>
      <span className="H-44-56-700">{titleText}</span>
    </TitleSection>
  );
};

export default TitleSectionComponent;
