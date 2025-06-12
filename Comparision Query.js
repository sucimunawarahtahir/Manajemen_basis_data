const database = 'UAS';
const collection = 'SUCI MUNAWARAH TAHIR';

use(database);

db.createCollection(collection);
db.buku.find({ harga: { $gt: 50000 } });
