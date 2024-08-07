import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  IconButton,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { members } from "../../../../data/Data";
import { cities } from "../../../../data/Data";
import DoctorProfilePhoto from "../../../../assets/images/doctor3.png";
import { SelectChangeEvent } from "@mui/material";

const TitleSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2, 2),
}));

const DoctorCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  },
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const CityBox = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--red-primary)",
  color: "#fff",
  borderRadius: "8px",
  padding: theme.spacing(1),
  top: "0",
}));

const MembersPerPage = 12;

const Members = () => {
  const [page, setPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState("");
  const memberCities = new Set(members.map((member) => member.city));
  const availableCities = cities.filter((city) => memberCities.has(city.name));

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value as string);
  };

  const filteredMembers = members.filter(
    (member) => selectedCity === "" || member.city === selectedCity
  );

  const paginatedMembers = filteredMembers.slice(
    (page - 1) * MembersPerPage,
    page * MembersPerPage
  );

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg-color)",
        height: "100%",
        paddingBottom: "100px",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <div className="container">
        <TitleSection>
          <span className="H-44-56-700">Üyelerimiz</span>
        </TitleSection>
        <Grid container spacing={4}>
          <Grid item xs={12} my={4}>
            <Select
              value={selectedCity}
              onChange={handleCityChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="">
                <em>Tüm Şehirler</em>
              </MenuItem>
              {availableCities.map((city) => (
                <MenuItem key={city.name} value={city.name}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {paginatedMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DoctorCard>
                <Stack>
                  <img
                    alt={member.name}
                    src={DoctorProfilePhoto}
                    style={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <CityBox>
                    <span
                      className="B-18"
                      style={{ color: "var(--white-color)" }}
                    >
                      {member.city}
                    </span>
                  </CityBox>
                </Stack>
                <CardContent>
                  <Stack spacing={1}>
                    <span className="H-24">{member.name}</span>
                    <span className="B-18">{member.role}</span>
                  </Stack>
                </CardContent>
                <Box mb={2}>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </DoctorCard>
            </Grid>
          ))}
        </Grid>
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(filteredMembers.length / MembersPerPage)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "var(--red-primary)",
                width: "40px",
                height: "40px",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: "var(--red-secondary)",
                color: "#fff",
              },
              "& .MuiPaginationItem-page:hover": {
                backgroundColor: "var(--red-primary)",
                color: "#fff",
              },
            }}
          />
        </Box>
      </div>
    </section>
  );
};

export default Members;
