import { validationResult } from 'express-validator';
import { Response, Request, NextFunction } from 'express';
import { log } from 'util';

export const inputValidation = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const errors = validationResult(req);
	console.log(errors);
	if (!errors.isEmpty()) {
		const error = errors.array({ onlyFirstError: true }).map((e: any) => {
			return {
				message: e.msg,
				field: e.path,
			};
		});
		return res.status(400).json({ errorsMessages: error });
	}

	next();
};
