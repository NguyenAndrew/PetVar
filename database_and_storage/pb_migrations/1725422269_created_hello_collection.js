/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "eecgvaxsskq0uun",
    "created": "2024-09-04 03:57:49.146Z",
    "updated": "2024-09-04 03:57:49.146Z",
    "name": "hello_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7l64bokn",
        "name": "message",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eecgvaxsskq0uun");

  return dao.deleteCollection(collection);
})
