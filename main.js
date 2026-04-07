let container = document.getElementById("conatainer");

let malmotlar = [
  {
    "id": 1,
    "ism": "Farhod",
    "familiya": "Abdullayev",
    "yosh": 28,
    "shahar": "Toshkent",
    "telefon": "+998901234567",
    "email": "farhod.abdullayev@example.com",
    "yaratilgan_sana": "2025-01-15"
  },
  {
    "id": 2,
    "ism": "Laylo",
    "familiya": "Karimova",
    "yosh": 24,
    "shahar": "Samarqand",
    "telefon": "+998911234568",
    "email": "laylo.karimova@example.com",
    "yaratilgan_sana": "2025-02-03"
  },
  {
    "id": 3,
    "ism": "Jamshid",
    "familiya": "Rahimov",
    "yosh": 31,
    "shahar": "Buxoro",
    "telefon": "+998931234569",
    "email": "jamshid.rahimov@example.com",
    "yaratilgan_sana": "2024-11-20"
  },
  {
    "id": 4,
    "ism": "Nilufar",
    "familiya": "To‘rayeva",
    "yosh": 26,
    "shahar": "Toshkent",
    "telefon": "+998901234570",
    "email": "nilufar.torayeva@example.com",
    "yaratilgan_sana": "2025-03-10"
  },
  {
    "id": 5,
    "ism": "Aziz",
    "familiya": "Sobirov",
    "yosh": 29,
    "shahar": "Andijon",
    "telefon": "+998911234571",
    "email": "aziz.sobirov@example.com",
    "yaratilgan_sana": "2025-01-28"
  },
  {
    "id": 6,
    "ism": "Madina",
    "familiya": "Xoliqova",
    "yosh": 22,
    "shahar": "Farg‘ona",
    "telefon": "+998931234572",
    "email": "madina.kholikova@example.com",
    "yaratilgan_sana": "2025-04-05"
  },
  {
    "id": 7,
    "ism": "Rustam",
    "familiya": "Mamadaliyev",
    "yosh": 35,
    "shahar": "Toshkent",
    "telefon": "+998901234573",
    "email": "rustam.mamadaliyev@example.com",
    "yaratilgan_sana": "2024-12-12"
  },
  {
    "id": 8,
    "ism": "Shaxnoza",
    "familiya": "Ismoilova",
    "yosh": 27,
    "shahar": "Namangan",
    "telefon": "+998911234574",
    "email": "shakhnoza.ismailova@example.com",
    "yaratilgan_sana": "2025-02-18"
  },
  {
    "id": 9,
    "ism": "Sardor",
    "familiya": "Qodirov",
    "yosh": 30,
    "shahar": "Urganch",
    "telefon": "+998931234575",
    "email": "sardor.qodirov@example.com",
    "yaratilgan_sana": "2025-03-22"
  },
  {
    "id": 10,
    "ism": "Zuhra",
    "familiya": "Ahmedova",
    "yosh": 25,
    "shahar": "Toshkent",
    "telefon": "+998901234576",
    "email": "zuhra.ahmedova@example.com",
    "yaratilgan_sana": "2025-01-08"
  },
  {
    "id": 11,
    "ism": "Akmal",
    "familiya": "Nazarov",
    "yosh": 33,
    "shahar": "Qarshi",
    "telefon": "+998911234577",
    "email": "akmal.nazarov@example.com",
    "yaratilgan_sana": "2024-10-30"
  },
  {
    "id": 12,
    "ism": "Gulnoza",
    "familiya": "Tursunova",
    "yosh": 23,
    "shahar": "Toshkent",
    "telefon": "+998931234578",
    "email": "gulnoza.tursunova@example.com",
    "yaratilgan_sana": "2025-04-01"
  },
  {
    "id": 13,
    "ism": "Jasur",
    "familiya": "Boltayev",
    "yosh": 28,
    "shahar": "Jizzax",
    "telefon": "+998901234579",
    "email": "jasur.boltayev@example.com",
    "yaratilgan_sana": "2025-02-25"
  },
  {
    "id": 14,
    "ism": "Sevinch",
    "familiya": "Xaydarova",
    "yosh": 24,
    "shahar": "Navoiy",
    "telefon": "+998911234580",
    "email": "sevinch.khaydarova@example.com",
    "yaratilgan_sana": "2025-03-15"
  },
  {
    "id": 15,
    "ism": "Ulug‘bek",
    "familiya": "Abdullayev",
    "yosh": 32,
    "shahar": "Toshkent",
    "telefon": "+998931234581",
    "email": "ulugbek.abdullayev@example.com",
    "yaratilgan_sana": "2024-11-05"
  },
  {
    "id": 16,
    "ism": "Dildora",
    "familiya": "Yusupova",
    "yosh": 26,
    "shahar": "Termiz",
    "telefon": "+998901234582",
    "email": "dildora.yusupova@example.com",
    "yaratilgan_sana": "2025-01-19"
  },
  {
    "id": 17,
    "ism": "Sherzod",
    "familiya": "Raxmatullayev",
    "yosh": 29,
    "shahar": "Toshkent",
    "telefon": "+998911234583",
    "email": "sherzod.rakhmatullayev@example.com",
    "yaratilgan_sana": "2025-04-10"
  },
  {
    "id": 18,
    "ism": "Oysha",
    "familiya": "Qosimova",
    "yosh": 21,
    "shahar": "Sirdaryo",
    "telefon": "+998931234584",
    "email": "oysha.qosimova@example.com",
    "yaratilgan_sana": "2025-02-07"
  },
  {
    "id": 19,
    "ism": "Bobur",
    "familiya": "Mirzayev",
    "yosh": 34,
    "shahar": "Toshkent",
    "telefon": "+998901234585",
    "email": "bobur.mirzayev@example.com",
    "yaratilgan_sana": "2024-12-28"
  },
  {
    "id": 20,
    "ism": "Malika",
    "familiya": "Sultonova",
    "yosh": 27,
    "shahar": "Buxoro",
    "telefon": "+998911234586",
    "email": "malika.sultonova@example.com",
    "yaratilgan_sana": "2025-03-30"
  }
]