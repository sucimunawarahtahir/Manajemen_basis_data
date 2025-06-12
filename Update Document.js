const database = 'UAS';
const collection = 'SUCI MUNAWARAH TAHIR';

use(database);

db.createCollection(collection);
db.buku.updateOne(
  { judul: "Belajar MongoDB" },
  { $inc: { stok: 5 } }
);
