import React from "react";
import { Grid, Button } from "@mui/material";
import { events } from "../../../../../data/Data";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import EventCardComponent from "../../../../../components/core-components/eventsCard";
import SnackbarComponent from "../../../../../components/core-components/snackbar";
import TitleSectionComponent from "../../../../../components/core-components/titleSection";

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
        <TitleSectionComponent titleText="Etkinlikler" />
        <Grid container spacing={4}>
          {events.slice(0, 3).map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCardComponent event={event} handleClick={handleClick} />
            </Grid>
          ))}
        </Grid>
        <Link to={`/etkinlikler`}>
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
        <SnackbarComponent
          open={open}
          handleClose={handleClose}
          alertText="Etkinlik linki başarıyla kopyalandı!"
        />
      </div>
    </section>
  );
}

export default EventsSection;
