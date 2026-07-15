import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ddpfr5o.mongodb.net/?appName=Cluster0`);
const db = client.db("Job-portal");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
   user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
      },
    },
  },
});