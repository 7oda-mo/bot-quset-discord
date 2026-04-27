import { SupportedDatabaseTypes } from "../core/databaseConfig.js";
import { config as dotenvConfig } from "dotenv";
import { Config } from "../interface/config.js";
dotenvConfig();


export default {
    token: process.env.Token,
    embedColor: "#06c2fb",
    defaultLanguage: "ar",
    debugMode: true,
  //  allowedServers: ["1158846168957210635", "1187612357808107562"], // Example server IDs
    prefix: "!",
    developers: ["1016128744819265618"],
    database: {
        type: SupportedDatabaseTypes.MongoDB,
        url: "mongodb://localhost:27017/badge2",
    },


} as Config