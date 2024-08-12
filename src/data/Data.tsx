import Event1 from "../assets/images/event1.webp";
import Event2 from "../assets/images/event2.webp";
import Event3 from "../assets/images/event3.webp";
import Doctor3 from "../assets/images/doctor3.png";

export const events = [
  {
    id: 1,
    title: "Sinan Engin ile dernek üyelerimiz yemekte buluştu.",
    date: "30 Mayıs 2024",
    image: Event1,
    link: "#",
    description:
      "Dernek üyelerimiz ile Sinan Engin Etilerde bir akşam yemeğinde bir araya geldiler. Yönetici ve üyelerimizin bulunduğu yemekte Beşiktaş'ımızın dünü, bugünü ve yarını konuşuldu. Keyifli bir sohbet akşamı için davetimizi kırmayan sevgili Sinan Engin'e teşekkür ederiz.",
  },
  {
    id: 2,
    title: "İyi Günde Kötü Günde Tıbbiyeliler Hep Birlikte!",
    date: "18 Mayıs 2024",
    image: Event2,
    link: "#",
    description: [
      "<p>Beşiktaşlı Tıbbiyelilerimiz ile futbol takımımızı 2023-2024 sezonunun son iç saha maçında güzel bir organizasyon ile hep birlikte uğurladık.</p>",
      "<p>Çok zor geçen bir sezonun sonunda verilen bu güzel görüntü, camiamızın geleceği adına hepimizi umutlandırmıştır.</p>",
      "<p>Derneğimizin kurucu üyelerinden Uzm. Dr. Hicabi GÖKDERELİ hekim arkadaşlarımızı locasında ağırlayarak, derneğimize desteklerini her zaman olduğu gibi hissettirmiştir. Kendisine teşekkürlerimizi sunarız. Camiamızın zor günler geçirdiği bu dönemde dernek üyelerimizin tutkusu ve enerjisi, gelecekte çok daha güzel organizasyonlar yapacağımızın göstergesi olmuştur. Katılımlarından ötürü tüm üyelerimize teşekkür ederiz.</p>",
      "<p>Doç. Dr. Aytaç ŞAHİN</p>",
      "<p>Beşiktaşlı Tıbbiyeliler Derneği Genel Sekreteri</p>",
    ],
  },
  {
    id: 3,
    title: "Beşiktaşlı Tıbbiyeliler 14 Mart Tıp Bayramında Yemekte Buluştu",
    date: "14 Mart 2024",
    image: Event3,
    link: "#",
    description:
      "Kurucu hekimlerimiz her yıl yapmayı planladığımız yemeğimizin ilk buluşmasında yoğun bir katılım ile Nişantaşı'nda bir araya geldiler. Yemekte 14 Mart Tıp Bayramı kutlamaları ve iyi dilekler dile getirildi. 19.03.2024 tarihinde kurulacak olan derneğimizin amaçları, hedeflenen projeler büyük bir çoşku ve arzu ile konuşuldu. Derneğimizin kurucu başkanı Dr. Ali KILIÇ açılış konuşmasına davetlilerin 14 Mart Tıp Bayramını kutlayarak başladı. Konuşmasına bu güzel oluşuma desteklerinden ötürü tüm kurucu hekimlerimize teşekkürlerini ileterek devam eden başkanımız, geleceğe dair projelerini davetlilerle paylaştı. Tüm davetliler söz alarak görüş, öneri ve duygularını paylaştılar",
  },
];

export const members = [
  {
    id: 1,
    name: "Prof. Dr. Abdullah Emre YILDIRIM",
    gender: "male",
    role: "Bahçelievler Memorial Hastanesi Gastroenteroloji Uzmanı",
    expertise: "Gastroenteroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 2,
    name: "Doç. Dr. Ahmet Cem YARDIMCI",
    gender: "male",
    role: "Mersin Şehir Hastanesi Enfeksiyon Hastalıkları Uzmanı",
    expertise: "Enfeksiyon Hastalıkları",
    city: "Mersin",
    img: "",
  },
  {
    id: 3,
    name: "Uzm. Dr. Ahmet MERT",
    gender: "male",
    role: "Pendik Yüzyıl Hastanesi Ortopedi ve Travmatoloji Uzmanı",
    expertise: "Ortopedi ve Travmatoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 4,
    name: "Prof. Dr. Ahmet ÖCAL",
    gender: "male",
    role: "İlhan Varank EAH Kalp Damar Cerrahisi Uzmanı",
    expertise: "Kalp Damar Cerrahisi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 5,
    name: "Dr. Ali KILIÇ",
    gender: "male",
    role: "İstanbul Lokman Hekim Hastanesi Uçuş Hekimi & Kendi Muayenehanesi",
    expertise: "Uçuş Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 6,
    name: "Prof. Dr. Aras Emre CANDA",
    gender: "male",
    role: "Kendi Muayenehanesinde Genel Cerrahi Uzmanı",
    expertise: "Genel Cerrahi",
    city: "İzmir",
    img: "",
  },
  {
    id: 7,
    name: "Dr. Ayhan OPTUR",
    gender: "male",
    role: "BJK Basketbol ve Alt Yapılar Spor Hekimi",
    expertise: "Spor Hekimi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 8,
    name: "Doç. Dr. Aytaç ŞAHİN",
    gender: "male",
    role: "FSM EAH Üroloji Uzmanı",
    expertise: "Üroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 9,
    name: "Dr. Burak Fahri ÖZÇELİK",
    gender: "male",
    role: "İşyeri Hekimi",
    city: "İzmit",
    img: "",
  },
  {
    id: 10,
    name: "Uzm. Dr. Burak NAKIŞ",
    gender: "male",
    role: "Kahta Devlet Hastanesi Acil Tıp Uzmanı",
    expertise: "Acil Hekimliği",
    city: "Adıyaman",
    img: "",
  },
  {
    id: 11,
    name: "Uzm. Dr. Çağatay AK",
    gender: "male",
    role: "İlhan Varank EAH Gastroenteroloji Uzmanı",
    expertise: "Gastroenteroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 12,
    name: "Prof. Dr. Demet SOYLU",
    gender: "female",
    role: "Ankara Lokman Hekim Hastanesi Pediatri Uzmanı",
    expertise: "Pediatri",
    city: "Ankara",
    img: "",
  },
  {
    id: 13,
    name: "Uzm. Dr. Efe SOYDEMİR",
    gender: "male",
    role: "Marmara Üniversitesi Girişimsel Radyoloji Uzmanı",
    expertise: "Girişimsel Radyoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 14,
    name: "Prof. Dr. Egemen TURHAN",
    gender: "male",
    role: "Hacettepe Üniversitesi Ortopedi Uzmanı",
    expertise: "OrtoOrtopedi ve Travmatolojipedi",
    city: "Ankara",
    img: "",
  },
  {
    id: 15,
    name: "Uzm. Dr. Emine Ayla GÖKÇE",
    gender: "female",
    role: "Kendi Muayenehanesinde Plastik Cerrahi Uzmanı",
    expertise: "Plastik Cerrahi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 16,
    gender: "male",
    name: "Doç. Dr. Emrah ERMİŞ",
    role: "İstanbul Aydın Üniversitesi Kardiyoloji Uzmanı",
    expertise: "Kardiyoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 17,
    name: "Dr. Erdal Mahir CÜRAN",
    gender: "male",
    role: "NB Kadıköy Hastanesi Acil Tıp Hekimi ve İşyeri Hekimi",
    expertise: "İşyeri Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 18,
    name: "Doç. Dr. Ertuğrul ALTINBİLEK",
    gender: "male",
    role: "Şişli EAH Acil Tıp Uzmanı ve İdari Sorumlusu",
    expertise: "Acil Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 19,
    name: "Dt. Eser ÇARPAR",
    gender: "male",
    role: "Kendi Muayenehanesinde Çene Cerrahisi Uzmanı",
    expertise: "Çene Cerrahisi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 20,
    name: "Uzm. Dr. Ezgi ER",
    gender: "female",
    role: "Tuzla Devlet Hastanesi Kadın Hastalıkları ve Doğum Uzmanı",
    expertise: "Kadın Doğum",
    city: "İstanbul",
    img: "",
  },
  {
    id: 21,
    name: "Doç. Dr. Fatih DEMİRCİOĞLU",
    gender: "male",
    role: "Kendi Muayenehanesinde Pediatrik Hematoloji ve Onkoloji Uzmanı",
    expertise: "Pediatrik Hematoloji Onkoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 22,
    name: "Uzm. Dr. Fatih KILIÇ",
    gender: "male",
    role: "FSM EAH Yoğun Bakım Uzmanı",
    expertise: "Yoğun Bakım",
    city: "İstanbul",
    img: "",
  },
  {
    id: 23,
    name: "Doç. Dr. Fethi GÜL",
    gender: "male",
    role: "Marmara Üniversitesi Yoğun Bakım Uzmanı",
    expertise: "Yoğun Bakım",
    city: "İstanbul",
    img: "",
  },
  {
    id: 24,
    name: "Uzm. Dr. Gökhan GÜRBÜZ",
    gender: "male",
    role: "Kendi Muayenehanesinde KBB Uzmanı",
    expertise: "KBB",
    city: "İstanbul",
    img: "",
  },
  {
    id: 25,
    name: "Doç. Dr. Göksel DİKMEN",
    gender: "male",
    role: "Acıbadem Maslak Hastanesi Ortopedi Uzmanı & BJK Kadın Futbol Takımı Doktoru",
    expertise: "OrtoOrtopedi ve Travmatolojipedi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 26,
    name: "Uzm. Dr. Güner YURTSEVER",
    gender: "male",
    role: "İzmir Atatürk EAH Acil Tıp Uzmanı",
    expertise: "Acil Hekimliği",
    city: "İzmir",
    img: "",
  },
  {
    id: 27,
    name: "Uzm. Dr. Güneş TERZİ",
    gender: "female",
    role: "Anesteziyoloji ve Reanimasyon Uzmanı",
    expertise: "Anestezi",
    city: "İzmir",
    img: "",
  },
  {
    id: 28,
    name: "Prof. Dr. Gürhan ŞİŞMAN",
    gender: "male",
    role: "Acıbadem Altunizade Hastanesi Gastroenteroloji Uzmanı",
    expertise: "Gastroenteroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 29,
    name: "Dr. Dt. Halis ÖZSÜRMELİ",
    gender: "male",
    role: "Kendi Muayenehanesinde Ortodonti Uzmanı",
    expertise: "Protetik Diş Tedavisi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 30,
    name: "Dr. Hasan Bilal GÜLŞEN",
    gender: "male",
    role: "Tekirdağ Ergene Ulaş Aile Sağlığı Merkezi Aile Hekimi",
    expertise: "Aile Hekimliği",
    city: "Tekirdağ",
    img: "",
  },
  {
    id: 31,
    name: "Uzm. Dr. Hicabi GÖKDERELİ",
    gender: "male",
    role: "Özel Başarı Hastanesi Yöneyim Kurulu Başkanı",
    expertise: "Genel Cerrahi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 32,
    name: "Dr. İbrahim Avşın EMİRLER",
    gender: "male",
    role: "Anadolu Grubu İşyeri Hekimi",
    expertise: "Acil Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 33,
    name: "Uzm. Dr. İbrahim Emre EROL",
    gender: "male",
    role: "Özel Rumeli Hastanesi Dermatoloji Uzmanı",
    expertise: "Dermatoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 34,
    name: "Uzm. Dr. İbrahim Mesut ALTINIŞIK",
    gender: "male",
    role: "İstanbul Onkoloji Hastanesi Aile Hekimliği Uzmanı",
    expertise: "Aile Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 35,
    name: "Uzm. Dr. İlker ŞEN",
    gender: "male",
    role: "Şişli Hamidiye Etfal EAH Gastroenteroloji Uzmanı",
    expertise: "Gastroenteroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 36,
    name: "Dr. İlyas BOZKURT",
    gender: "male",
    role: "THY Sağlık Müdürü",
    expertise: "Uçuş Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 37,
    name: "Uzm. Dr. Mahmut SERT",
    gender: "male",
    role: "Taksim İlkyardım Hastanesi Ortopedi ve Travmatoloji Uzmanı",
    expertise: "Ortopedi ve Travmatoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 38,
    name: "Dr. Mehmet Akif BENK",
    gender: "male",
    role: "Liv Hospital Vadi İstanbul Hastanesi Genel Müdürü",
    expertise: "Hastane Yöneticiliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 39,
    name: "Uzm. Dr. Mehmet AYDOĞAN",
    gender: "male",
    role: "Liv Hospital Ulus Hastanesi Göğüs Hastalıkları Uzmanı",
    expertise: "Göğüs Hastalıkları",
    city: "İstanbul",
    img: "",
  },
  {
    id: 40,
    name: "Dr. Mehmet Ulvi ÜNAL",
    gender: "male",
    role: "İzmir Özel Medicana Hastanesi Genel Müdürü",
    expertise: "Hastane Yöneticiliği",
    city: "İzmir",
    img: "",
  },
  {
    id: 41,
    name: "Dr. Meziyet Tuba COŞKUN",
    gender: "female",
    role: "Kendi Muayenehanesinde Medikal Estetik Hekimi",
    expertise: "Medikal Estetik Hekimi",
    city: "Gaziantep",
    img: "",
  },
  {
    id: 42,
    name: "Uzm. Dr. Murat ÇAPAN",
    gender: "male",
    role: "Kırklareli Adli Tıp Şube Müdürlüğü Adli Tıp Uzmanı",
    expertise: "Adli Tıp",
    city: "Kırklareli",
    img: "",
  },
  {
    id: 43,
    name: "Prof. Dr. Murat TUNCER",
    gender: "male",
    role: "Medicana İstanbul Grubu Böbrek Nakli Sorumlusu & Nefroloji Uzmanı",
    expertise: "Nefroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 44,
    name: "Prof. Dr. Mustafa Levent GÖKGÖZ",
    gender: "male",
    role: "Gazi Üniversitesi Tıp Fakültesi Kalp Damar Cerrahi Ana Bilim Dalı Başkanı",
    expertise: "Kalp Damar Cerrahisi",
    city: "Ankara",
    img: "",
  },
  {
    id: 45,
    name: "Uzm. Dr. Mustafa Melih ERKAN",
    gender: "male",
    role: "Medicana İzmir Hastanesi Kadın Hastalıkları ve Doğum Uzmanı",
    expertise: "Kadın Doğum",
    city: "İzmir",
    img: "",
  },
  {
    id: 46,
    name: "Uzm. Dr. Nazlı Seda GÖKDERELİ",
    gender: "female",
    role: "FSM EAH Nöroloji Asistan Hekimi",
    expertise: "Nöroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 47,
    name: "Uzm. Dr. Nezih Onur ERMERAK",
    gender: "male",
    role: "Marmara Üniversitesi Göğüs Cerrahisi Uzmanı",
    expertise: "Göğüs Cerrahisi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 48,
    name: "Uzm. Dr. Onur ÇİFTÇİ",
    gender: "male",
    role: "Ankara Özel Güven Hastanesi KBB Uzmanı",
    expertise: "KBB Uzmanı",
    city: "Ankara",
    img: "",
  },
  {
    id: 49,
    name: "Prof. Dr. Onur YAPRAK",
    gender: "male",
    role: "Medipol Mega Hastanesi Organ Nakli Sorumlusu",
    expertise: "Organ Nakli",
    city: "İstanbul",
    img: "",
  },
  {
    id: 50,
    name: "Dt. Orhan BABAYİĞİT",
    gender: "male",
    role: "Kendi Kliniğinde Diş Hekimi",
    expertise: "Diş Hekimi",
    city: "Aydın",
    img: "",
  },
  {
    id: 51,
    name: "Doç. Dr. Osman Melih TOPÇUOĞLU",
    gender: "male",
    role: "Yeditepe Üniversitesi Girişimsel Radyoloji Sorumlusu",
    expertise: "Girişimsel Radyoloji",
    city: "İzmit",
    img: "",
  },
  {
    id: 52,
    name: "Prof. Dr. Ömer Lütfi TAPISIZ",
    gender: "male",
    role: "Kendi Muayenehanesinde Kadın Hastalıkları ve Doğum Uzmanı",
    expertise: "Ortopedi ve Travmatoloji",
    city: "Ankara",
    img: "",
  },

  {
    id: 53,
    name: "Prof. Dr. Ramazan Erden ERTÜRER",
    gender: "male",
    role: "Liv Hospital Ulus Hastanesi Ortopedi ve Travmatoloji Uzmanı",
    expertise: "Ortopedi ve Travmatoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 54,
    name: "Prof. Dr. Salih BOĞA",
    gender: "male",
    role: "Bahçelievler Memorial Hastanesi Gastroenteroloji Uzmanı",
    expertise: "Gastroenteroloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 55,
    name: "Dr. Serkan KARA",
    gender: "male",
    role: "Bayer İşyeri Hekimi",
    expertise: "İşyeri Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 56,
    name: "Prof. Dr. Suat KÜÇÜKGÖNCÜ",
    gender: "male",
    role: "Maltepe Üniversitesi Tıp Fakültesi Psikiyatri Bölüm Başkanı",
    expertise: "Psikiyatri",
    city: "İstanbul",
    img: "",
  },
  {
    id: 57,
    name: "Prof. Dr. Tekin Ahmet SEREL",
    gender: "male",
    role: "Süleyman Demirel Üniversitesi Tıp Fakültesi Üroloji Ana Bilim Dalı Öğretim Üyesi",
    expertise: "Üroloji",
    city: "Isparta",
    img: "",
  },
  {
    id: 58,
    name: "Doç. Dr. Tekin Kerem ÜLKÜ",
    gender: "male",
    role: "Altunizade Acıbadem Hastanesi Ortopedi ve Travmatoloji Uzmanı & BJK Futbol A Takım Doktoru",
    expertise: "Ortopedi ve Travmatoloji",
    city: "İstanbul",
    img: "",
  },
  {
    id: 59,
    name: "Uzm. Dr. Turhan ŞALVA",
    gender: "male",
    role: "Başak Group Yönetim Kurulu Başkanı",
    expertise: "Halk Sağlığı",
    city: "İstanbul",
    img: "",
  },
  {
    id: 60,
    name: "Prof. Dr. Üzeyir GÜNENÇ",
    gender: "male",
    role: "Dokuz Eylül Üniversitesi Tıp Fakültesi Göz Ana Bilim Dalı Başkanı",
    expertise: "Göz Hastalıkları",
    city: "İzmir",
    img: "",
  },
  {
    id: 61,
    name: "Uzm. Dr. Volkan ANAKLI",
    gender: "male",
    role: "Bahçelievler Memorial Hastanesi Anesteziyoloji ve Reanimasyon Uzmanı",
    expertise: "Anestezi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 62,
    name: "Dt. Yaşar BAYTAK",
    gender: "male",
    role: "Kendi Muayenehanesinde Diş Hekimi",
    expertise: "Diş Hekimi",
    city: "İstanbul",
    img: "",
  },
  {
    id: 63,
    name: "Uzm. Dr. Yavuz GÜVEN",
    gender: "male",
    role: "Kadıköy 25 Nolu ASM Aile Hekimliği Uzmanı",
    expertise: "Aile Hekimliği",
    city: "İstanbul",
    img: "",
  },
  {
    id: 64,
    name: "Doç. Dr. Yiğit CANGA",
    gender: "male",
    role: "Florans Nightingale Ataşehir Hastanesi Kardiyoloji Uzmanı",
    expertise: "Kardiyoloji",
    city: "İstanbul",
    img: "",
  },
];

export const boardOfDirectors = [
  {
    name: "Dr. Ali KILIÇ",
    position: "Yönetim Kurulu Başkanı",
    image: Doctor3,
  },
  {
    name: "Uzm. Dr. Yavuz GÜVEN",
    position: "Yönetim Kurulu Başkan Yardımcısı",
    image: Doctor3,
  },
  {
    name: "Doç. Dr. Aytaç ŞAHİN",
    position: "Genel Sekreter",
    image: Doctor3,
  },
  {
    name: "Uzm. Dr. Mehmet AYDOĞAN",
    position: "Yönetim Kurulu Üyesi",
    image: Doctor3,
  },
  {
    name: "Uzm. Dr. Mahmut SERT",
    position: "Yönetim Kurulu Üyesi",
    image: Doctor3,
  },
  {
    name: "Prof. Dr. Salih BOĞA",
    position: "Yönetim Kurulu Üyesi",
    image: Doctor3,
  },
  {
    name: "Prof. Dr. Abdullah Emre YILDIRIM",
    position: "Yönetim Kurulu Üyesi",
    image: Doctor3,
  },
];

export const cities = [
  { name: "Adana" },
  { name: "Adıyaman" },
  { name: "Afyonkarahisar" },
  { name: "Ağrı" },
  { name: "Aksaray" },
  { name: "Amasya" },
  { name: "Ankara" },
  { name: "Antalya" },
  { name: "Ardahan" },
  { name: "Artvin" },
  { name: "Aydın" },
  { name: "Balıkesir" },
  { name: "Bartın" },
  { name: "Batman" },
  { name: "Bayburt" },
  { name: "Bilecik" },
  { name: "Bingöl" },
  { name: "Bitlis" },
  { name: "Bolu" },
  { name: "Burdur" },
  { name: "Bursa" },
  { name: "Çanakkale" },
  { name: "Çankırı" },
  { name: "Çorum" },
  { name: "Denizli" },
  { name: "Diyarbakır" },
  { name: "Düzce" },
  { name: "Edirne" },
  { name: "Elazığ" },
  { name: "Erzincan" },
  { name: "Erzurum" },
  { name: "Eskişehir" },
  { name: "Gaziantep" },
  { name: "Giresun" },
  { name: "Gümüşhane" },
  { name: "Hakkari" },
  { name: "Hatay" },
  { name: "Iğdır" },
  { name: "Isparta" },
  { name: "İstanbul" },
  { name: "İzmir" },
  { name: "Kahramanmaraş" },
  { name: "Karabük" },
  { name: "Karaman" },
  { name: "Kars" },
  { name: "Kastamonu" },
  { name: "Kayseri" },
  { name: "Kırıkkale" },
  { name: "Kırklareli" },
  { name: "Kırşehir" },
  { name: "Kilis" },
  { name: "Kocaeli" },
  { name: "Konya" },
  { name: "Kütahya" },
  { name: "Malatya" },
  { name: "Manisa" },
  { name: "Mardin" },
  { name: "Mersin" },
  { name: "Muğla" },
  { name: "Muş" },
  { name: "Nevşehir" },
  { name: "Niğde" },
  { name: "Ordu" },
  { name: "Osmaniye" },
  { name: "Rize" },
  { name: "Sakarya" },
  { name: "Samsun" },
  { name: "Siirt" },
  { name: "Sinop" },
  { name: "Sivas" },
  { name: "Şanlıurfa" },
  { name: "Şırnak" },
  { name: "Tekirdağ" },
  { name: "Tokat" },
  { name: "Trabzon" },
  { name: "Tunceli" },
  { name: "Uşak" },
  { name: "Van" },
  { name: "Yalova" },
  { name: "Yozgat" },
  { name: "Zonguldak" },
];

export const expertises = [
  { name: "Acil Hekimliği" },
  { name: "Pediatri" },
  { name: "Kalp Damar Cerrahisi" },
  { name: "KBB Uzmanı" },
  { name: "Üroloji" },
  { name: "Diş hekimi" },
  { name: "Medikal Estetik Hekimi" },
  { name: "Gastroenteroloji" },
  { name: "Uçuş Hekimliği" },
  { name: "Spor Hekimi" },
  { name: "Girişimsel Radyoloji" },
  { name: "Plastik Cerrahi" },
  { name: "Kardiyoloji" },
  { name: "İşyeri Hekimliği" },
  { name: "Kadın Doğum" },
  { name: "Pediatrik Hematoloji Onkoloji" },
  { name: "Yoğun Bakım" },
  { name: "KBB" },
  { name: "Genel Cerrahi" },
  { name: "Dermatoloji" },
  { name: "Aile Hekimliği" },
  { name: "Ortopedi ve Travmatoloji" },
  { name: "Hastane Yöneticiliği" },
  { name: "Göğüs Hastalıkları" },
  { name: "Nefroloji" },
  { name: "Nöroloji" },
  { name: "Göğüs Cerrahisi" },
  { name: "Organ Nakli" },
  { name: "Psikiyatri" },
  { name: "Halk Sağlığı" },
  { name: "Anestezi" },
  { name: "Çene Cerrahisi" },
  { name: "Protetik Diş Tedavisi" },
  { name: "Göz Hastalıkları" },
  { name: "Adli Tıp" },
  { name: "Enfeksiyon Hastalıkları" },
];
