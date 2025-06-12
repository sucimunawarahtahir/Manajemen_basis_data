const database = 'UAS';
const collection = 'validasi';

use(database);

db.createCollection(collection);
db.createCollection("buku", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["judul", "penulis", "stok", "harga"],
      properties: {
        judul: { bsonType: "string" },
        penulis: { bsonType: "string" },
        stok: { bsonType: "int", minimum: 0 },
        harga: { bsonType: "int", minimum: 0 }
      }
    }
  }
});
