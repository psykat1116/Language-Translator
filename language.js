const languages = [
  {
    id: "1",
    name: "Auto",
    code: "auto",
    native: "Detect"
  },
  {
    id: "2",
    name: "Afrikaans",
    code: "af",
    native: "Afrikaans"
  },
  {
    id: "3",
    name: "Albanian",
    code: "sq-AL",
    native: "shqiptare"
  },
  {
    id: "4",
    name: "Amharic",
    code: "am-ET",
    native: "አማርኛ"
  },
  {
    id: "5",
    name: "Arabic",
    code: "ar-SA",
    native: "عربي"
  },
  {
    id: "6",
    name: "Armenian",
    code: "hy",
    native: "հայերեն"
  },
  {
    id: "7",
    name: "Assamese",
    code: "as",
    native: "অসমীয়া"
  },
  {
    id: "8",
    name: "Aymara",
    code: "ay",
    native: "Aymara"
  },
  {
    id: "9",
    name: "Azerbaijani",
    code: "az",
    native: "Azərbaycan"
  },
  {
    id: "10",
    name: "Bambara",
    code: "bm",
    native: "Bamanankan"
  },
  {
    id: "11",
    name: "Basque",
    code: "eu",
    native: "euskara"
  },
  {
    id: "12",
    name: "Belarusian",
    code: "be-BY",
    native: "беларускі"
  },
  {
    id: "13",
    name: "Bangla",
    code: "bn-IN",
    native: "বাংলা"
  },
  {
    id: "14",
    name: "Bhojpuri",
    code: "bho",
    native: "भोजपुरी"
  },
  {
    id: "15",
    name: "Bosnian",
    code: "bs-BA",
    native: "bosanski"
  },
  {
    id: "16",
    name: "Bulgarian",
    code: "bg",
    native: "български"
  },
  {
    id: "17",
    name: "Catalan",
    code: "ca-ES",
    native: "català"
  },
  {
    id: "18",
    name: "Cebuano",
    code: "ceb",
    native: "Cebuano"
  },
  {
    id: "19",
    name: "Chinese (Simplified)",
    code: "zh-CN",
    native: "中文简体"
  },
  {
    id: "20",
    name: "Chinese (Traditional)",
    code: "zh-TW",
    native: "中文繁體"
  },
  {
    id: "21",
    name: "Corsican",
    code: "co",
    native: "Corsu"
  },
  {
    id: "22",
    name: "Croatian",
    code: "hr",
    native: "Hrvatski"
  },
  {
    id: "23",
    name: "Czech",
    code: "cs-CZ",
    native: "čeština"
  },
  {
    id: "24",
    name: "Danish",
    code: "da-DK",
    native: "dansk"
  },
  {
    id: "25",
    name: "Dhivehi",
    code: "dv",
    native: "ދިވެހި"
  },
  {
    id: "26",
    name: "Dogri",
    code: "doi",
    native: "डोगरी"
  },
  {
    id: "27",
    name: "Dutch",
    code: "nl",
    native: "Nederlands"
  },
  {
    id: "28",
    name: "English",
    code: "en-US",
    native: "English"
  },
  {
    id: "29",
    name: "Esperanto",
    code: "eo",
    native: "Esperanto"
  },
  {
    id: "30",
    name: "Estonia",
    code: "et",
    native: "Eesti"
  },
  {
    id: "31",
    name: "Ewe",
    code: "ee",
    native: "Eʋegbe"
  },
  {
    id: "32",
    name: "Filipino",
    code: "fil",
    native: "Filipino"
  },
  {
    id: "33",
    name: "Finnish",
    code: "fi",
    native: "Suomalainen"
  },
  {
    id: "34",
    name: "French",
    code: "fr-FI",
    native: "Français"
  },
  {
    id: "35",
    name: "Frisian",
    code: "fy",
    native: "Frysk"
  },
  {
    id: "36",
    name: "Galician",
    code: "gl",
    native: "galego"
  },
  {
    id: "37",
    name: "Georgian",
    code: "ka",
    native: "ქართული"
  },
  {
    id: "38",
    name: "German",
    code: "de-DE",
    native: "Deutsch"
  },
  {
    id: "39",
    name: "Greek",
    code: "el-GR",
    native: "Ελληνικά"
  },
  {
    id: "40",
    name: "Guarani",
    code: "gn",
    native: "guarani"
  },
  {
    id: "41",
    name: "Gujarati",
    code: "gu",
    native: "ગુજરાતી"
  },
  {
    id: "42",
    name: "Haitian Creole",
    code: "ht",
    native: "Kreyòl ayisyen"
  },
  {
    id: "43",
    name: "Hausa",
    code: "ha",
    native: "Hausa"
  },
  {
    id: "44",
    name: "Hawaiian",
    code: "haw",
    native: "ʻŌlelo Hawaiʻi"
  },
  {
    id: "45",
    name: "Hebrew",
    code: "he-IL",
    native: "עִברִית"
  },
  {
    id: "46",
    name: "Hindi",
    code: "hi-IN",
    native: "हिंदी"
  },
  {
    id: "47",
    name: "Hmong",
    code: "hmn",
    native: "Hmoob"
  },
  {
    id: "48",
    name: "Hungarian",
    code: "hu-HU",
    native: "Magyar"
  },
  {
    id: "49",
    name: "Icelandic",
    code: "is",
    native: "íslenskur"
  },
  {
    id: "50",
    name: "Igbo",
    code: "ig",
    native: "Igbo"
  },
  {
    id: "51",
    name: "Ilocano",
    code: "ilo",
    native: "Ilocano"
  },
  {
    id: "52",
    name: "Indonesian",
    code: "id-ID",
    native: "bahasa"
  },
  {
    id: "53",
    name: "Irish",
    code: "ga",
    native: "Gaeilge"
  },
  {
    id: "54",
    name: "Italian",
    code: "it-IT",
    native: "Italiano"
  },
  {
    id: "55",
    name: "Japanese",
    code: "ja-JP",
    native: "日本"
  },
  {
    id: "56",
    name: "Javanese",
    code: "jv",
    native: "basa jawa"
  },
  {
    id: "57",
    name: "Kannada",
    code: "kn",
    native: "ಕನ್ನಡ"
  },
  {
    id: "58",
    name: "Kazakh",
    code: "kk",
    native: "қазақ"
  },
  {
    id: "59",
    name: "Khmer",
    code: "km",
    native: "ខ្មែរ"
  },
  {
    id: "60",
    name: "Kinyarwanda",
    code: "rw",
    native: "kinyarwanda"
  },
  {
    id: "61",
    name: "Konkani",
    code: "gom",
    native: "कोंकणी"
  },
  {
    id: "62",
    name: "Korean",
    code: "ko-KR",
    native: "한국인"
  },
  {
    id: "63",
    name: "Krio",
    code: "kri",
    native: "Krio"
  },
  {
    id: "64",
    name: "Kurdish",
    code: "ku",
    native: "Kurdî"
  },
  {
    id: "65",
    name: "Kurdish (Sorani)",
    code: "ckb",
    native: "کوردی"
  },
  {
    id: "66",
    name: "Kyrgyz",
    code: "ky",
    native: "Кыргызча"
  },
  {
    id: "67",
    name: "Lao",
    code: "lo",
    native: "ພາສາລາວ"
  },
  {
    id: "68",
    name: "Latin",
    code: "la",
    native: "Latinus"
  },
  {
    id: "69",
    name: "Latvian",
    code: "lv",
    native: "latviski"
  },
  {
    id: "70",
    name: "Lingala",
    code: "ln",
    native: "Lingala"
  },
  {
    id: "71",
    name: "Lithuanian",
    code: "lt",
    native: "lietuvių"
  },
  {
    id: "72",
    name: "Luganda",
    code: "lg",
    native: "Oluganda"
  },
  {
    id: "73",
    name: "Luxembourgish",
    code: "lb",
    native: "lëtzebuergesch"
  },
  {
    id: "74",
    name: "Macedonian",
    code: "mk",
    native: "македонски"
  },
  {
    id: "75",
    name: "Maithili",
    code: "mai",
    native: "मैथिली"
  },
  {
    id: "76",
    name: "Malagasy",
    code: "mg",
    native: "Malagasy"
  },
  {
    id: "77",
    name: "Malay",
    code: "ms",
    native: "Melayu"
  },
  {
    id: "78",
    name: "Malayalam",
    code: "ml",
    native: "മലയാളം"
  },
  {
    id: "79",
    name: "Maltese",
    code: "mt",
    native: "Malti"
  },
  {
    id: "80",
    name: "Māori",
    code: "mi",
    native: "Māori"
  },
  {
    id: "81",
    name: "Marathi",
    code: "mr",
    native: "मराठी"
  },
  {
    id: "82",
    name: "Mizo",
    code: "lus",
    native: "Mizo"
  },
  {
    id: "83",
    name: "Mongolian",
    code: "mn",
    native: "Монгол"
  },
  {
    id: "84",
    name: "Myanmar (Burmese)",
    code: "my",
    native: "မြန်မာ"
  },
  {
    id: "85",
    name: "Nepali",
    code: "ne",
    native: "नेपाली"
  },
  {
    id: "86",
    name: "Norwegian",
    code: "no-NO",
    native: "norsk"
  },
  {
    id: "87",
    name: "Nyanja (Chichewa)",
    code: "ny",
    native: "Nyanja"
  },
  {
    id: "88",
    name: "Odia",
    code: "or",
    native: "ଓଡିଆ"
  },
  {
    id: "89",
    name: "Oromo",
    code: "om",
    native: "Afaan"
  },
  {
    id: "90",
    name: "Pashto",
    code: "ps-PK",
    native: "پښتو"
  },
  {
    id: "91",
    name: "Persian",
    code: "fa-IR",
    native: "فارسی"
  },
  {
    id: "92",
    name: "Polish",
    code: "pl-PL",
    native: "Polski"
  },
  {
    id: "93",
    name: "Portuguese",
    code: "pt-PT",
    native: "Português"
  },
  {
    id: "94",
    name: "Punjabi",
    code: "pa-IN",
    native: "ਪੰਜਾਬੀ"
  },
  {
    id: "95",
    name: "Quechua",
    code: "qu",
    native: "Runasimi"
  },
  {
    id: "96",
    name: "Romanian",
    code: "ro-RO",
    native: "Română"
  },
  {
    id: "97",
    name: "Russian",
    code: "ru-RU",
    native: "Русский"
  },
  {
    id: "98",
    name: "Samoan",
    code: "sm-WS",
    native: "Samoa"
  },
  {
    id: "99",
    name: "Sanskrit",
    code: "sa",
    native: "संस्कृत"
  },
  {
    id: "100",
    name: "Scots Gaelic",
    code: "gd",
    native: "Gàidhlig na h-Alba"
  },
  {
    id: "101",
    name: "Serbian",
    code: "sr-RS",
    native: "Српски"
  },
  {
    id: "102",
    name: "Shona",
    code: "sn-ZW",
    native: "Shona"
  },
  {
    id: "103",
    name: "Sindhi",
    code: "sd",
    native: "سنڌي"
  },
  {
    id: "104",
    name: "Sinhala",
    code: "si-LK",
    native: "සිංහල"
  },
  {
    id: "105",
    name: "Slovak",
    code: "sk-SK",
    native: "slovenský"
  },
  {
    id: "106",
    name: "Slovenian",
    code: "sl",
    native: "Slovenščina"
  },
  {
    id: "107",
    name: "Somali",
    code: "so-SO",
    native: "Soomaali"
  },
  {
    id: "108",
    name: "Spanish",
    code: "es-ES",
    native: "Español"
  },
  {
    id: "109",
    name: "Sundanese",
    code: "su",
    native: "basa Sunda"
  },
  {
    id: "110",
    name: "Swahili",
    code: "sw-SZ",
    native: "kiswahili"
  },
  {
    id: "111",
    name: "Swedish",
    code: "sv-SE",
    native: "svenska"
  },
  {
    id: "112",
    name: "Tajik",
    code: "tg",
    native: "тоҷикӣ"
  },
  {
    id: "113",
    name: "Tamil",
    code: "ta-LK",
    native: "தமிழ்"
  },
  {
    id: "114",
    name: "Tatar",
    code: "tt",
    native: "Татар"
  },
  {
    id: "115",
    name: "Telugu",
    code: "te-IN",
    native: "తెలుగు"
  },
  {
    id: "116",
    name: "Thai",
    code: "th-TH",
    native: "แบบไทย"
  },
  {
    id: "117",
    name: "Tigrinya",
    code: "ti-TI",
    native: "ትግሪኛ"
  },
  {
    id: "118",
    name: "Tsonga",
    code: "ts",
    native: "Tsonga"
  },
  {
    id: "119",
    name: "Turkish",
    code: "tr-TR",
    native: "Türkçe"
  },
  {
    id: "120",
    name: "Turkmen",
    code: "tk-TM",
    native: "Türkmenler"
  },
  {
    id: "121",
    name: "Ukrainian",
    code: "uk-UA",
    native: "українська"
  },
  {
    id: "122",
    name: "Urdu",
    code: "ur",
    native: "اردو"
  },
  {
    id: "123",
    name: "Uyghur",
    code: "ug",
    native: "ئۇيغۇر"
  },
  {
    id: "124",
    name: "Uzbek",
    code: "uz-UZ",
    native: "o'zbek"
  },
  {
    id: "125",
    name: "Vietnamese",
    code: "vi-VN",
    native: "Tiếng Việt"
  },
  {
    id: "126",
    name: "Welsh",
    code: "cy-GB",
    native: "Cymraeg"
  },
  {
    id: "127",
    name: "Western Frisian",
    code: "fy",
    native: "Westerfrysk"
  },
  {
    id: "128",
    name: "Xhosa",
    code: "xh-ZA",
    native: "isiXhosa"
  },
  {
    id: "129",
    name: "Yiddish",
    code: "yi-YD",
    native: "יידיש"
  },
  {
    id: "130",
    name: "Yoruba",
    code: "yo",
    native: "Detect"
  },
  {
    id: "131",
    name: "Zulu",
    code: "zu-ZA",
    native: "Detect"
  },
];
