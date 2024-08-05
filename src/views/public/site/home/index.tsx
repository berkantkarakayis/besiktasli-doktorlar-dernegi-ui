import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Grid,
  AvatarGroup,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../../../assets/images/logo.webp";

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
  padding: theme.spacing(8, 2),
}));

const CommunitySection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(4),
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  backgroundColor: "#f5f5f5",
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
}));

function Home() {
  return (
    <Container sx={{ minWidth: "100%", paddingTop: "100px" }}>
      {/* Hero Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
      >
        <HeroSection width={{ xs: "100%", sm: "60%" }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Beşiktaşlı Tıbbiyeliler Derneği
          </Typography>
          <Typography variant="body1" gutterBottom>
            Derneğimiz T.C. Anayasası'nın öngördüğü esaslara, Atatürk ilkelerine
            ve Türkiye Cumhuriyeti değerlerine uygun olarak 19.03.2024 Dünya
            Beşiktaşlılar Gününde, Beşiktaş Jimnastik Kulübü resmi izni ile
            Beşiktaş ruhuna sahip ve Hipokrat yeminine sadık tıp ve diş
            hekimleri tarafından kurulmuştur.
          </Typography>
          <CommunitySection>
            <AvatarGroup max={4}>
              <Avatar alt="Member 1" src="/path/to/member1.jpg" />
              <Avatar alt="Member 2" src="/path/to/member2.jpg" />
              <Avatar alt="Member 3" src="/path/to/member3.jpg" />
              <Avatar alt="Member 4" src="/path/to/member4.jpg" />
            </AvatarGroup>
            <Box ml={2}>
              <Typography variant="body1">
                Büyüyen derneğimizin bir üyesi olun.
              </Typography>
            </Box>
          </CommunitySection>
        </HeroSection>
        <HeroSection width={{ xs: "100%", sm: "40%" }}>
          <img
            src={Logo}
            alt="Hero"
            style={{ width: "100%", height: "auto" }}
          />
        </HeroSection>
      </Stack>

      {/* Feature Section */}
      <FeatureSection>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <StatBox>
              <Typography variant="h3" component="div">
                09 +
              </Typography>
              <Typography variant="body1">İlden üye</Typography>
            </StatBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatBox>
              <Typography variant="h3" component="div">
                40 +
              </Typography>
              <Typography variant="body1">Farklı branştan üye</Typography>
            </StatBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatBox>
              <Typography variant="h3" component="div">
                64 +
              </Typography>
              <Typography variant="body1">Tıp ve diş hekimi</Typography>
            </StatBox>
          </Grid>
        </Grid>
      </FeatureSection>
    </Container>
  );
}

export default Home;
