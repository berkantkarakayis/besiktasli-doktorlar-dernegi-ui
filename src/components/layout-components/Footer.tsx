import React from "react";
import { Box, Typography, Grid, Link, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Logo from "../../assets/images/logo.webp";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--black-primary)",
  color: "var(--white-color)",
  padding: theme.spacing(6, 2),
  position: "relative",
  width: "100%",
  bottom: 0,
}));

const FooterContent = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Footer = () => {
  const address = "Dikilitaş, Beste Sokak No:5, Beşiktaş/İstanbul";
  const phone = "+905061999512";
  const whatsapp = "https://wa.me/905061999512";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <FooterWrapper>
      <FooterContent>
        <span className="B-16" style={{ color: "var(--bg-color)" }}>
          Sosyal medya hesaplarımız üzerinden bizimle iletişime geçebilirsiniz :
        </span>
        <Box textAlign="center" mb={4}>
          {/* <IconButton href="#" sx={{ color: "var(--white-color)" }}>
            <FacebookIcon />
          </IconButton> */}
          <IconButton
            href="https://www.youtube.com/channel/UCI64vzNMdn0FnnO4JYLZSmg"
            sx={{ color: "var(--white-color)" }}
          >
            <YouTubeIcon />
          </IconButton>
          {/* <IconButton href="#" sx={{ color: "var(--white-color)" }}>
            <LinkedInIcon />
          </IconButton> */}
          {/* <IconButton href="#" sx={{ color: "var(--white-color)" }}>
            <TwitterIcon />
          </IconButton> */}
          <IconButton
            href="https://www.instagram.com/besiktaslitibbiyeliler/?igsh=NzBmMjdhZWRiYQ%3D%3D"
            sx={{ color: "var(--white-color)" }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Stack spacing={1}>
                <span className="H-24" style={{ color: "var(--white-color)" }}>
                  BEŞİKTAŞLI TIBBİYELİLER DERNEĞİ
                </span>
                <span className="B-16" style={{ color: "var(--white-color)" }}>
                  Derneğimiz T.C. Anayasası'nın öngördüğü esaslara, Atatürk
                  ilkelerine ve Türkiye Cumhuriyeti değerlerine uygun olarak
                  19.03.2024 Dünya Beşiktaşlılar gününde, Beşiktaş Jimnastik
                  Kulübü resmi izni ile Beşiktaş ruhuna sahip ve Hipokrat
                  yeminine sadık tıp ve diş hekimleri tarafından kurulmuştur.
                </span>
              </Stack>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection>
              <img
                src={Logo}
                alt="Besiktasli-doktorlar-dernegi-logo"
                width={200}
              />
            </FooterSection>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Stack spacing={1}>
                <span className="H-24" style={{ color: "var(--white-color)" }}>
                  İLETİŞİM
                </span>
                <Stack direction={"row"} spacing={1} alignItems="center" mb={1}>
                  <LocationOnIcon />
                  <Link
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="B-16"
                    style={{ color: "var(--white-color)" }}
                  >
                    Dikilitaş, Beste Sokak No:5, Beşiktaş/İstanbul
                  </Link>
                </Stack>
                {/* <Stack direction={"row"} spacing={1} alignItems="center" mb={1}>
                  <EmailIcon />
                  <span
                    className="B-16"
                    style={{ color: "var(--white-color)" }}
                  >
                    info@example.com
                  </span>
                </Stack> */}
                <Stack direction={"row"} spacing={1} alignItems="center" mb={1}>
                  <PhoneIcon />
                  <Link
                    href={`tel:${phone}`}
                    className="B-16"
                    style={{ color: "var(--white-color)" }}
                  >
                    + 90 506 199 95 12
                  </Link>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems="center" mb={1}>
                  <WhatsAppIcon />
                  <Link
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="B-16"
                    style={{ color: "var(--white-color)" }}
                  >
                    + 90 506 199 95 12
                  </Link>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems="center" mb={1}>
                  <AccessTimeIcon />
                  <span
                    className="B-16"
                    style={{ color: "var(--white-color)" }}
                  >
                    Çalışma saatlerimiz: 09:00 - 17:00
                  </span>
                </Stack>
              </Stack>
            </FooterSection>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Stack spacing={1}>
            <span className="B-16" style={{ color: "var(--white-color)" }}>
              © 2024 Telif Hakkı: besiktaslitibbiyeliler.org - Tüm Hakları
              Saklıdır.
            </span>
            <Link
              href="https://www.linkedin.com/company/neveratech/"
              target="_blank"
              rel="noopener noreferrer"
              className="B-16"
              style={{ color: "var(--white-color)" }}
            >
              <span
                className="B-16"
                style={{
                  color: "var(--white-color)",
                  textDecoration: "underline",
                }}
              >
                Nevera Tech
              </span>
            </Link>
          </Stack>
        </Box>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
