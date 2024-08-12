import React from "react";
import {
  Card,
  Box,
  Stack,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { members } from "../../../../../data/Data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MaleProfilePhoto from "../../../../../assets/images/male-doc.png";
import FemaleProfilePhoto from "../../../../../assets/images/female-doc.webp";
import TitleSectionComponent from "../../../../../components/core-components/titleSection";
import { Link } from "react-router-dom";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container={!isMobile}
      spacing={4}
      xs={12}
      m={"auto"}
      height={"100%"}
      justifyContent="center"
    >
      <Grid item xs={12}>
        <TitleSectionComponent titleText="Üyelerimiz" />
      </Grid>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 4}
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        freeMode={true}
        style={{ padding: "20px 10px" }}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <MemberCard>
              <img
                /* src={member.img} */
                src={
                  member.img ||
                  (member.gender === "male"
                    ? MaleProfilePhoto
                    : FemaleProfilePhoto)
                }
                alt={member.name}
                style={{
                  width: "100%",
                  height: "295px",
                  borderRadius: "16px",
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

      <Link to={`/uyeler`}>
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
    </Grid>
  );
}

export default MembersSection;
