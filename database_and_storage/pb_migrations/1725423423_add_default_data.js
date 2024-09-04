/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);

  const collection = dao.findCollectionByNameOrId("eecgvaxsskq0uun");

  const record = new Record(collection);
  record.setId('23m7tql9bli4qiz');
  record.set('message', 'Hello PocketBase!');
  
  dao.saveRecord(record);
}, (db) => {

  const dao = new Dao(db);

  try {
    const recordDelete = dao.findRecordsByFilter("eecgvaxsskq0uun", "id = \"23m7tql9bli4qiz\"")[0];
    dao.deleteRecord(recordDelete);
  } catch (_) {}
});