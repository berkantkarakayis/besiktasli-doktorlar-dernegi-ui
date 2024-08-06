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
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../../../assets/images/logo.webp";
import BgImage from "../../../../assets/images/hero_bg12.jpeg";

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
  padding: theme.spacing(4, 2),
}));

const CommunitySection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(4),
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

const StatBox = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: "16px",
  gap: theme.spacing(2),
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
}));

function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="container">
        {/* Hero Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          width={"100%"}
        >
          <HeroSection width={{ xs: "100%", sm: "60%" }}>
            <Stack spacing={2}>
              <h1 className="H-50-54-700">BEŞİKTAŞLI TIBBİYELİLER DERNEĞİ</h1>
              <p className="B-18">
                Derneğimiz T.C. Anayasası'nın öngördüğü esaslara, Atatürk
                ilkelerine ve Türkiye Cumhuriyeti değerlerine uygun olarak
                19.03.2024 Dünya Beşiktaşlılar Gününde, Beşiktaş Jimnastik
                Kulübü resmi izni ile Beşiktaş ruhuna sahip ve Hipokrat yeminine
                sadık tıp ve diş hekimleri tarafından kurulmuştur.
              </p>
            </Stack>
            <CommunitySection>
              <AvatarGroup max={4}>
                <Avatar alt="Member 1" src="/path/to/member1.jpg" />
                <Avatar alt="Member 2" src="/path/to/member2.jpg" />
                <Avatar alt="Member 3" src="/path/to/member3.jpg" />
                <Avatar alt="Member 4" src="/path/to/member4.jpg" />
              </AvatarGroup>
              <Box ml={2}>
                <span className="B-18">
                  Sizde büyüyen derneğimizin bir üyesi olun...
                </span>
              </Box>
            </CommunitySection>
          </HeroSection>
          <HeroSection width={{ xs: "100%", sm: "40%" }}>
            <img
              src={Logo}
              alt="Hero"
              style={{
                width: "400px",
                height: "400px",
              }}
            />
          </HeroSection>
        </Stack>

        {/* Feature Section */}
        <FeatureSection>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <StatBox>
                <span className="H-38-38-600">09 +</span>
                <span className="H-24">İlden üye</span>
              </StatBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatBox>
                <span className="H-38-38-600">40 +</span>
                <span className="H-24">Farklı branştan üye</span>
              </StatBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatBox>
                <span className="H-38-38-600">64 +</span>
                <span className="H-24">Tıp ve diş hekimi</span>
              </StatBox>
            </Grid>
          </Grid>
        </FeatureSection>
      </div>
    </section>
  );
}

export default Home;
