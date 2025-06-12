const database = 'UAS';
const collection = 'SUCI MUNAWARAH TAHIR';

use(database);

db.createCollection(collection);
db.buku.aggregate([
  {
    $group: {
      _id: "$kategori",
      totalStok: { $sum: "$stok" }
    }
  }
]);
