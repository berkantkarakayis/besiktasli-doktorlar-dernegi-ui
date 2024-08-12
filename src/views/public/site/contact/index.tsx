import React from "react";
import { Card, Grid, Stack, Box, useTheme, useMediaQuery } from "@mui/material";
import TitleSectionComponent from "../../../../components/core-components/titleSection";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailIcon from "@mui/icons-material/Mail";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const contactInfo = [
    {
      icon: (
        <PhoneIcon
          sx={{
            width: isMobile ? "30px" : "40px",
            height: isMobile ? "30px" : "40px",
          }}
        />
      ),
      text: "+90 506 199 95 12",
      onClick: () => {
        window.location.href = "tel:+905061999512";
      },
    },
    {
      icon: (
        <MailIcon
          sx={{
            width: isMobile ? "30px" : "40px",
            height: isMobile ? "30px" : "40px",
          }}
        />
      ),
      text: "info@besiktaslitibbiyeliler.org",
      onClick: () => {
        window.location.href = "mailto:info@besiktaslitibbiyeliler.org";
      },
    },
    {
      icon: (
        <WhatsAppIcon
          sx={{
            width: isMobile ? "30px" : "40px",
            height: isMobile ? "30px" : "40px",
          }}
        />
      ),
      text: "+90 506 199 95 12",
      onClick: () => {
        window.location.href = "https://wa.me/905061999512";
      },
    },
    {
      icon: (
        <LocationOnIcon
          sx={{
            width: isMobile ? "30px" : "40px",
            height: isMobile ? "30px" : "40px",
          }}
        />
      ),
      text: "Dikilitaş, Beste Sokak No:5, Beşiktaş/İstanbul",
      onClick: () => {
        window.open(
          "https://www.google.com/maps?q=Dikilitaş,+Beste+Sokak+No:5,+Beşiktaş/İstanbul",
          "_blank"
        );
      },
    },
    {
      icon: (
        <AccessTimeIcon
          sx={{
            width: isMobile ? "30px" : "40px",
            height: isMobile ? "30px" : "40px",
          }}
        />
      ),
      text: "Pazartesi - Cuma: 09:00 - 18:00",
    },
  ];

  return (
    <section
      id="events"
      style={{
        backgroundColor: "var(--bg-color)",
        height: "100%",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <TitleSectionComponent titleText="İletişim" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={isMobile ? 12 : 4}>
            <Grid container direction="column" spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    onClick={info.onClick}
                    sx={{
                      textAlign: "center",
                      borderRadius: "16px",
                      boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
                      },
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "30px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent="flex-start"
                      alignContent={"flex-start"}
                      alignItems={"center"}
                    >
                      {info.icon}
                      <span className={isMobile ? "B-18" : "H-24"}>
                        {info.text}
                      </span>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={isMobile ? 12 : 8}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <iframe
                title="Google Maps"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dikilita%C5%9F,%20Beste%20Sokak%20No:5,%20Be%C5%9Fikta%C5%9F/%C4%B0stanbul+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "16px",
                }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Contact;
