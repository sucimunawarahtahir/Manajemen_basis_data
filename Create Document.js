const database = 'UAS';
const collection = 'SUCI MUNAWARAH TAHIR';

use(database);

db.createCollection(collection);
db[collection].insertMany([
  { judul: "Belajar MongoDB",penulis: "Andi",stok: 15,harga: 75000,kategori: "Teknologi"},
  { judul: "Pemrograman JavaScript",penulis: "Budi",stok: 10,harga: 68000,kategori: "Teknologi"},
  { judul: "Bisnis Online untuk Pemula",penulis: "Citra",stok: 20,harga: 55000,kategori: "Bisnis"},
  { judul: "Manajemen Waktu",penulis: "Dina",stok: 12,harga: 60000,kategori: "Pengembangan Diri"}
]);
