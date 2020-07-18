const serviceAccount = require("./secrets/serviceAccountKey.json");
import * as admin from "firebase-admin";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG!);
adminConfig.credential = admin.credential.cert(serviceAccount);

admin.initializeApp(adminConfig);

export const db = admin.firestore();

export default admin;
