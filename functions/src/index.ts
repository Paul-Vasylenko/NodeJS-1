import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export default functions.https.onRequest((req, res) => {
  res.json({
    message: 'Successful!',
    cookies: req.cookies,
    body: req.body,
    query: req.query,
  });
});
