import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(`mongodb://job-portal:zXEvBAkS9GRWrjcM@ac-cosbbs4-shard-00-00.ddpfr5o.mongodb.net:27017,ac-cosbbs4-shard-00-01.ddpfr5o.mongodb.net:27017,ac-cosbbs4-shard-00-02.ddpfr5o.mongodb.net:27017/?ssl=true&replicaSet=atlas-7cczb7-shard-0&authSource=admin&appName=Cluster0`);
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
          defaultValue: "JOB_SEEKER",
      },
    },
  },
  
});