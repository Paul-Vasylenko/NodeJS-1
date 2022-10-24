import * as functions from 'firebase-functions';
import { Request, Response } from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https.onRequest((req: Request, res: Response) => {
	functions.logger.log('Testing firebase logger here');

	res.json({
		message: '11111 !',
		cookies: req.cookies,
		body: req.body,
		query: req.query,
	});
});
