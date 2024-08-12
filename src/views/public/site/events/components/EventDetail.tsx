import {
  Box,
  Breadcrumbs,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { events } from "../../../../../data/Data";
import TitleSectionComponent from "../../../../../components/core-components/titleSection";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function EventDetail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useParams<{ id: string }>();
  const event = events.find((event) => event.id === Number(id));

  const handleClick = () => {
    if (event) {
      navigator.clipboard.writeText(window.location.href);
      alert(
        "Etkinlik linki kopyalandı! Paylaşmak için yönlendirilen sayfada Ctrl+V yapabilirsiniz."
      );
    }
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg-color)",
        minHeight: "100vh",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <Grid container mt={1}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">
                <span className="B-18" style={{ color: "var(--gray-color)" }}>
                  Ana Sayfa
                </span>
              </Link>
              <Link to="/etkinlikler">
                <span className="B-18" style={{ color: "var(--gray-color)" }}>
                  Etkinlikler
                </span>
              </Link>
              <span className="B-18">{event?.title}</span>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12} md={12}>
            <TitleSectionComponent
              titleText={event?.title || "Etkinlikler"}
              textAlign="left"
            />
          </Grid>
          <Grid item xs={6} md={6} alignContent={"center"}>
            <span className="B-16">{event?.date}</span>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack direction={"row"} justifyContent={"flex-end"}>
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
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <img
              src={event.image}
              alt={event.title}
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "16px",
                marginBottom: "20px",
                objectFit: "cover",
              }}
            />

            {Array.isArray(event.description) ? (
              event.description.map((paragraph: string, index: number) => (
                <div
                  key={index}
                  style={{ marginBottom: "32px" }}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
            ) : (
              <p className="B-18">{event.description}</p>
            )}
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default EventDetail;
