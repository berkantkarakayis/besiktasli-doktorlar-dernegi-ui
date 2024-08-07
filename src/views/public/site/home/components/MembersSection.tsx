import React from "react";
import { Card, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Doctor3 from "../../../../../assets/images/doctor3.png";
import { members } from "../../../../../data/Data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TitleSectionComponent from "../../../../../components/core-components/titleSection";

const MemberCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginBottom: theme.spacing(2),
  minHeight: "100%",
  height: "450px",
}));

function MembersSection() {
  return (
    <section
      id="members"
      style={{ backgroundColor: "var(--bg-color)", height: "100vh" }}
    >
      <div className="container">
        <TitleSectionComponent titleText="Üyelerimiz" />

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          freeMode={true}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <MemberCard>
                <img
                  /* src={member.img} */
                  src={Doctor3}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "295px",
                    borderRadius: "8px",
                  }}
                />
                <Stack spacing={1} mt={1}>
                  <span className="B-18" style={{ fontWeight: 700 }}>
                    {member.name}
                  </span>
                  <span className="B-18">{member.role}</span>
                </Stack>
              </MemberCard>
            </SwiperSlide>
          ))}
        </Swiper>
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
      </div>
    </section>
  );
}

export default MembersSection;
