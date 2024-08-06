import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TitleSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(4, 2),
}));

const EventCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  },
}));

const EventCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const EventDate = styled(Typography)(({ theme }) => ({
  color: "#000",
}));

const EventTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  margin: theme.spacing(1, 0),
}));

const EventLink = styled(Typography)(({ theme }) => ({
  color: "#000",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const events = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    date: "May 1, 2023",
    image: "https://prohealth-react.vercel.app/images/home_1/post_1.jpeg", // Replace with your actual image path
    link: "#",
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    date: "May 4, 2023",
    image: "https://prohealth-react.vercel.app/images/home_1/post_1.jpeg", // Replace with your actual image path
    link: "#",
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    date: "May 1, 2023",
    image: "https://prohealth-react.vercel.app/images/home_1/post_1.jpeg", // Replace with your actual image path
    link: "#",
  },
];

function EventsSection() {
  return (
    <section
      id="events"
      style={{ backgroundColor: "var(--bg-color)", height: "100%" }}
    >
      <div className="container">
        <TitleSection>
          <span className="H-44-56-700">Etkinlikler</span>
        </TitleSection>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                />
                <EventCardContent>
                  <EventDate variant="body2">{event.date}</EventDate>
                  <EventTitle variant="h6">{event.title}</EventTitle>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <EventLink variant="body2">Learn More</EventLink>
                    <Box>
                      <IconButton aria-label="LinkedIn">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton aria-label="Twitter">
                        <TwitterIcon />
                      </IconButton>
                      <IconButton aria-label="Facebook">
                        <FacebookIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </EventCardContent>
              </EventCard>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon style={{ marginLeft: "16px" }} />}
          sx={{
            mt: 4,
            width: "100%",
            backgroundColor: "var(--black-primary)",
            color: "var(--white-color)",
            borderRadius: "20px",
            padding: "5px 20px",
            height: "50px",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "var(--black-color)" },
          }}
        >
          <span className="B-18" style={{ color: "var(--white-color)" }}>
            Bütün Etkinlikleri Gör
          </span>
        </Button>
      </div>
    </section>
  );
}

export default EventsSection;
