const database = 'UAS';
const collection = 'SUCI MUNAWARAH TAHIR';

use(database);

db.createCollection(collection);
db.buku.bulkWrite([
  {
    insertOne: {
      document: {
        judul: "Manajemen Waktu",
        penulis: "Budi",
        stok: 20,
        harga: 60000
      }
    }
  },
  {
    updateOne: {
      filter: { judul: "Manajemen Waktu" },
      update: { $set: { stok: 25 } }
    }
  }
]);
