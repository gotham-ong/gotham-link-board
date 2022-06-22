import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, GAMES_COLLECTION_NAME } =
  process.env;

export const collections: { gotham?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
  );

  await client.connect();

  const db: mongoDB.Db = client.db(DB_NAME);

  const helloCollection: mongoDB.Collection = db.collection(
    GAMES_COLLECTION_NAME as string
  );

  collections.gotham = helloCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${helloCollection.collectionName}`
  );
}
