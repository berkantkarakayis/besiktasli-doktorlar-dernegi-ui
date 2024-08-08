import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { events } from "../../../../data/Data";
import EventCardComponent from "../../../../components/core-components/eventsCard";
import SnackbarComponent from "../../../../components/core-components/snackbar";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import TitleSectionComponent from "../../../../components/core-components/titleSection";

const TitleSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(4, 2),
}));

function Events() {
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
      style={{
        backgroundColor: "var(--bg-color)",
        height: "100%",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <TitleSectionComponent titleText="Etkinlikler" />

        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCardComponent event={event} handleClick={handleClick} />
            </Grid>
          ))}
        </Grid>
        <SnackbarComponent
          open={open}
          handleClose={handleClose}
          alertText="Etkinlik linki başarıyla kopyalandı!"
        />
      </div>
    </section>
  );
}

export default Events;
