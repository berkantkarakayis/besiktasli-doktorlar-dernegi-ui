import React from "react";
import {
  Box,
  Avatar,
  Grid,
  AvatarGroup,
  Stack,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../../../../assets/images/logo.png";

const StatBox = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  width: "100%",
}));

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container={!isMobile} spacing={4} xs={12} m={"auto"} height={"100%"}>
      <Grid item xs={12} md={isMobile ? 12 : 8} my={2}>
        <Stack spacing={4} width={isMobile ? "100%" : "90%"}>
          <h1
            className={isMobile ? "H-44-56-700" : "H-50-54-700"}
            style={{ textAlign: "center" }}
          >
            BEŞİKTAŞLI TIBBİYELİLER DERNEĞİ
          </h1>
          <p className="B-18">
            Derneğimiz, T.C. Anayasası’nın öngördüğü esaslara, Atatürk
            ilkelerine ve Türkiye Cumhuriyeti değerlerine uygun olarak
            19.03.2024 Dünya Beşiktaşlılar Gününde, Beşiktaş Jimnastik
            Kulübü’nün resmi izni ile Beşiktaş ruhuna sahip ve Hipokrat yeminine
            sadık tıp ve diş hekimleri tarafından büyük bir coşku ve
            kararlılıkla kurulmuştur. Derneğimiz, sağlık alanında en yüksek
            standartları benimseyerek topluma fayda sağlamayı amaçlamaktadır.
            Ayrıca, üyelerimizin mesleki gelişimini desteklemek ve sağlık
            bilincini artırmak için çeşitli etkinlikler düzenlemekteyiz.
          </p>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          mt={4}
        >
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
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={isMobile ? 12 : 4}
        maxHeight={"350px"}
        maxWidth={"300px"}
      >
        <img
          src={Logo}
          alt="Hero"
          style={{
            maxWidth: "300px",
            maxHeight: "350px",
          }}
        />
      </Grid>
      <Grid container spacing={4} my={2} mb={8}>
        <Grid item xs={12} md={isMobile ? 12 : 4}>
          <StatBox>
            <span className="H-38-38-600">09 +</span>
            <span className="H-24">İlden üye</span>
          </StatBox>
        </Grid>
        <Grid item xs={12} md={isMobile ? 12 : 4}>
          <StatBox>
            <span className="H-38-38-600">40 +</span>
            <span className="H-24">Farklı branştan üye</span>
          </StatBox>
        </Grid>
        <Grid item xs={12} md={isMobile ? 12 : 4}>
          <StatBox>
            <span className="H-38-38-600">64 +</span>
            <span className="H-24">Tıp ve diş hekimi</span>
          </StatBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Hero;
