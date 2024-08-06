import React from "react";
import { Container, Typography, Card, Box, Stack, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Doctor3 from "../../../../assets/images/doctor3.png";
import members from "./members.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TitleSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(4, 2),
}));

const MemberCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginBottom: theme.spacing(2),
  minHeight: "100%",
  height: "450px",
}));

function Members() {
  return (
    <section
      id="members"
      style={{ backgroundColor: "#f7f7f7", height: "100%" }}
    >
      <div className="container">
        <TitleSection>
          <span className="H-44-56-700">Üyelerimiz</span>
        </TitleSection>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
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
            backgroundColor: "#333",
            color: "white",
            borderRadius: "20px",
            padding: "5px 20px",
            height: "50px",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#000" },
          }}
        >
          <span className="B-18" style={{ color: "#fff" }}>
            {" "}
            Bütün Kurucu Üyeleri Gör
          </span>
        </Button>
      </div>
    </section>
  );
}

export default Members;
