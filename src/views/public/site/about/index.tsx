import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import doctorImage from "../../../../assets/images/aboutpagephoto.jpeg";
import { boardOfDirectors } from "../../../../data/Data";
import TitleSectionComponent from "../../../../components/core-components/titleSection";

const TitleSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2, 2),
}));

const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--red-primary)",
  borderRadius: "50%",
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

const DoctorCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  },
}));

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg-color)",
        height: "100%",
        paddingBottom: "100px",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <div className="container">
        <TitleSectionComponent titleText="Hakkımızda" />

        <Grid container spacing={4} alignItems="center" pt={2}>
          <Grid item xs={12} md={4}>
            <img
              src={doctorImage}
              alt="Doctor"
              style={{
                height: "600px",
                objectFit: "cover",
                width: "100%",
                borderRadius: "16px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Card
                  elevation={0}
                  sx={{ height: "100%", backgroundColor: "transparent" }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="flex-start">
                      <IconBox>
                        <MedicalServicesIcon />
                      </IconBox>
                      <span className="H-24">Kuruluşumuz</span>

                      <span
                        className="B-18"
                        style={{ color: "var(--gray-primary)" }}
                      >
                        Derneğimiz, T.C. Anayasası’nın öngördüğü esaslara,
                        Atatürk ilkelerine ve Türkiye Cumhuriyeti değerlerine
                        uygun olarak 19.03.2024 Dünya Beşiktaşlılar Gününde,
                        Beşiktaş Jimnastik Kulübü’nün resmi izni ile Beşiktaş
                        ruhuna sahip ve Hipokrat yeminine sadık tıp ve diş
                        hekimleri tarafından büyük bir coşku ve kararlılıkla
                        kurulmuştur. Derneğimiz, sağlık alanında en yüksek
                        standartları benimseyerek topluma fayda sağlamayı
                        amaçlamaktadır. Ayrıca, üyelerimizin mesleki gelişimini
                        desteklemek ve sağlık bilincini artırmak için çeşitli
                        etkinlikler düzenlemekteyiz.
                      </span>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  elevation={0}
                  sx={{ height: "100%", backgroundColor: "transparent" }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="flex-start">
                      <IconBox>
                        <FavoriteIcon />
                      </IconBox>
                      <span className="H-24">Vizyonumuz</span>

                      <span
                        className="B-18"
                        style={{ color: "var(--gray-primary)" }}
                      >
                        {" "}
                        Derneğimiz, Türkiye’nin dört bir yanından gelen
                        hekimlerin bilgi ve tecrübesini bir araya getirerek,
                        sağlık alanında öncü olmayı amaçlamaktadır. Beşiktaş
                        ruhu ve Hipokrat yemini ile insan sağlığını ön planda
                        tutarak, topluma en yüksek standartlarda hizmet sunmayı
                        hedefliyoruz. Vizyonumuz, bilimsel ve etik değerlere
                        bağlı kalarak, tıp ve diş hekimliği alanında yenilikçi
                        yaklaşımlarla toplumsal sağlık bilincini artırmak ve
                        sağlık hizmetlerinin kalitesini yükseltmektir. Bu
                        doğrultuda, ulusal ve uluslararası düzeyde tanınan ve
                        saygı duyulan bir sağlık kuruluşu olma yolunda
                        ilerlemekteyiz.
                      </span>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Card
                  elevation={0}
                  sx={{ height: "100%", backgroundColor: "transparent" }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="flex-start">
                      <IconBox>
                        <VerifiedIcon />
                      </IconBox>
                      <span className="H-24">Kurucu Hekimlerimiz</span>
                      <span
                        className="B-18"
                        style={{ color: "var(--gray-primary)" }}
                      >
                        Dernek kurucu hekimlerimiz ülkemizin 9 ilinden, 40
                        farklı branştan, 25'i öğretim üyesi olmak üzere toplam
                        64 tıp ve diş hekiminden oluşmaktadır.
                      </span>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <TitleSectionComponent mt={10} titleText="Yönetim Kurulumuz" />

        <Grid container spacing={4}>
          {boardOfDirectors.map((boardOfDirectors, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DoctorCard>
                <Avatar
                  alt={boardOfDirectors.name}
                  src={boardOfDirectors.image}
                  sx={{ width: 150, height: 150, margin: "0 auto" }}
                />
                <CardContent>
                  <Stack spacing={1} alignItems="center">
                    <span className="H-24">{boardOfDirectors.name}</span>
                    <span className="B-18">{boardOfDirectors.position}</span>
                  </Stack>
                  <Box mt={2}>
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </DoctorCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
