import { Repository, Client, Entity, Schema } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class NFT extends Entity {}
let schema = new Schema(
  NFT,
  {
    Symbel: { type: "string", required: true },
    Type: { type: "string", required: true },
    Timestamp: { type: "number", required: true },
    // !TODO: Add more fields
  },
  {
    dataStructure: "JSON",
  }
);

export async function createNFT(data) {
  await connect();
  const repo = new Repository(schema, client);
  const NFT = repo.createEntity(data);
  const id = await repo.save(NFT);
  return id;
}
