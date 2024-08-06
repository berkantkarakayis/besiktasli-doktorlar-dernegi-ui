import React from "react";
import { Container, Typography, Card, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Doctor3 from "../../../../assets/images/doctor3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Members() {
  return (
    <section
      id="members"
      style={{ backgroundColor: "var(--bg-color)", height: "100%" }}
    >
      <div className="container">MEMBERS PAGE</div>
    </section>
  );
}

export default Members;
