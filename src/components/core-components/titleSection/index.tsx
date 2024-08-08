import { styled } from "@mui/system";
import { Box } from "@mui/material";

interface TitleSectionProps {
  titleText: string;
  mt?: number;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

const TitleSectionComponent: React.FC<TitleSectionProps> = ({
  titleText,
  textAlign = "center",
}) => {
  const TitleSection = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: textAlign,
    padding: theme.spacing(4, 0),
  }));

  return (
    <TitleSection>
      <span className="H-44-56-700">{titleText}</span>
    </TitleSection>
  );
};

export default TitleSectionComponent;
