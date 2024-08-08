import React from "react";
import { Link, useParams } from "react-router-dom";
import { members } from "../../../../../data/Data";
import {
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  Breadcrumbs,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import DoctorProfilePhoto from "../../../../../assets/images/doctor3.png";
import { styled } from "@mui/system";

const CityBox = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--red-primary)",
  color: "#fff",
  padding: theme.spacing(1),
  top: "0",
  textAlign: "center",
  borderRadius: "0 0 16px 16px",
}));

function MemberDetail() {
  const { id } = useParams<{ id: string }>();
  const member = members.find((m) => m.id === Number(id));

  const socialMedia = [
    { icon: LinkedInIcon /* link: member?.linkedin */ },
    { icon: TwitterIcon /* link: member?.twitter */ },
    { icon: FacebookIcon /* link: member?.facebook */ },
  ];

  if (!member) {
    return <div>Böyle bir üye bulunamadı</div>; // TODO - ERROR PAGE YAPILACAK
  }

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg-color)",
        minHeight: "100vh",
        paddingBottom: "100px",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <div className="container">
        <Grid container spacing={4} mt={1}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">
                <span className="B-18" style={{ color: "var(--gray-color)" }}>
                  Ana Sayfa
                </span>
              </Link>
              <Link to="/members">
                <span className="B-18" style={{ color: "var(--gray-color)" }}>
                  Üyelerimiz
                </span>
              </Link>
              <span className="B-18">{member.name}</span>
            </Breadcrumbs>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              sx={{
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                alt={member.name}
                src={DoctorProfilePhoto}
                style={{
                  width: "100%",
                  height: "450px",
                  borderRadius: "16px 16px 0 0",
                }}
              />
              <CityBox>
                <span className="B-18" style={{ color: "var(--white-color)" }}>
                  {member.city}
                </span>
              </CityBox>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                backgroundColor: "transparent",
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "16px",
                padding: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack spacing={2} alignItems="flex-start">
                <span
                  className="H-44-56-700"
                  style={{ color: "var(--red-primary)" }}
                >
                  {member.name}
                </span>
                <span className="H-24">{member.role}</span>
                <span className="B-18" style={{ paddingTop: "16px" }}>
                  With more than 15 years of experience learning human
                  psychology and behavior, Dr. Jones is an expert in managing
                  mood disorders and anxiety disorders. Worked in community
                  mental health clinics, private practice, and academic medical
                  centers. Expertise in the treatment of mood disorders, anxiety
                  disorders, and psychotic disorders. Special interest in
                  women's mental health and perinatal psychiatry.Recognized for
                  research contributions with grants from the National Institute
                  of Mental Health (NIMH) and the American Foundation for
                  Suicide Prevention.
                </span>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "relative",
                  marginTop: "auto",
                }}
              >
                <Stack direction="row" spacing={1}>
                  {socialMedia.map((media, index) => {
                    const Icon = media.icon;
                    return (
                      <IconButton
                        key={index}
                        /* href={media.link} */
                        sx={{
                          backgroundColor: "var(--red-primary)",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "var(--red-secondary)",
                          },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default MemberDetail;
