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
  Checkbox,
  ListItemText,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { members } from "../../../../data/Data";
import { cities } from "../../../../data/Data";
import DoctorProfilePhoto from "../../../../assets/images/doctor3.png";
import { SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TitleSectionComponent from "../../../../components/core-components/titleSection";

const DoctorCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
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

const turkishCharMap: Record<string, string> = {
  ç: "c",
  Ç: "C",
  ğ: "g",
  Ğ: "G",
  ı: "i",
  I: "I",
  İ: "I",
  ö: "o",
  Ö: "O",
  ş: "s",
  Ş: "S",
  ü: "u",
  Ü: "U",
};

const replaceTurkishChars = (str: string): string => {
  return str.replace(/[çÇğĞıİöÖşŞüÜ]/g, (char: string) => turkishCharMap[char]);
};

const Members = () => {
  const [page, setPage] = useState(1);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const memberCities = new Set(members.map((member) => member.city));
  const availableCities = cities.filter((city) => memberCities.has(city.name));
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleCityChange = (
    event: SelectChangeEvent<typeof selectedCities>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedCities(typeof value === "string" ? value.split(",") : value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = members
    .filter(
      (member) =>
        selectedCities.length === 0 || selectedCities.includes(member.city)
    )
    .filter((member) =>
      replaceTurkishChars(member.name.toLowerCase()).includes(
        replaceTurkishChars(searchTerm.toLowerCase())
      )
    );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <TitleSectionComponent titleText="Üyelerimiz" />

        <Grid container spacing={4}>
          <Grid item xs={6} my={4}>
            <Select
              multiple
              value={selectedCities}
              onChange={handleCityChange}
              displayEmpty
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Tüm Şehirler</em>;
                }
                return selected.join(", ");
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                  "&.Mui-selected, &.Mui-selected:hover": {
                    backgroundColor: "grey",
                  },
                },
              }}
            >
              {availableCities.map((city) => (
                <MenuItem key={city.name} value={city.name}>
                  <Checkbox checked={selectedCities.indexOf(city.name) > -1} />
                  <ListItemText primary={city.name} />
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6} my={4}>
            <TextField
              fullWidth
              label="Üye ara"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#000",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {paginatedMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DoctorCard>
                <Stack>
                  <img
                    onClick={() =>
                      navigate(`/uyeler/${member.id}/${member.name}`)
                    }
                    alt={member.name}
                    src={DoctorProfilePhoto}
                    style={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "16px 16px 0 0",
                      cursor: "pointer",
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
                    <Box
                      onClick={() =>
                        navigate(`/uyeler/${member.id}/${member.name}`)
                      }
                      sx={{ cursor: "pointer" }}
                    >
                      <span className="H-24">{member.name}</span>
                    </Box>
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
