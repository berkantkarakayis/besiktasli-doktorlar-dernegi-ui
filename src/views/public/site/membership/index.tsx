import React, { useState } from "react";
import TitleSectionComponent from "../../../../components/core-components/titleSection";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Countdown from "../../../../components/core-components/countdownCard";
import CountdownBgImage from "../../../../assets/images/countdown-bg.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LoadingButton } from "@mui/lab";
import DownloadIcon from "@mui/icons-material/Download";

function Membership() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [loadingBasvuruPdf, setLoadingBasvuruPdf] = useState(false);
  const [loadingBasvuruDocx, setLoadingBasvuruDocx] = useState(false);
  const [loadingUyelik, setLoadingUyelik] = useState(false);

  const handleDownloadBasvuruPdf = async () => {
    setLoadingBasvuruPdf(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Beşiktaşlı Tıbbiyeliler Derneği Başvuru Formu.pdf";
      link.download = "besiktasli-doktorlar-dernegi-basvuru-formu.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoadingBasvuruPdf(false);
    }, 2000);
  };

  const handleDownloadBasvuruDocx = async () => {
    setLoadingBasvuruDocx(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Beşiktaşlı Tıbbiyeliler Derneği Başvuru Formu.docx";
      link.download = "besiktasli-doktorlar-dernegi-basvuru-formu.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoadingBasvuruDocx(false);
    }, 2000);
  };

  const handleDownloadUyelik = async () => {
    setLoadingUyelik(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/BJK_Uyelik_Formu.pdf";
      link.download = "BJK_Uyelik_Formu.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoadingUyelik(false);
    }, 2000);
  };

  return (
    <section
      id="membership"
      style={{
        backgroundColor: "var(--bg-color)",
        height: "100%",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <TitleSectionComponent titleText="Üyelik" />
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12}>
            <Box
              sx={{
                position: "relative",
                color: "#fff",
                textAlign: "center",
                padding: isMobile ? "50px 0" : "100px 0",
                borderRadius: "16px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundImage: `url(${CountdownBgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "16px",

                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "16px",
                  },
                }}
              />
              <Stack
                spacing={isMobile ? 2 : 4}
                sx={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  className={isMobile ? "H-30-30-600" : "H-50-54-700"}
                  style={{ color: "var(--white-color)" }}
                >
                  5.000 TL Giriş Aidatı Fırsatını Kaçırmayın
                </span>
                <span
                  className={isMobile ? "H-24" : "H-30-30-600"}
                  style={{
                    color: "var(--white-color)",
                    maxWidth: "80%",
                    alignSelf: "center",
                  }}
                >
                  Beşiktaş Jimnastik Kulübü Kongre Üyeliği için geç kalmayın.
                  Başvuru için son tarih 31 Aralık!
                </span>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    mt: 4,
                    padding: "20px",
                  }}
                >
                  <Countdown targetDate="2025-01-01T00:00:00" />
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <p className="B-18">
                Kulübümüze üye olmanın giriş ücreti{" "}
                <span style={{ fontWeight: 700 }}>5.000 TL</span>
                'dir, yıllık aidatlar ise{" "}
                <span style={{ fontWeight: 700 }}>250 TL</span>'dir. Üyelik
                ücretinizi ve ilk yıl için aidatınızı nakit olarak
                ödeyebileceğiniz gibi kredi kartı imkanından da
                faydalanabilirsiniz.
              </p>
              <p className="B-18">
                <Stack>
                  <span style={{ fontWeight: 700 }}>
                    Beşiktaş JK Derneği hesap numaramız:
                  </span>
                  <span>Denizbank – Ataşehir Tic. Mrk. Şb.</span>
                  IBAN: TR 51 0013 4000 0009 8546 8000 98
                </Stack>
              </p>
              <p className="B-18">
                4 sayfadan oluşan{" "}
                <span style={{ fontWeight: 700 }}>
                  "Beşiktaş Jimnastik Kulübü Üyelik Başvuru Formu"
                </span>{" "}
                dolduran taraftarlarımız ayrıca;
              </p>
              <span className="B-18" style={{ paddingLeft: "20px" }}>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    1 adet Noter'den tasdikli Nüfus Cüzdanı Sureti (veya
                    vukuatlı nüfus örneği)
                  </li>
                  <li>
                    1 adet ikamet edilen Mahalle Muhtarlığı'ndan alınmış
                    İkametgah Belgesi,
                  </li>
                  <li>
                    1 adet Savcılık'tan Adli Sicil Belgesi,
                    <em>
                      (istenilen belgeler, e-Devlet'ten temin edilebilir.)
                    </em>
                  </li>
                  <li>
                    4 adet renkli ve son 6 ay içerisinde çekilmiş vesikalık
                    fotoğraf,
                  </li>
                  <li>
                    Kredi kartı bilgisini paylaşmayan üyeler için "5250 TL"
                    ödeme dekontu. (açıklamaya isim ve T.C. yazılmalı)
                  </li>
                </ul>
              </span>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <TitleSectionComponent
              titleText="E-Devlet ile Üyelik"
              textAlign="center"
            />
            <Stack spacing={3}>
              <p className="B-18">
                Derneğimize elektronik imzası olan üye adaylarımız E-Devlet ile
                online başvuru yapabilirler.
              </p>
              <p className="B-18">
                Sistem sadece iki evrak yüklenmesini kabul ettiği için gereken
                evrakları tek PDF yaparak yüklemeniz işlemleri hızlandıracaktır.
              </p>
              <p className="B-18">
                Son 6 ayda çekilmiş fotoğrafınızı da yüklemenizi rica ederiz.
                Evrak ve Fotoğrafınızı mail yolu ile de iletebilirsiniz.
              </p>
              <p className="B-18">Dikkat Edilmesi Gerekenler!</p>
              <span className="B-18" style={{ paddingLeft: "20px" }}>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    E-Devlete <span style={{ fontWeight: 700 }}>E-İmza </span>
                    ile giriş yapılmalı
                  </li>
                  <li>
                    Dernek Kütük Numaramız:{" "}
                    <span style={{ fontWeight: 700 }}>34286081</span>
                  </li>
                  <li>
                    1 adet Savcılık'tan{" "}
                    <span style={{ fontWeight: 700 }}>Adli Sicil Belgesi</span>
                  </li>
                  <li>
                    Dernek Adı:{" "}
                    <span style={{ fontWeight: 700 }}>
                      BEŞİKTAŞLI TIBBİYELİLER DERNEĞİ
                    </span>{" "}
                    (Büyük Harf kullanılmalı)
                  </li>
                </ul>
              </span>
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
                onClick={() =>
                  window.open(
                    "https://www.turkiye.gov.tr/icisleri-dernek-uyelik-basvurusu",
                    "_blank"
                  )
                }
              >
                <span className="B-18" style={{ color: "var(--white-color)" }}>
                  E-devlet İle Başvur
                </span>
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <TitleSectionComponent
              titleText="Gerekli Evraklar"
              textAlign="left"
            />
            <Stack spacing={3}>
              <span className="B-18" style={{ paddingLeft: "20px" }}>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Tıp veya Diş Hekimliği diploma fotokopisi (e-devletten
                    Yüksek Öğretim Mezun Belgesi de oluşturulabilir)
                  </li>
                  <li>1 vukuatlı nüfus kayıt örneği (e-devletten alınabilir</li>
                  <li>
                    1 adet ikamet edilen mahalle muhtarlığından alınmış
                    ikametgah belgesi (e-devletten ikametgah belgesi alınabilir)
                  </li>
                  <li>
                    1 adet savcılıktan adli sicil belgesi (e-devletten adli
                    sicil belgesi alınabilir)
                  </li>
                  <li>
                    2 adet renkli ve son 6 ay içerisinde çekilmiş vesikalık
                    fotoğraf{" "}
                  </li>
                  <li>
                    Tıp veya Diş Hekimliği Fakültesi öğrencileri için öğrenci
                    belgesi{" "}
                  </li>
                </ul>
              </span>
            </Stack>
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <TitleSectionComponent
              titleText="Hesap Bilgilerimiz"
              textAlign="left"
            />
            <Stack spacing={1}>
              <p className="B-18">
                <span style={{ fontWeight: 700 }}>Hesap Sahibi: </span>
                BEŞİKTAŞLI TIBBİYELİLER DERNEĞİ
              </p>
              <p className="B-18">
                <span style={{ fontWeight: 700 }}>IBAN: </span>{" "}
                TR490006701000000022956400
              </p>
              <p className="B-18">
                <span style={{ fontWeight: 700 }}>Hesap No: </span> 22956400 TL
              </p>
              <p className="B-18">Yapıkredi Bankası</p>
              <p className="B-18">Açıklama Kısmına isim soyisim yazın lütfen</p>
              <p className="B-18">
                {" "}
                Derneğimizin giriş ücreti 2.500 TL olup yıllık aidatı 2024 yılı
                için 1.500 TL’dir. (Öğrenciler için %50 indirim uygulanacaktır.){" "}
              </p>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <TitleSectionComponent
              titleText="Başvuru ve Üyelik Formları"
              textAlign="left"
            />
            <Stack spacing={1}>
              <Grid container spacing={1}>
                <Grid item xs={isMobile ? 12 : 4}>
                  <LoadingButton
                    variant="contained"
                    loading={loadingBasvuruPdf}
                    onClick={handleDownloadBasvuruPdf}
                    loadingIndicator="İndiriliyor..."
                    startIcon={<DownloadIcon />}
                    sx={{
                      width: "100%",
                      backgroundColor: "#333",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px 20px",
                      height: "80px",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                  >
                    <span className="B-18" style={{ color: "#fff" }}>
                      Beşiktaşlı Tıbbiyeliler Derneği Başvuru Formu (PDF)
                    </span>
                  </LoadingButton>
                </Grid>
                <Grid item xs={isMobile ? 12 : 4}>
                  <LoadingButton
                    variant="contained"
                    loading={loadingBasvuruDocx}
                    onClick={handleDownloadBasvuruDocx}
                    loadingIndicator="İndiriliyor..."
                    startIcon={<DownloadIcon />}
                    sx={{
                      width: "100%",
                      backgroundColor: "#333",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px 20px",
                      height: "80px",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                  >
                    <span className="B-18" style={{ color: "#fff" }}>
                      Beşiktaşlı Tıbbiyeliler Derneği Başvuru Formu (DOCX)
                    </span>
                  </LoadingButton>
                </Grid>
                <Grid item xs={isMobile ? 12 : 4}>
                  <LoadingButton
                    variant="contained"
                    loading={loadingUyelik}
                    onClick={handleDownloadUyelik}
                    loadingIndicator="İndiriliyor..."
                    startIcon={<DownloadIcon />}
                    sx={{
                      width: "100%",
                      backgroundColor: "#333",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px 20px",
                      height: "80px",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                  >
                    <span className="B-18" style={{ color: "#fff" }}>
                      BJK Üyelik Formu (PDF)
                    </span>
                  </LoadingButton>
                </Grid>
              </Grid>

              <p className="B-18">
                Evraklarınızı info@besiktaslitibbiyeliler.org adresine mail
                atabilir veya kargo ile asıllarını Dr. Ali KILIÇ adına aşağıdaki
                adrese gönderebilirsiniz.
              </p>
              <p className="B-18">
                Suadiye Mah. Bağdat cad. No:359/6 Kadıköy / İstanbul
              </p>
            </Stack>
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <TitleSectionComponent
              titleText="Nasıl Referans Bulabilirim?"
              textAlign="left"
            />
            <p className="B-18">
              Kulübümüze üyelik için referans bulmakta zorlanan tıp ve diş
              hekimi ve bu bölümlerde okuyan öğrenci üyelerimiz için dernek
              sekreterimize ulaşmaları halinde destek olunacaktır.
            </p>
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <TitleSectionComponent
              titleText="Ücret Yatırılmalı mı?"
              textAlign="left"
            />
            <p className="B-18">
              11 Mayıs ta yapılan Tüzük Tadil Kongresinden sonra yapılacak
              başvurularda mail order için kredi kartı bilgileri veya ödeme
              dekontu istenilmektedir.
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Membership;
