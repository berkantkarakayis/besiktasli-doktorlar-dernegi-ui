import React, { useState } from "react";
import { Grid, Card, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import LoadingButton from "@mui/lab/LoadingButton";
import CompassionSvg from "../../../../../assets/icons/Compassion";
import RespectSvg from "../../../../../assets/icons/Respect";
import TeamworkSvg from "../../../../../assets/icons/Teamwork";

const TitleSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(4, 2),
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2),
  height: "512px",
}));

const ValueCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  transition: "transform 0.3s, box-shadow 0.3s",
  height: "100%",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
    "& .hoverEffect": {
      backgroundColor: "var(--red-secondary)",
      color: "#fff",
      padding: theme.spacing(1),
      borderRadius: "8px",
      transition: "background-color 0.3s",
    },
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  marginBottom: theme.spacing(2),
  backgroundColor: "var(--red-primary)",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
}));

function AboutSection() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/tuzuk.docx";
      link.download = "besiktasli-doktorlar-dernegi-tuzugu.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }, 2000);
  };

  return (
    <section
      id="about-section"
      style={{ backgroundColor: "var(--bg-color)", height: "100vh" }}
    >
      <div className="container">
        <TitleSection>
          <span className="H-44-56-700">Hakkımızda</span>
        </TitleSection>

        {/* Feature Section */}
        <FeatureSection>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <ValueCard>
                <Stack
                  spacing={2}
                  direction={"row"}
                  className="hoverEffect"
                  justifyContent={"center"}
                  alignItems={"center"}
                  mb={2}
                >
                  <IconBox>
                    <TeamworkSvg />
                  </IconBox>
                  <span className="H-22-38-700">Kurucu Hekimlerimiz</span>
                </Stack>
                <p className="B-18">
                  <ul>
                    <Stack spacing={1}>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Dr. Ali KILIÇ{" "}
                          </span>
                          Yönetim Kurulu Başkanı
                        </Stack>
                      </li>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Uzm. Dr. Yavuz GÜVEN{" "}
                          </span>
                          Yönetim Kurulu Başkan Yardımcısı
                        </Stack>
                      </li>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Doç. Dr. Aytaç ŞAHİN
                          </span>
                          Genel Sekreter
                        </Stack>
                      </li>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Uzm. Dr. Mehmet AYDOĞAN
                          </span>
                          Yönetim Kurulu Üyesi
                        </Stack>
                      </li>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Uzm. Dr. Mahmut SERT
                          </span>
                          Yönetim Kurulu Üyesi
                        </Stack>
                      </li>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Prof. Dr. Salih BOĞA
                          </span>
                          Yönetim Kurulu Üyesi
                        </Stack>
                      </li>
                      <li>
                        <Stack spacing={1}>
                          <span style={{ fontWeight: 700 }}>
                            Prof. Dr. Abdullah Emre YILDIRIM
                          </span>
                          Yönetim Kurulu Üyesi
                        </Stack>
                      </li>
                    </Stack>
                  </ul>
                </p>
              </ValueCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack>
                <ValueCard>
                  <Stack
                    spacing={2}
                    direction={"row"}
                    className="hoverEffect"
                    justifyContent={"center"}
                    alignItems={"center"}
                    mb={2}
                  >
                    <IconBox>
                      <CompassionSvg />
                    </IconBox>
                    <span className="H-22-38-700">Kuruluşumuz</span>
                  </Stack>

                  <p className="B-18">
                    Derneğimiz, T.C. Anayasası’nın öngördüğü esaslara, Atatürk
                    ilkelerine ve Türkiye Cumhuriyeti değerlerine uygun olarak
                    19.03.2024 Dünya Beşiktaşlılar Gününde, Beşiktaş Jimnastik
                    Kulübü’nün resmi izni ile Beşiktaş ruhuna sahip ve Hipokrat
                    yeminine sadık tıp ve diş hekimleri tarafından büyük bir
                    coşku ve kararlılıkla kurulmuştur. Derneğimiz, sağlık
                    alanında en yüksek standartları benimseyerek topluma fayda
                    sağlamayı amaçlamaktadır. Ayrıca, üyelerimizin mesleki
                    gelişimini desteklemek ve sağlık bilincini artırmak için
                    çeşitli etkinlikler düzenlemekteyiz.
                  </p>
                </ValueCard>
                <LoadingButton
                  variant="contained"
                  loading={loading}
                  onClick={handleDownload}
                  loadingIndicator="İndiriliyor..."
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 6,
                    width: "100%",
                    backgroundColor: "#333",
                    color: "white",
                    borderRadius: "20px",
                    padding: "5px 20px",
                    height: "50px",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "#000" },
                  }}
                >
                  <span className="B-18" style={{ color: "#fff" }}>
                    Tüzüğümüzü İndirin
                  </span>
                </LoadingButton>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <ValueCard>
                <Stack
                  spacing={2}
                  direction={"row"}
                  className="hoverEffect"
                  justifyContent={"center"}
                  alignItems={"center"}
                  mb={2}
                >
                  <IconBox>
                    <RespectSvg />
                  </IconBox>
                  <span className="H-22-38-700">Vizyonumuz</span>
                </Stack>

                <p className="B-18">
                  Derneğimiz, Türkiye’nin dört bir yanından gelen hekimlerin
                  bilgi ve tecrübesini bir araya getirerek, sağlık alanında öncü
                  olmayı amaçlamaktadır. Beşiktaş ruhu ve Hipokrat yemini ile
                  insan sağlığını ön planda tutarak, topluma en yüksek
                  standartlarda hizmet sunmayı hedefliyoruz. Vizyonumuz,
                  bilimsel ve etik değerlere bağlı kalarak, tıp ve diş hekimliği
                  alanında yenilikçi yaklaşımlarla toplumsal sağlık bilincini
                  artırmak ve sağlık hizmetlerinin kalitesini yükseltmektir. Bu
                  doğrultuda, ulusal ve uluslararası düzeyde tanınan ve saygı
                  duyulan bir sağlık kuruluşu olma yolunda ilerlemekteyiz.
                </p>
              </ValueCard>
            </Grid>
          </Grid>
        </FeatureSection>
      </div>
    </section>
  );
}

export default AboutSection;
