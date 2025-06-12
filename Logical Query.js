const database = 'UAS';
const collection = 'SUCI MUNAWARAH TAHIR';

use(database);

db.createCollection(collection);
db.buku.find({
  $or: [
    { kategori: "Teknologi" },
    { kategori: "Bisnis" }
  ]
});
