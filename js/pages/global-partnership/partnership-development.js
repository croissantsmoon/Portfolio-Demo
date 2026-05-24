// Partnership Development — interactive partner showcase

// ── DATA ─────────────────────────────────────────────────────────────────────

const pdIntlData = [
  {name:'Daffodil International University',country:'Bangladesh'},
  {name:'Southern University Bangladesh',country:'Bangladesh'},
  {name:'Beijing University of Posts and Telecommunication (BUPT)',country:'China'},
  {name:'Hua Qiao University',country:'China'},
  {name:'Yangzhou University',country:'China'},
  {name:'Zhejiang Yuexiu University of Foreign Languages',country:'China'},
  {name:'Anhui University',country:'China'},
  {name:'Chaoshan Vocational and Technical College',country:'China'},
  {name:'Fujian Polytechnic Normal University (FPNU)',country:'China'},
  {name:'Guangdong University of Foreign Studies (GDUFS)',country:'China'},
  {name:'Guangdong University of Science and Technology (GDUT)',country:'China'},
  {name:'Guangxi Normal University',country:'China'},
  {name:'Guangzhou College of Commerce (GCC)',country:'China'},
  {name:'Guangzhou Huanan Business College',country:'China'},
  {name:'Guangzhou Nanyang Polytechnic College',country:'China'},
  {name:'Hunan City University',country:'China'},
  {name:'Nanjing University of Aeronautics and Astronautics (NUAA)',country:'China'},
  {name:'School of Economics, Fudan University',country:'China'},
  {name:'Tianjin Foreign Studies University (TFSU)',country:'China'},
  {name:'University of Saint Joseph',country:'China'},
  {name:"Xi'an Jiaotong-Liverpool University (XJTLU)",country:'China'},
  {name:'Cambodian University for Specialties (CUS)',country:'Cambodia'},
  {name:'National University of Management (NUM)',country:'Cambodia'},
  {name:'Royal University of Phnom Penh (RUPP)',country:'Cambodia'},
  {name:'University of Puthisastra',country:'Cambodia'},
  {name:'University of the Fraser Valley (UFV)',country:'Canada'},
  {name:'Rennes School of Business',country:'France'},
  {name:'Hochschule Fresenius University of Applied Sciences',country:'Germany'},
  {name:'Hochschule Mainz - University of Applied Sciences',country:'Germany'},
  {name:'Osnabrück University of Applied Sciences',country:'Germany'},
  {name:'University of Applied Sciences Darmstadt (h_da)',country:'Germany'},
  {name:'FH Münster University of Applied Sciences',country:'Germany'},
  {name:'Centennial College',country:'Hong Kong'},
  {name:'City University of Hong Kong (CityU)',country:'Hong Kong'},
  {name:'Lingnan University',country:'Hong Kong'},
  {name:'The Education University of Hong Kong',country:'Hong Kong'},
  {name:'Budapest University of Technology and Economics',country:'Hungary'},
  {name:'Assam Down Town University',country:'India'},
  {name:'Lady Doak College',country:'India'},
  {name:'Vellore Institute of Technology (VIT)',country:'India'},
  {name:'VIT Bhopal University',country:'India'},
  {name:'VIT-AP University',country:'India'},
  {name:'Athlone Institute of Technology',country:'Ireland'},
  {name:'Asia University',country:'Japan'},
  {name:'Clark Memorial International High School',country:'Japan'},
  {name:'International Christian University (ICU)',country:'Japan'},
  {name:'International Pacific University (IPU)',country:'Japan'},
  {name:'Josai International University',country:'Japan'},
  {name:'Kaichi International University',country:'Japan'},
  {name:'Kansai Gaidai University',country:'Japan'},
  {name:'Kansai University of International Studies',country:'Japan'},
  {name:'Kwansei Gakuin University',country:'Japan'},
  {name:'Meiji University',country:'Japan'},
  {name:'Momoyama Gakuin University',country:'Japan'},
  {name:'Nihon University',country:'Japan'},
  {name:'Shizuoka University',country:'Japan'},
  {name:'Sophia University',country:'Japan'},
  {name:'University of Niigata Prefecture',country:'Japan'},
  {name:'Mykolas Romeris University',country:'Lithuania'},
  {name:'Macau Millennium College (MMC)',country:'Macau'},
  {name:'Macau University of Science and Technology',country:'Macau'},
  {name:'Asia Pacific University of Technology & Innovation (APU)',country:'Malaysia'},
  {name:'Holiday Inn Melaka',country:'Malaysia'},
  {name:'INTI International University',country:'Malaysia'},
  {name:'Sunway University',country:'Malaysia'},
  {name:'Tunku Abdul Rahman University of Management and Technology (TARUMT)',country:'Malaysia'},
  {name:'UCSI University',country:'Malaysia'},
  {name:'Universiti Malaysia Perlis (UniMAP)',country:'Malaysia'},
  {name:'Universiti Malaysia Sarawak (UNIMAS)',country:'Malaysia'},
  {name:'Universiti Sains Malaysia (USM)',country:'Malaysia'},
  {name:'Universiti Teknologi MARA (UiTM)',country:'Malaysia'},
  {name:'Universiti Tun Hussein Onn Malaysia (UTHM)',country:'Malaysia'},
  {name:'Universiti Tunku Abdul Rahman (UTAR)',country:'Malaysia'},
  {name:'German-Mongolian Institute for Resources and Technology (GMIT)',country:'Mongolia'},
  {name:'Huree University of Information and Communication Technology',country:'Mongolia'},
  {name:'Fontys University of Applied Sciences',country:'Netherlands'},
  {name:'Inholland University of Applied Sciences',country:'Netherlands'},
  {name:'Saxion University of Applied Sciences',country:'Netherlands'},
  {name:'Massey University',country:'New Zealand'},
  {name:'Bicol University',country:'Philippines'},
  {name:'Camarines Sur Polytechnic Colleges',country:'Philippines'},
  {name:'Central Bicol State University of Agriculture San Jose',country:'Philippines'},
  {name:'Central Philippine University',country:'Philippines'},
  {name:'Iloilo Science and Technology University',country:'Philippines'},
  {name:'Northwest Samar State University',country:'Philippines'},
  {name:'Panpacific University',country:'Philippines'},
  {name:'Philippine Christian University',country:'Philippines'},
  {name:'Philippine Normal University',country:'Philippines'},
  {name:'Samar State University',country:'Philippines'},
  {name:'Silliman University',country:'Philippines'},
  {name:'University of Mindanao',country:'Philippines'},
  {name:'University of St. La Salle',country:'Philippines'},
  {name:'University of the East',country:'Philippines'},
  {name:'AGH University of Science and Technology',country:'Poland'},
  {name:'Poznań University of Life Science',country:'Poland'},
  {name:'Lusofona University of Humanities and Technologies',country:'Portugal'},
  {name:'Stefan Cel Mare University of Suceava',country:'Romania'},
  {name:'James Cook University (JCU)',country:'Singapore'},
  {name:'National University of Singapore (NUS)',country:'Singapore'},
  {name:'Ngee Ann Polytechnic (NP)',country:'Singapore'},
  {name:'Singapore University of Technology and Design (SUTD)',country:'Singapore'},
  {name:'Busan Digital University (BDU)',country:'South Korea'},
  {name:'Busan University of Foreign Studies',country:'South Korea'},
  {name:'Changwon National University',country:'South Korea'},
  {name:'Chodang University',country:'South Korea'},
  {name:'Dankook University (DKU)',country:'South Korea'},
  {name:'Dongseo University',country:'South Korea'},
  {name:'Hankuk University of Foreign Studies',country:'South Korea'},
  {name:'Hannam University',country:'South Korea'},
  {name:'Keimyung University',country:'South Korea'},
  {name:'Myongji University',country:'South Korea'},
  {name:'Pusan National University',country:'South Korea'},
  {name:'Sogang Business School, Sogang University',country:'South Korea'},
  {name:'SolBridge International School of Business (Woosong University)',country:'South Korea'},
  {name:'Soongsil University',country:'South Korea'},
  {name:'Woosong University',country:'South Korea'},
  {name:'Yonsei University',country:'South Korea'},
  {name:'International Hotel Management Institute',country:'Switzerland'},
  {name:'Chang Jung Christian University',country:'Taiwan'},
  {name:'Chung Yuan Christian University',country:'Taiwan'},
  {name:'Fu Jen Catholic University',country:'Taiwan'},
  {name:'I-Shou University',country:'Taiwan'},
  {name:'Kun Shan University',country:'Taiwan'},
  {name:'Ming Chuan University',country:'Taiwan'},
  {name:'National Central University',country:'Taiwan'},
  {name:'National Chi Nan University',country:'Taiwan'},
  {name:'National Ilan University',country:'Taiwan'},
  {name:'National Kaohsiung University of Science and Technology (NKUST)',country:'Taiwan'},
  {name:'National Sun Yat-Sen University (NSYSU)',country:'Taiwan'},
  {name:'National Taiwan University of Science and Technology (NTUST)',country:'Taiwan'},
  {name:'Tunghai University',country:'Taiwan'},
  {name:'Wenzao Ursuline University of Languages',country:'Taiwan'},
  {name:'Yuan Ze University Taoyuan',country:'Taiwan'},
  {name:'Bangkok University',country:'Thailand'},
  {name:'Naresuan University',country:'Thailand'},
  {name:'Siam University',country:'Thailand'},
  {name:'Silpakorn University',country:'Thailand'},
  {name:'Srinakharinwirot University (SWU)',country:'Thailand'},
  {name:'Thai-Nichi Institute of Technology',country:'Thailand'},
  {name:"Universidade Nacional Timor Lorosa'e (UNTL)",country:'Timor Leste'},
  {name:'The Emirates Academy of Hospitality Management',country:'United Arab Emirates'},
  {name:'Coventry University',country:'United Kingdom'},
  {name:'Loughborough University',country:'United Kingdom'},
  {name:'University of Chichester',country:'United Kingdom'},
  {name:'California Baptist University',country:'United States'},
  {name:'Dallas Baptist University',country:'United States'},
  {name:'Iowa State University of Science and Technology (ISU)',country:'United States'},
  {name:'Valparaiso University (Valpo)',country:'United States'},
  {name:'Macquarie University',country:'Australia'},
  {name:'Monash University',country:'Australia'},
  {name:'Queensland University of Technology (QUT)',country:'Australia'},
  {name:'RMIT University',country:'Australia'},
  {name:'University of New South Wales (UNSW)',country:'Australia'},
  {name:'University of Tasmania',country:'Australia'},
];

const pdDomData = [
  // Iconic
  {name:'Four Points By Sheraton Surabaya',city:'Surabaya',type:'International'},
  {name:'Hotel DoubleTree by Hilton Surabaya',city:'Surabaya',type:'International'},
  {name:'JW Marriott Hotel Surabaya',city:'Surabaya',type:'International'},
  {name:'PT GoTo Gojek Tokopedia Tbk',city:'Jakarta',type:'National'},
  {name:"PT Rekso Nasional Food (McDonald's)",city:'Jakarta',type:'International'},
  {name:'PT Tokopedia',city:'Jakarta',type:'National'},
  {name:'PT. Graha Alam Lestari (The Apurva Kempinski Bali)',city:'Denpasar',type:'International'},
  {name:'Sheraton Surabaya Hotel',city:'Surabaya',type:'International'},
  // Major
  {name:'German Academic Exchange Service (DAAD) Indonesia',city:'Jakarta',type:'International'},
  {name:'ICAEW Indonesia',city:'Jakarta',type:'International'},
  {name:'Indoprima Group',city:'Surabaya',type:'National'},
  {name:'Institut Pertanian Bogor (IPB)',city:'Bogor',type:'Education'},
  {name:'Maspion Group',city:'Surabaya',type:'National'},
  {name:'PT Astra Sedaya Finance',city:'Jakarta',type:'National'},
  {name:'PT Bank Pembangunan Daerah Jawa Timur Tbk (Bank Jatim)',city:'Surabaya',type:'National'},
  {name:'PT Erajaya Swasembada Tbk',city:'Jakarta',type:'National'},
  {name:'PT Global Digital Niaga (Blibli)',city:'Jakarta',type:'National'},
  {name:'PT Ishizuka Maspion Indonesia',city:'Surabaya',type:'National'},
  {name:'PT. Bosch Rexroth',city:'Jakarta',type:'International'},
  {name:'PT. Charoen Pokphand Indonesia Tbk — Jawa Timur',city:'Sidoarjo',type:'International'},
  {name:'PT. Semen Indonesia (Persero) Tbk.',city:'Jakarta',type:'National'},
  {name:'Samator Group',city:'Surabaya',type:'National'},
  {name:'Universitas Airlangga',city:'Surabaya',type:'Education'},
  {name:'Universitas Andalas',city:'Sumatera',type:'Education'},
  {name:'Universitas Hasanuddin',city:'Makassar',type:'Education'},
  {name:'Universitas Indonesia',city:'Jakarta',type:'Education'},
  {name:'Universitas Muhammadiyah Malang',city:'Malang',type:'Education'},
  {name:'Universitas Negeri Surabaya (UNESA)',city:'Surabaya',type:'Education'},
  {name:'Universitas Padjadjaran',city:'Sumedang',type:'Education'},
  {name:'Universitas Sebelas Maret',city:'Surakarta',type:'Education'},
  {name:'Wings Group Surabaya',city:'Surabaya',type:'National'},
  // Well-known
  {name:'Badan Pengembangan SDM Industri Kemenperin (PIDI)',city:'Jakarta',type:'Government'},
  {name:'Kementerian Pendayagunaan Aparatur Negara dan RB',city:'Jakarta',type:'Government'},
  {name:'Komisi Nasional Disabilitas Republik Indonesia',city:'Jakarta',type:'Government'},
  {name:'Mayapada Hospital',city:'Surabaya',type:'National'},
  {name:'Politeknik Negeri Malang',city:'Malang',type:'Education'},
  {name:'PT Grant Thornton Indonesia',city:'Jakarta',type:'International'},
  {name:'PT Martina Berto Tbk (Marta Tilaar)',city:'Jakarta',type:'National'},
  {name:'PT Rembaka (La Tulipe)',city:'Surabaya',type:'National'},
  {name:'PT Sinarmas Sekuritas',city:'Jakarta',type:'National'},
  {name:'PT. Kosmetika Global Indonesia',city:'Surabaya',type:'National'},
  {name:'PT. Mitra Pinasthika Mulia (MPM)',city:'Surabaya',type:'National'},
  {name:'PT. Transforma Oto Prima (Mercedes-Benz)',city:'Surabaya',type:'International'},
  {name:'PT. Wahana Kosmetika Indonesia',city:'Sidoarjo',type:'National'},
  {name:'RSM Indonesia',city:'Jakarta',type:'International'},
  {name:'Sekretariat Jenderal Kementerian Sosial',city:'Jakarta',type:'Government'},
  {name:'Tentara Nasional Indonesia AL (STTAL)',city:'Surabaya',type:'Government'},
  {name:'Universitas Atma Jaya Yogyakarta',city:'Yogyakarta',type:'Education'},
  {name:'Universitas Bina Nusantara',city:'Jakarta',type:'Education'},
  {name:'Universitas Islam Indonesia',city:'Yogyakarta',type:'Education'},
  {name:'Universitas Islam Sultan Agung',city:'Semarang',type:'Education'},
  {name:'Universitas Jember',city:'Jember',type:'Education'},
  {name:'Universitas Muhammadiyah Semarang',city:'Semarang',type:'Education'},
  {name:'Universitas Muhammadiyah Surabaya',city:'Surabaya',type:'Education'},
  {name:'Universitas Muhammadiyah Yogyakarta',city:'Yogyakarta',type:'Education'},
  {name:'Universitas Multimedia Nusantara',city:'Banten',type:'Education'},
  {name:'Universitas Sanata Dharma',city:'Yogyakarta',type:'Education'},
  {name:'Yayasan Monash University Indonesia',city:'Tangerang',type:'International'},
  // Known
  {name:'Academy Computer Security Incident Response Team (ACAD CSIRT)',city:'Jakarta',type:'National'},
  {name:'Asosiasi Eksportir dan Produsen Handicraft Indonesia (ASEPHI)',city:'Jakarta',type:'National'},
  {name:'Bebras Indonesia',city:'Bandung',type:'National'},
  {name:'Federation Internationale Du Beton Indonesia (FIB)',city:'Semarang',type:'International'},
  {name:'Foreign Policy Community of Indonesia (FPCI)',city:'Jakarta',type:'National'},
  {name:'IDP South Jakarta',city:'Jakarta',type:'International'},
  {name:'Ikatan Akuntan Indonesia (IAI) Jatim',city:'Surabaya',type:'National'},
  {name:'Institut Bisnis & Multimedia Asmi',city:'Jakarta',type:'Education'},
  {name:'Institut Kesehatan Helvetia',city:'Medan',type:'Education'},
  {name:'Institut Teknologi dan Bisnis Asia Malang',city:'Malang',type:'Education'},
  {name:'Institut Teknologi Nasional Bandung (ITENAS)',city:'Bandung',type:'Education'},
  {name:'International Test Center (ITC)',city:'Jakarta',type:'International'},
  {name:'Jakarta International University (JIU)',city:'Jakarta',type:'Education'},
  {name:'Perkumpulan Project Management Indonesia (PMIIC)',city:'Jakarta',type:'National'},
  {name:'Persatuan Dokter Gigi Indonesia Wilayah Jatim (PDGI)',city:'Surabaya',type:'National'},
  {name:'PT Multi Spunindo Jaya',city:'Sidoarjo',type:'National'},
  {name:'PT Odoo Software Indonesia',city:'Tangerang',type:'International'},
  {name:'PT Semen Imasco Asiatic',city:'Jember',type:'National'},
  {name:'PT Surabaya Wire',city:'Gresik',type:'National'},
  {name:'PT. PathGen Diagnostik Teknologi',city:'Jakarta',type:'National'},
  {name:'PT. Piaget Indonesia',city:'Jakarta',type:'International'},
  {name:'PT. Saraswanti Indo Genetech Surabaya (SIG)',city:'Surabaya',type:'National'},
  {name:'PT. Sentra Vidya Utama (Sevima)',city:'Surabaya',type:'National'},
  {name:'Universitas Abdurachman Saleh Situbondo (UNARS)',city:'Situbondo',type:'Education'},
  {name:'Universitas Alma Ata',city:'Yogyakarta',type:'Education'},
  {name:'Universitas Anwar Medika',city:'Sidoarjo',type:'Education'},
  {name:'Universitas Baiturrahmah',city:'Padang',type:'Education'},
  {name:'Universitas Dr. Soetomo',city:'Surabaya',type:'Education'},
  {name:'Universitas Hamzanwadi',city:'Lombok',type:'Education'},
  {name:'Universitas Hang Tuah',city:'Surabaya',type:'Education'},
  {name:'Universitas Hayam Wuruk Perbanas',city:'Surabaya',type:'Education'},
  {name:'Universitas HKBP Nommensen Medan',city:'Medan',type:'Education'},
  {name:'Universitas Islam Darul Ulum Lamongan',city:'Lamongan',type:'Education'},
  {name:'Universitas Kadiri',city:'Kediri',type:'Education'},
  {name:'Universitas Kristen Indonesia Maluku (UKIM)',city:'Ambon',type:'Education'},
  {name:'Universitas Kristen Indonesia Paulus Makassar',city:'Makassar',type:'Education'},
  {name:'Universitas Kristen Papua',city:'Sorong',type:'Education'},
  {name:'Universitas Mahasaraswati (UNMAS)',city:'Denpasar',type:'Education'},
  {name:'Universitas Mega Buana Palopo',city:'Palopo',type:'Education'},
  {name:'Universitas Merdeka Pasuruan',city:'Pasuruan',type:'Education'},
  {name:'Universitas Muhammadiyah Sidoarjo',city:'Sidoarjo',type:'Education'},
  {name:'Universitas Nahdlatul Ulama Surabaya',city:'Surabaya',type:'Education'},
  {name:'Universitas Narotama',city:'Surabaya',type:'Education'},
  {name:'Universitas Nasional',city:'Jakarta',type:'Education'},
  {name:'Universitas Ottow Geissler Papua',city:'Jayapura',type:'Education'},
  {name:'Universitas Pendidikan Ganesha (Undiksha)',city:'Bali',type:'Education'},
  {name:'Universitas PGRI Adi Buana Surabaya',city:'Surabaya',type:'Education'},
  {name:'Universitas PGRI Kanjuruhan Malang',city:'Malang',type:'Education'},
  {name:'Universitas Prima Nusantara Bukittinggi',city:'Bukittinggi',type:'Education'},
  {name:'Universitas Riau Kepulauan (UNRIKA)',city:'Batam',type:'Education'},
  {name:'Universitas Syah Kuala',city:'Aceh',type:'Education'},
  {name:'Universitas Triatma Mulya (UNTRIM)',city:'Bali',type:'Education'},
  {name:'Universitas Tribhuwana Tunggadewi',city:'Malang',type:'Education'},
  {name:'Universitas Widya Kartika (UWIKA)',city:'Surabaya',type:'Education'},
  {name:'Universitas Widyatama',city:'Bandung',type:'Education'},
  // Regional
  {name:'Asosiasi Dosen Pengabdian Kepada Masyarakat Indonesia',city:'Padang',type:'National'},
  {name:'Badan Arsip dan Perpustakaan Kota Surabaya',city:'Surabaya',type:'Government'},
  {name:'Badan Musyawarah Antar Gereja (BAMAG) Kota Surabaya',city:'Surabaya',type:'National'},
  {name:'Junior Chamber International (JCI) East Java',city:'Surabaya',type:'International'},
  {name:'Pemerintah Desa Jarak Kec. Wonosalam Kab. Jombang',city:'Jombang',type:'Government'},
  {name:'Pemerintah Desa Mojotrisno',city:'Jombang',type:'Government'},
  {name:'Pemerintah Kabupaten Sumba Barat Daya',city:'NTT',type:'Government'},
  {name:'Pemerintah Kabupaten Sumba Timur',city:'NTT',type:'Government'},
  {name:'Pemerintahan Kabupaten Kaimana',city:'Papua',type:'Government'},
  {name:'RS Bhayangkara HS. Samsoeri Mertojoso',city:'Surabaya',type:'Government'},
  {name:'RS Bhayangkara Pusdik Sabhara Porong',city:'Sidoarjo',type:'Government'},
  {name:'RSUD Bhakti Dharma Husada',city:'Surabaya',type:'Government'},
  {name:'RSUD dr. Mohamad Soewandhie',city:'Surabaya',type:'Government'},
  {name:'RSUD Haji Provinsi Jawa Timur',city:'Surabaya',type:'Government'},
  {name:'Rumah Sakit Jiwa Menur (RSJ Menur)',city:'Surabaya',type:'Government'},
  {name:'Sekolah Tinggi Ilmu Ekonomi (STIE) Malangkucecwara',city:'Malang',type:'Education'},
  {name:'Universitas Sains Dan Teknologi Komputer (STEKOM)',city:'Semarang',type:'Education'},
  {name:'Wisma Jerman',city:'Surabaya',type:'International'},
  // Local / Regional
  {name:'Artax',city:'Surabaya',type:'Regional / local'},
  {name:'Chung Chung Christian School',city:'Surabaya',type:'Regional / local'},
  {name:'CV Agatha Management (AM Models)',city:'Surabaya',type:'Regional / local'},
  {name:'CV C PLUS C Desain Komunikasi',city:'Surabaya',type:'Regional / local'},
  {name:'CV Zentax Consulting',city:'Surabaya',type:'Regional / local'},
  {name:'Elyon Christian School',city:'Surabaya',type:'Regional / local'},
  {name:'Gereja Kristen Jawi Wetan (GKJW)',city:'Malang',type:'Regional / local'},
  {name:'Gereja Sidang Jemaat Allah Eben Haezer (GSJA)',city:'Surabaya',type:'Regional / local'},
  {name:'Indonesia Cyber Education Institute (ICE Institute)',city:'Tangerang',type:'Regional / local'},
  {name:'Indonesian Fashion Chamber',city:'Jakarta',type:'Regional / local'},
  {name:'Komunitas Surabaya Tempo Dulu',city:'Surabaya',type:'Regional / local'},
  {name:'Lembaga Alkitab Indonesia (LAI)',city:'Jakarta',type:'Regional / local'},
  {name:'Mari Works',city:'Jakarta',type:'Regional / local'},
  {name:'Nuadu',city:'Jakarta',type:'Regional / local'},
  {name:'Ob Anggen School',city:'Papua',type:'Regional / local'},
  {name:'Poshana',city:'Jakarta',type:'Regional / local'},
  {name:'PPPK Petra Surabaya',city:'Surabaya',type:'Regional / local'},
  {name:'PT Aruna Veda Kreasi',city:'Jakarta',type:'Regional / local'},
  {name:'PT Asuransi Mega Pratama',city:'Surabaya',type:'Regional / local'},
  {name:'PT Ayena Mandiri Sinema (Ayena Studio)',city:'Jakarta',type:'Regional / local'},
  {name:'PT Bakels Indonesia',city:'Jakarta',type:'Regional / local'},
  {name:'PT Berpikir Revolusioner Indonesia (Narasio)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Biochem Technology',city:'Surabaya',type:'Regional / local'},
  {name:'PT Bukit Vista Nusantara',city:'Bali',type:'Regional / local'},
  {name:'PT Cross Network Indonesia',city:'Surabaya',type:'Regional / local'},
  {name:'PT Deus Digital Transformasi Universal',city:'Surabaya',type:'Regional / local'},
  {name:'PT Dinamika Manajemen Investama (Duo Dinamika)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Dunia Bayar Indonesia (AiYO)',city:'Tangerang',type:'Regional / local'},
  {name:'PT Elefante Infradiji Solusi',city:'Surabaya',type:'Regional / local'},
  {name:'PT ePac Flexibles Indonesia',city:'Tangerang',type:'Regional / local'},
  {name:'PT Graha Inti Jaya',city:'Jakarta',type:'Regional / local'},
  {name:'PT Gree Electric Appliances Indonesia',city:'Jakarta',type:'Regional / local'},
  {name:'PT Hatsonsurya Electric (Hartono)',city:'Surabaya',type:'Regional / local'},
  {name:'PT IDNFT Menuju Bulan',city:'Tangerang',type:'Regional / local'},
  {name:'PT Indo Ceria Plastik dan Printing',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT Industrial Robotic Automation (IRA)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Insan Sejahtera Engineering',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT Intidaya Dinamika Sejati',city:'Surabaya',type:'Regional / local'},
  {name:'PT Kawan Main Bersama (Tabletoys Indonesia)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Kuncie Pintar Nusantara',city:'Jakarta',type:'Regional / local'},
  {name:'PT Lanius',city:'Surabaya',type:'Regional / local'},
  {name:'PT Lentera Edukasi Global (LEG)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Lingkar Indonesia Unggul (ISCEA Indonesia)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Mahaghora',city:'Surabaya',type:'Regional / local'},
  {name:'PT Mentari Mas Multimoda',city:'Surabaya',type:'Regional / local'},
  {name:'PT Mitra Akselerasi Bersama (MAB Consulting)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Murni Solusindo Nusantara',city:'Jakarta',type:'Regional / local'},
  {name:'PT Pasagung Anthrakia Semesta',city:'Surabaya',type:'Regional / local'},
  {name:'PT Populix Informasi Teknologi',city:'Jakarta',type:'Regional / local'},
  {name:'PT Samaya Multikarya Sentosa',city:'Surabaya',type:'Regional / local'},
  {name:'PT Surya Multi Cemerlang',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT Tancorp Abadi Nusantara',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT Tiga Dinamika Solusi Indonesia (3DS)',city:'Surabaya',type:'Regional / local'},
  {name:'PT Tribelio Digital Global',city:'Jakarta',type:'Regional / local'},
  {name:'PT ValuePlus Indoraya',city:'Jakarta',type:'Regional / local'},
  {name:'PT Visiniaga Mitra Kreasindo',city:'Surabaya',type:'Regional / local'},
  {name:'PT Wahana Kemalaniaga Makmur (WAKENI)',city:'Jakarta',type:'Regional / local'},
  {name:'PT. Berawal Dari Media (Socioworks)',city:'Surabaya',type:'Regional / local'},
  {name:'PT. Ceria Belajar Edukasi Indonesia (Wondermind)',city:'Jakarta',type:'Regional / local'},
  {name:'PT. Fuboru Indonesia',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT. Global Industri Teknologi Solusi (GITS)',city:'Surabaya',type:'Regional / local'},
  {name:'PT. Kresna Karya Teknologi',city:'Surabaya',type:'Regional / local'},
  {name:'PT. Mataram Paint',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT. Mikatasa Agung',city:'Surabaya',type:'Regional / local'},
  {name:'PT. Riliv Psikologi Indonesia',city:'Sidoarjo',type:'Regional / local'},
  {name:'PT. Sinko Prima Alloy',city:'Surabaya',type:'Regional / local'},
  {name:'PT. Sosial Berkat Kreatif Indonesia (Social Bread)',city:'Tangerang',type:'Regional / local'},
  {name:'PT. Suparma Tbk',city:'Surabaya',type:'Regional / local'},
  {name:'Revolt Industry',city:'Surabaya',type:'Regional / local'},
  {name:'Rumah Sakit William Booth',city:'Surabaya',type:'Regional / local'},
  {name:'Sekolah Betzata',city:'Minahasa',type:'Regional / local'},
  {name:'Sekolah Dasar Kristen Anugerah',city:'Jakarta',type:'Regional / local'},
  {name:'Sekolah Kristen Anak Bangsa',city:'Surabaya',type:'Regional / local'},
  {name:'Sekolah Luar Biasa (SLB) Siswa Budhi',city:'Surabaya',type:'Regional / local'},
  {name:'Sekolah Teologi Kristen Pelangi Kristus',city:'Surabaya',type:'Regional / local'},
  {name:'Sekolah Tinggi Teologi (STT) Amadeus',city:'Surabaya',type:'Regional / local'},
  {name:'Sekolah Tinggi Teologi Reformed Indonesia (STTRI)',city:'Jakarta',type:'Regional / local'},
  {name:'Tanda Seru',city:'Jakarta',type:'Regional / local'},
  {name:'Universitas Pradita',city:'Jakarta',type:'Education'},
  {name:'Vooya',city:'Jakarta',type:'Regional / local'},
  {name:'Yayasan Bersatu Membangun Bangsa',city:'Pontianak',type:'Regional / local'},
  {name:'Yayasan Caraka Mulia',city:'Surabaya',type:'Regional / local'},
  {name:'Yayasan Cinta Baca',city:'Bogor',type:'Regional / local'},
  {name:'Yayasan Eben Haezar',city:'Manado',type:'Regional / local'},
  {name:'Yayasan Edukasi Inti Pratama (IDS College)',city:'Jakarta',type:'Regional / local'},
  {name:'Yayasan Exodus (REC)',city:'Surabaya',type:'Regional / local'},
  {name:'Yayasan Habitat Kemanusiaan Indonesia (YHKI)',city:'Jakarta',type:'Regional / local'},
  {name:'Yayasan Haggai Indonesia',city:'Jakarta',type:'Regional / local'},
  {name:'Yayasan Harapan Cerah',city:'Jakarta',type:'Regional / local'},
  {name:'Yayasan Indonesia Sejahtera Barokah (YISB)',city:'Surabaya',type:'Regional / local'},
  {name:'Yayasan K-Pact Nusantara',city:'Kupang',type:'Regional / local'},
  {name:'Yayasan Kalam Kudus Indonesia (YKKI) Ambon',city:'Ambon',type:'Regional / local'},
  {name:'Yayasan Kalam Kudus Indonesia (YKKI) Medan',city:'Medan',type:'Regional / local'},
  {name:'Yayasan Mawar Sharon Peduli',city:'Surabaya',type:'Regional / local'},
  {name:'Yayasan Medicom Charity',city:'Malang',type:'Regional / local'},
  {name:'Yayasan Pakta Peduli Indonesia',city:'Surabaya',type:'Regional / local'},
  {name:'Yayasan Pendidikan Kristen (YPK) Jawa Timur',city:'Malang',type:'Regional / local'},
  {name:'Yayasan Pendidikan Kristen Gloria',city:'Surabaya',type:'Regional / local'},
  {name:'Yayasan Reformasi Injili Millennium',city:'Jakarta',type:'Regional / local'},
  {name:'Yong Chun Chinese Language Center',city:'Surabaya',type:'Regional / local'},
  {name:'Sekolah Tinggi Informatika & Komputer Indonesia (STIKI)',city:'Malang',type:'Education'},
  {name:'Universitas Katolik Indonesia Santu Paulus Ruteng',city:'NTT',type:'Education'},
];

// ── CONSTANTS ─────────────────────────────────────────────────────────────────

const PD_PAGE = 24;

const pdContinent = {
  Japan:'asia', 'South Korea':'asia', China:'asia', Taiwan:'asia',
  Malaysia:'asia', Thailand:'asia', Philippines:'asia', Singapore:'asia',
  Bangladesh:'asia', 'Hong Kong':'asia', India:'asia', Macau:'asia',
  Mongolia:'asia', Cambodia:'asia', 'Timor Leste':'asia', 'United Arab Emirates':'asia',
  Netherlands:'europe', 'United Kingdom':'europe', Germany:'europe', France:'europe',
  Hungary:'europe', Ireland:'europe', Latvia:'europe', Lithuania:'europe',
  Poland:'europe', Portugal:'europe', Romania:'europe', Switzerland:'europe',
  'United States':'americas', Canada:'americas',
  Australia:'oceania', 'New Zealand':'oceania',
};

const pdFlagEmoji = {
  Japan:'🇯🇵', 'South Korea':'🇰🇷', China:'🇨🇳', Taiwan:'🇹🇼',
  Malaysia:'🇲🇾', Thailand:'🇹🇭', Philippines:'🇵🇭', Singapore:'🇸🇬',
  Bangladesh:'🇧🇩', 'Hong Kong':'🇭🇰', India:'🇮🇳', Macau:'🇲🇴',
  Mongolia:'🇲🇳', Cambodia:'🇰🇭', 'Timor Leste':'🇹🇱', 'United Arab Emirates':'🇦🇪',
  Netherlands:'🇳🇱', 'United Kingdom':'🇬🇧', Germany:'🇩🇪', France:'🇫🇷',
  Hungary:'🇭🇺', Ireland:'🇮🇪', Latvia:'🇱🇻', Lithuania:'🇱🇹',
  Poland:'🇵🇱', Portugal:'🇵🇹', Romania:'🇷🇴', Switzerland:'🇨🇭',
  'United States':'🇺🇸', Canada:'🇨🇦',
  Australia:'🇦🇺', 'New Zealand':'🇳🇿',
};

const pdTypeColor = {
  International: { bg:'rgba(30,58,95,0.06)', text:'#1E3A5F', border:'rgba(30,58,95,0.15)' },
  National:      { bg:'rgba(139,115,85,0.07)', text:'#8B7355', border:'rgba(139,115,85,0.2)' },
  Education:     { bg:'rgba(74,107,138,0.07)', text:'#4A6B8A', border:'rgba(74,107,138,0.2)' },
  Government:    { bg:'rgba(5,150,105,0.07)', text:'#059669', border:'rgba(5,150,105,0.2)' },
  'Regional / local': { bg:'rgba(92,92,92,0.05)', text:'#5C5C5C', border:'rgba(92,92,92,0.15)' },
};

// ── STATE ─────────────────────────────────────────────────────────────────────

let pdIntlContinent = 'all';
let pdIntlShowing = PD_PAGE;

let pdDomType = 'all';
let pdDomShowing = PD_PAGE;

let pdCurrentTab = 'intl';

// ── TAB SWITCH ────────────────────────────────────────────────────────────────

function pdSwitchTab(tab) {
  pdCurrentTab = tab;

  const panelIntl = document.getElementById('pd-panel-intl');
  const panelDom  = document.getElementById('pd-panel-dom');
  const tabIntl   = document.getElementById('pd-tab-intl');
  const tabDom    = document.getElementById('pd-tab-dom');
  const countIntl = document.getElementById('pd-tab-intl-count');
  const countDom  = document.getElementById('pd-tab-dom-count');

  if (tab === 'intl') {
    panelIntl.classList.remove('hidden');
    panelDom.classList.add('hidden');
    tabIntl.style.cssText = 'border-bottom:2px solid #1E3A5F;color:#1C1C1E;background:transparent;cursor:pointer;padding:12px 24px;font-size:.875rem;font-weight:600;transition:all .2s';
    tabDom.style.cssText  = 'border-bottom:2px solid transparent;color:#5C5C5C;background:transparent;cursor:pointer;padding:12px 24px;font-size:.875rem;font-weight:600;transition:all .2s';
    if (countIntl) { countIntl.style.background='rgba(30,58,95,0.08)'; countIntl.style.color='#1E3A5F'; }
    if (countDom)  { countDom.style.background='rgba(28,28,30,0.06)';  countDom.style.color='#5C5C5C'; }
    pdRenderIntl();
  } else {
    panelDom.classList.remove('hidden');
    panelIntl.classList.add('hidden');
    tabDom.style.cssText  = 'border-bottom:2px solid #166534;color:#1C1C1E;background:transparent;cursor:pointer;padding:12px 24px;font-size:.875rem;font-weight:600;transition:all .2s';
    tabIntl.style.cssText = 'border-bottom:2px solid transparent;color:#5C5C5C;background:transparent;cursor:pointer;padding:12px 24px;font-size:.875rem;font-weight:600;transition:all .2s';
    if (countDom)  { countDom.style.background='rgba(22,101,52,0.08)';  countDom.style.color='#166534'; }
    if (countIntl) { countIntl.style.background='rgba(28,28,30,0.06)'; countIntl.style.color='#5C5C5C'; }
    pdRenderDom();
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ── INTERNATIONAL ─────────────────────────────────────────────────────────────

function pdIntlSetContinent(cont) {
  pdIntlContinent = cont;
  pdIntlShowing = PD_PAGE;
  document.querySelectorAll('.pd-cont-btn').forEach(btn => {
    const active = btn.dataset.cont === cont;
    btn.style.background    = active ? '#1E3A5F' : '#fff';
    btn.style.color         = active ? '#fff' : '#5C5C5C';
    btn.style.borderColor   = active ? '#1E3A5F' : 'rgba(28,28,30,0.12)';
  });
  pdRenderIntl();
}

function pdIntlMore() {
  pdIntlShowing += PD_PAGE;
  pdRenderIntl();
}

function pdRenderIntl() {
  const grid    = document.getElementById('pd-intl-grid');
  const countEl = document.getElementById('pd-intl-count');
  const moreBtn = document.getElementById('pd-intl-more');
  if (!grid) return;

  const q = (document.getElementById('pd-intl-search')?.value || '').toLowerCase().trim();

  // Dim continent filters while search is active — search scans all regions
  document.querySelectorAll('.pd-cont-btn').forEach(btn => {
    btn.style.opacity        = q ? '0.4' : '1';
    btn.style.pointerEvents  = q ? 'none' : '';
  });

  let filtered = pdIntlData;
  if (pdIntlContinent !== 'all' && !q) {
    filtered = filtered.filter(p => pdContinent[p.country] === pdIntlContinent);
  }
  if (q) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) || p.country.toLowerCase().includes(q)
    );
  }

  const total   = filtered.length;
  const showing = filtered.slice(0, pdIntlShowing);
  const remaining = total - showing.length;

  if (countEl) countEl.textContent = q
    ? `${total} result${total !== 1 ? 's' : ''} for "${q}" — searching all regions`
    : `Showing ${showing.length} of ${total} institutions`;

  grid.innerHTML = showing.map(p => {
    const flag = pdFlagEmoji[p.country] || '🌐';
    return `<div class="card rounded-xl p-4 hover:shadow-md transition-all duration-200" style="border:1px solid rgba(28,28,30,0.08);background:#fff">
      <div class="flex items-start gap-3">
        <span style="font-size:1.5rem;line-height:1;flex-shrink:0;margin-top:2px">${flag}</span>
        <div class="min-w-0">
          <p class="font-medium text-sm leading-snug" style="color:#1C1C1E">${p.name}</p>
          <p class="text-xs mt-1" style="color:#9CA3AF">${p.country}</p>
        </div>
      </div>
    </div>`;
  }).join('') || '<p class="col-span-3 text-center py-8 text-sm" style="color:#9CA3AF">No institutions found.</p>';

  if (moreBtn) {
    moreBtn.classList.toggle('hidden', remaining <= 0 || !!q);
    if (remaining > 0) moreBtn.textContent = `Load more (${remaining} remaining)`;
  }
}

// ── DOMESTIC ──────────────────────────────────────────────────────────────────

function pdDomSetType(type) {
  pdDomType = type;
  pdDomShowing = PD_PAGE;
  document.querySelectorAll('.pd-dtype-btn').forEach(btn => {
    const active = btn.dataset.dtype === type;
    btn.style.background  = active ? '#166534' : '#fff';
    btn.style.color       = active ? '#fff' : '#5C5C5C';
    btn.style.borderColor = active ? '#166534' : 'rgba(28,28,30,0.12)';
  });
  pdRenderDom();
}

function pdDomMore() {
  pdDomShowing += PD_PAGE;
  pdRenderDom();
}

function pdRenderDom() {
  const grid    = document.getElementById('pd-dom-grid');
  const countEl = document.getElementById('pd-dom-count');
  const moreBtn = document.getElementById('pd-dom-more');
  if (!grid) return;

  const q = (document.getElementById('pd-dom-search')?.value || '').toLowerCase().trim();

  // Dim type filters while search is active — search scans all types
  document.querySelectorAll('.pd-dtype-btn').forEach(btn => {
    btn.style.opacity        = q ? '0.4' : '1';
    btn.style.pointerEvents  = q ? 'none' : '';
  });

  let filtered = pdDomData;
  if (pdDomType !== 'all' && !q) {
    filtered = filtered.filter(p => p.type === pdDomType);
  }
  if (q) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q)
    );
  }

  const total     = filtered.length;
  const showing   = filtered.slice(0, pdDomShowing);
  const remaining = total - showing.length;

  if (countEl) countEl.textContent = q
    ? `${total} result${total !== 1 ? 's' : ''} for "${q}" — searching all types`
    : `Showing ${showing.length} of ${total} partners`;

  grid.innerHTML = showing.map(p => {
    const tc = pdTypeColor[p.type] || pdTypeColor['Regional / local'];
    return `<div class="card rounded-xl p-4 hover:shadow-md transition-all duration-200" style="border:1px solid rgba(28,28,30,0.08);background:#fff">
      <p class="font-medium text-sm leading-snug mb-2" style="color:#1C1C1E">${p.name}</p>
      <div class="flex items-center gap-2 flex-wrap">
        <span class="flex items-center gap-1 text-xs" style="color:#9CA3AF">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          ${p.city}
        </span>
        <span class="px-2 py-0.5 rounded-full text-xs font-medium" style="background:${tc.bg};color:${tc.text};border:1px solid ${tc.border}">${p.type}</span>
      </div>
    </div>`;
  }).join('') || '<p class="col-span-3 text-center py-8 text-sm" style="color:#9CA3AF">No partners found.</p>';

  if (moreBtn) {
    moreBtn.classList.toggle('hidden', remaining <= 0 || !!q);
    if (remaining > 0) moreBtn.textContent = `Load more (${remaining} remaining)`;
  }
}

function partnershipsInitPage() {
  var el = document.getElementById('page-partnerships');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 0;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('engagement')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="partnerships_hero_eyebrow">Global Partnerships</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="partnerships_hero_title">Partnership<br><em style="font-style:italic;color:#8B7355">Development</em></h1>
       <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="partnerships_hero_tagline">Managing 30+ institutional partners and facilitating 15+ strategic meetings per month at Petra Christian University — building collaborations that drive academic excellence and global opportunity.</p>
       <div class="flex flex-wrap gap-8 pb-8">
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">505+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Total Partners</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">15+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Meetings/Month</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">32</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Countries</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">52</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Domestic Cities</p></div>
       </div>
       <!-- Tab Nav — Partnership Dev is active -->
       <div class="flex gap-0 border-t" style="border-color:rgba(255,255,255,0.08)">
        <button onclick="goToPage('engagement')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Overview</button>
        <button onclick="goToPage('onboarding')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Student Support</button>
        <button style="color:#fff;font-size:.75rem;font-weight:600;padding:12px 20px;border-bottom:2px solid #8B7355;background:transparent;cursor:default">Partnership Dev</button>
        <button onclick="goToPage('mou')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">MoU / MoA</button>
       </div>
      </div>
     </div>
     <!-- 1. INSTITUTIONAL REACH — set the scale right after the hero -->
     <div style="padding:72px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Partnership Network</span></div>
       <h2 class="font-heading font-bold text-3xl mb-3" style="color:#1C1C1E">Institutional Reach at PCU</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">PCU's portfolio spans two distinct tracks — global academic institutions and domestic organizations across Indonesia — both of which I help coordinate, manage, and grow.</p>
       <div class="grid md:grid-cols-2 gap-8">
        <!-- International -->
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="p-6 pb-5" style="background:linear-gradient(135deg,#1E3A5F 0%,#2C4A72 100%)">
          <div class="flex items-center gap-2 mb-3">
           <i data-lucide="globe" style="width:18px;height:18px;color:rgba(255,255,255,0.6)"></i>
           <span style="font-size:.7rem;font-weight:600;letter-spacing:.1em;color:rgba(255,255,255,0.5);text-transform:uppercase">International</span>
          </div>
          <h3 class="font-heading font-bold text-xl mb-1" style="color:#fff">International Partnerships</h3>
          <p class="text-sm" style="color:rgba(255,255,255,0.55)">Academic institutions spanning 4 continents</p>
         </div>
         <div class="p-6">
          <div class="grid grid-cols-3 gap-4 mb-6">
           <div class="text-center">
            <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1E3A5F">184</p>
            <p class="text-xs" style="color:#5C5C5C">Institutions</p>
           </div>
           <div class="text-center" style="border-left:1px solid rgba(28,28,30,0.08);border-right:1px solid rgba(28,28,30,0.08)">
            <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1E3A5F">32</p>
            <p class="text-xs" style="color:#5C5C5C">Countries</p>
           </div>
           <div class="text-center">
            <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1E3A5F">4</p>
            <p class="text-xs" style="color:#5C5C5C">Continents</p>
           </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
           <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:rgba(30,58,95,0.05)">
            <i data-lucide="map-pin" style="width:13px;height:13px;color:#1E3A5F;flex-shrink:0"></i>
            <span class="text-xs font-medium" style="color:#1C1C1E">Asia</span>
           </div>
           <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:rgba(30,58,95,0.05)">
            <i data-lucide="map-pin" style="width:13px;height:13px;color:#1E3A5F;flex-shrink:0"></i>
            <span class="text-xs font-medium" style="color:#1C1C1E">Europe</span>
           </div>
           <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:rgba(30,58,95,0.05)">
            <i data-lucide="map-pin" style="width:13px;height:13px;color:#1E3A5F;flex-shrink:0"></i>
            <span class="text-xs font-medium" style="color:#1C1C1E">North America</span>
           </div>
           <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:rgba(30,58,95,0.05)">
            <i data-lucide="map-pin" style="width:13px;height:13px;color:#1E3A5F;flex-shrink:0"></i>
            <span class="text-xs font-medium" style="color:#1C1C1E">Australia</span>
           </div>
          </div>
         </div>
        </div>
        <!-- Domestic -->
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="p-6 pb-5" style="background:linear-gradient(135deg,#166534 0%,#0d9488 100%)">
          <div class="flex items-center gap-2 mb-3">
           <i data-lucide="building-2" style="width:18px;height:18px;color:rgba(255,255,255,0.6)"></i>
           <span style="font-size:.7rem;font-weight:600;letter-spacing:.1em;color:rgba(255,255,255,0.5);text-transform:uppercase">Domestic</span>
          </div>
          <h3 class="font-heading font-bold text-xl mb-1" style="color:#fff">Domestic Partnerships</h3>
          <p class="text-sm" style="color:rgba(255,255,255,0.55)">Organizations across cities throughout Indonesia</p>
         </div>
         <div class="p-6">
          <div class="grid grid-cols-3 gap-4 mb-6">
           <div class="text-center">
            <p class="font-heading font-bold text-3xl mb-0.5" style="color:#166534">321</p>
            <p class="text-xs" style="color:#5C5C5C">Total Partners</p>
           </div>
           <div class="text-center" style="border-left:1px solid rgba(28,28,30,0.08);border-right:1px solid rgba(28,28,30,0.08)">
            <p class="font-heading font-bold text-3xl mb-0.5" style="color:#166534">52</p>
            <p class="text-xs" style="color:#5C5C5C">Cities</p>
           </div>
           <div class="text-center">
            <p class="font-heading font-bold text-3xl mb-0.5" style="color:#166534">5</p>
            <p class="text-xs" style="color:#5C5C5C">Partner Types</p>
           </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
           <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:rgba(22,101,52,0.05)">
            <i data-lucide="layers" style="width:13px;height:13px;color:#166534;flex-shrink:0"></i>
            <span class="text-xs font-medium" style="color:#1C1C1E">Industry, Education, Government & Regional Organizations</span>
           </div>
           <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:rgba(22,101,52,0.05)">
            <i data-lucide="file-text" style="width:13px;height:13px;color:#166534;flex-shrink:0"></i>
            <span class="text-xs font-medium" style="color:#1C1C1E">MoU, MoA, IA/IR & Strategic Collaboration Frameworks</span>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- 2. WHAT WE COLLABORATE ON — explain the work before showing the process -->
     <div style="padding:48px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Collaboration Areas</span></div>
       <h2 class="font-heading font-bold text-3xl mb-3" style="color:#1C1C1E">What the Partnerships Enable</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">Across both tracks, partnerships unlock a wide range of academic and institutional opportunities — each designed to create mutual value and advance internationalisation goals.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="card p-6 rounded-2xl hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.07)"><i data-lucide="book-open" style="width:20px;height:20px;color:#1E3A5F"></i></div>
         <p class="font-heading font-semibold mb-1.5" style="color:#1C1C1E">Student Exchange</p>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Semester abroad, dual-degree, and degree-level mobility for students</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.07)"><i data-lucide="microscope" style="width:20px;height:20px;color:#4A6B8A"></i></div>
         <p class="font-heading font-semibold mb-1.5" style="color:#1C1C1E">Research Collaboration</p>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Joint projects and interdisciplinary initiatives advancing knowledge</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.07)"><i data-lucide="users" style="width:20px;height:20px;color:#8B7355"></i></div>
         <p class="font-heading font-semibold mb-1.5" style="color:#1C1C1E">Faculty Development</p>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Teaching capacity, research mentoring, and professional growth</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background:rgba(5,150,105,0.07)"><i data-lucide="layers" style="width:20px;height:20px;color:#059669"></i></div>
         <p class="font-heading font-semibold mb-1.5" style="color:#1C1C1E">Curriculum Design</p>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Joint program design and curriculum internationalisation</p>
        </div>
       </div>
      </div>
     </div>
     <!-- 3. HOW WE BUILD — the process that makes it happen -->
     <div style="padding:48px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">My Approach</span></div>
       <h2 class="font-heading font-bold text-3xl mb-3" style="color:#1C1C1E">How I Build Partnerships</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">A four-phase approach I apply to identify, formalise, and sustain institutional collaborations — ensuring every partnership creates lasting value on both sides.</p>
       <div class="grid md:grid-cols-2 gap-5">
        <div class="card p-7 rounded-2xl flex gap-5 hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(30,58,95,0.07)"><i data-lucide="search" style="width:20px;height:20px;color:#1E3A5F"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#1E3A5F;letter-spacing:.06em">01</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Strategic Identification</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Identifying partner institutions aligned with PCU's mission and academic strengths through rigorous evaluation and due diligence</p>
         </div>
        </div>
        <div class="card p-7 rounded-2xl flex gap-5 hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(74,107,138,0.07)"><i data-lucide="handshake" style="width:20px;height:20px;color:#4A6B8A"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#4A6B8A;letter-spacing:.06em">02</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Engagement &amp; Negotiation</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Building relationships and negotiating terms that benefit both institutions and advance shared educational goals</p>
         </div>
        </div>
        <div class="card p-7 rounded-2xl flex gap-5 hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(139,115,85,0.07)"><i data-lucide="file-check" style="width:20px;height:20px;color:#8B7355"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#8B7355;letter-spacing:.06em">03</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Program Development</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Co-designing exchange programs, research collaborations, and joint curriculum initiatives with partner institutions</p>
         </div>
        </div>
        <div class="card p-7 rounded-2xl flex gap-5 hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(5,150,105,0.07)"><i data-lucide="trending-up" style="width:20px;height:20px;color:#059669"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#059669;letter-spacing:.06em">04</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Activation &amp; Growth</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Implementing programs, monitoring progress, and fostering long-term partnership growth through continuous engagement</p>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- 4. PARTNER DIRECTORY — the evidence; explore the full list -->
     <div style="padding:48px 24px 64px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Partner Directory</span></div>
       <h2 class="font-heading font-bold text-3xl mb-3" style="color:#1C1C1E">Browse the Full Network</h2>
       <p class="text-base max-w-3xl mb-8" style="color:#5C5C5C">All 505+ institutional partners I help manage through PCU — searchable and filterable by region or type.</p>
       <!-- Tab switcher -->
       <div class="flex gap-0 mb-8 border-b" style="border-color:rgba(28,28,30,0.1)">
        <button id="pd-tab-intl" onclick="pdSwitchTab('intl')" class="px-6 py-3 text-sm font-semibold border-b-2 transition -mb-px" style="border-color:#1E3A5F;color:#1C1C1E;background:transparent;cursor:pointer">International <span id="pd-tab-intl-count" class="ml-1.5 px-2 py-0.5 text-xs rounded-full" style="background:rgba(30,58,95,0.08);color:#1E3A5F">184</span></button>
        <button id="pd-tab-dom" onclick="pdSwitchTab('dom')" class="px-6 py-3 text-sm font-semibold border-b-2 border-transparent transition -mb-px" style="color:#5C5C5C;background:transparent;cursor:pointer">Domestic <span id="pd-tab-dom-count" class="ml-1.5 px-2 py-0.5 text-xs rounded-full" style="background:rgba(28,28,30,0.06);color:#5C5C5C">321</span></button>
       </div>
       <!-- International panel -->
       <div id="pd-panel-intl">
        <div class="flex flex-col sm:flex-row gap-3 mb-5">
         <div class="relative flex-1">
          <i data-lucide="search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:#9CA3AF;pointer-events:none"></i>
          <input id="pd-intl-search" oninput="pdRenderIntl()" type="text" placeholder="Search institutions or countries…" class="w-full text-sm rounded-xl border" style="padding:10px 12px 10px 36px;border-color:rgba(28,28,30,0.12);outline:none;background:#fff;color:#1C1C1E">
         </div>
        </div>
        <div class="flex flex-wrap gap-2 mb-5">
         <button onclick="pdIntlSetContinent('all')" data-cont="all" class="pd-cont-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#1E3A5F;color:#fff;border-color:#1E3A5F;cursor:pointer">All Regions</button>
         <button onclick="pdIntlSetContinent('asia')" data-cont="asia" class="pd-cont-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Asia</button>
         <button onclick="pdIntlSetContinent('europe')" data-cont="europe" class="pd-cont-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Europe</button>
         <button onclick="pdIntlSetContinent('americas')" data-cont="americas" class="pd-cont-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Americas</button>
         <button onclick="pdIntlSetContinent('oceania')" data-cont="oceania" class="pd-cont-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Oceania</button>
        </div>
        <p id="pd-intl-count" class="text-xs mb-4" style="color:#9CA3AF"></p>
        <div id="pd-intl-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6"></div>
        <div class="text-center"><button id="pd-intl-more" onclick="pdIntlMore()" class="hidden px-8 py-2.5 rounded-full text-sm font-semibold border transition" style="border-color:rgba(28,28,30,0.12);color:#1C1C1E;background:#fff;cursor:pointer">Load more</button></div>
       </div>
       <!-- Domestic panel -->
       <div id="pd-panel-dom" class="hidden">
        <div class="flex flex-col sm:flex-row gap-3 mb-5">
         <div class="relative flex-1">
          <i data-lucide="search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:#9CA3AF;pointer-events:none"></i>
          <input id="pd-dom-search" oninput="pdRenderDom()" type="text" placeholder="Search partners, cities, or types…" class="w-full text-sm rounded-xl border" style="padding:10px 12px 10px 36px;border-color:rgba(28,28,30,0.12);outline:none;background:#fff;color:#1C1C1E">
         </div>
        </div>
        <div class="flex flex-wrap gap-2 mb-5">
         <button onclick="pdDomSetType('all')" data-dtype="all" class="pd-dtype-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#166534;color:#fff;border-color:#166534;cursor:pointer">All Types</button>
         <button onclick="pdDomSetType('International')" data-dtype="International" class="pd-dtype-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Intl. Affiliated</button>
         <button onclick="pdDomSetType('National')" data-dtype="National" class="pd-dtype-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">National</button>
         <button onclick="pdDomSetType('Education')" data-dtype="Education" class="pd-dtype-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Education</button>
         <button onclick="pdDomSetType('Government')" data-dtype="Government" class="pd-dtype-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Government</button>
         <button onclick="pdDomSetType('Regional / local')" data-dtype="Regional / local" class="pd-dtype-btn px-4 py-1.5 rounded-full text-xs font-semibold border transition" style="background:#fff;color:#5C5C5C;border-color:rgba(28,28,30,0.12);cursor:pointer">Regional / Local</button>
        </div>
        <p id="pd-dom-count" class="text-xs mb-4" style="color:#9CA3AF"></p>
        <div id="pd-dom-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6"></div>
        <div class="text-center"><button id="pd-dom-more" onclick="pdDomMore()" class="hidden px-8 py-2.5 rounded-full text-sm font-semibold border transition" style="border-color:rgba(28,28,30,0.12);color:#1C1C1E;background:#fff;cursor:pointer">Load more</button></div>
       </div>
      </div>
     </div>
     <!-- 5. CLOSING STATS — deeper angles not shown in the hero -->
     <div style="padding:0 24px 80px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Deeper Breakdown</span></div>
       <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold mb-1" style="font-size:2.5rem;line-height:1;color:#1E3A5F">8</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">ASEAN Nations</p>
         <p class="text-xs" style="color:#9CA3AF">With active partnership agreements</p>
        </div>
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold mb-1" style="font-size:2.5rem;line-height:1;color:#4A6B8A">4</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Continents Covered</p>
         <p class="text-xs" style="color:#9CA3AF">Asia, Europe, Americas, Oceania</p>
        </div>
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold mb-1" style="font-size:2.5rem;line-height:1;color:#8B7355">40+</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Active MoU/MoA Agreements</p>
         <p class="text-xs" style="color:#9CA3AF">Lifecycle-managed from draft to renewal</p>
        </div>
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold mb-1" style="font-size:2.5rem;line-height:1;color:#059669">3+</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Years Building the Network</p>
         <p class="text-xs" style="color:#9CA3AF">At Petra Christian University</p>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
  pdRenderIntl();
}

document.addEventListener('DOMContentLoaded', function() {
  partnershipsInitPage();
});
