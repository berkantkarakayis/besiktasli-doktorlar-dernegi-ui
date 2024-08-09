import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const intervalLabels: { [key in keyof TimeLeft]: string } = {
    days: "Gün",
    hours: "Saat",
    minutes: "Dakika",
    seconds: "Saniye",
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{ textAlign: "center" }}
    >
      {Object.keys(timeLeft).map((key) => {
        const interval = key as keyof TimeLeft;
        if (!timeLeft[interval]) return null;

        return (
          <Grid item xs={6} sm={3} md={2} key={interval}>
            <Box
              sx={{
                backgroundColor: "var(--white-color)",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <span className="H-24">{timeLeft[interval]}</span>
            </Box>
            <span className="H-24" style={{ color: "var(--white-color)" }}>
              {intervalLabels[interval]}
            </span>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Countdown;
