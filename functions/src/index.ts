import * as functions from 'firebase-functions';
import { Request, Response } from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const hello = functions.https.onRequest((req: Request, res: Response) => {
	functions.logger.log('Testing firebase logger here');

	res.json({
		message: '2222222 !',
		cookies: req.cookies,
		body: req.body,
		query: req.query,
	});
});
