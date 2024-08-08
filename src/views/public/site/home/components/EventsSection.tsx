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
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import { events } from "../../../../../data/Data";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const TitleSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(4, 2),
}));

const EventCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  },
}));

const EventCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  flexGrow: 1,
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: "inherit",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
}));

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function EventsSection() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <section
      id="events"
      style={{ backgroundColor: "var(--bg-color)", height: "100vh" }}
    >
      <div className="container">
        <TitleSection>
          <span className="H-44-56-700">Etkinlikler</span>
        </TitleSection>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard>
                <Link to={`/events/${slugify(event.title)}`}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                  />
                </Link>
                <EventCardContent>
                  <Stack spacing={1} flexGrow={1}>
                    <span className="B-16">{event.date}</span>
                    <Link to={`/events/${slugify(event.title)}`}>
                      <span className="B-20-20-600">{event.title}</span>
                    </Link>
                    <Description variant="body2" color="textSecondary">
                      {event.description}
                    </Description>
                  </Stack>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Link to={`/events/${slugify(event.title)}`}>
                      <Button
                        variant="text"
                        style={{
                          color: "var(--black-color)",
                          textTransform: "capitalize",
                          textDecoration: "underline",
                          borderRadius: "20px",
                        }}
                      >
                        Okumaya Devam Et
                      </Button>
                    </Link>
                    <Box>
                      <IconButton aria-label="Copy Link" onClick={handleClick}>
                        <ContentCopyIcon />
                      </IconButton>

                      <IconButton
                        aria-label="LinkedIn"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert(
                            "Etkinlik linki kopyalandı! Paylaşmak için yönlendirilen sayfada Ctrl+V yapabilirsiniz."
                          );
                          window.open(
                            `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${event.title}&summary=${event.description}`,
                            "_blank"
                          );
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        aria-label="X"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert(
                            "Etkinlik linki kopyalandı! Paylaşmak için yönlendirilen sayfada Ctrl+V yapabilirsiniz."
                          );
                          window.open(
                            `https://x.com/intent/tweet?text=${event.title}&url=${window.location.href}`,
                            "_blank"
                          );
                        }}
                      >
                        <XIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Facebook"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert(
                            "Etkinlik linki kopyalandı! Paylaşmak için yönlendirilen sayfada Ctrl+V yapabilirsiniz."
                          );
                          window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                            "_blank"
                          );
                        }}
                      >
                        <FacebookIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </EventCardContent>
              </EventCard>
            </Grid>
          ))}
        </Grid>
        <Link to={`/events`}>
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
              Tümünü Gör
            </span>
          </Button>
        </Link>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Etkinlik linki başarıyla kopyalandı!
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
}

export default EventsSection;
