import { validationResult } from 'express-validator';
import { Response, Request, NextFunction } from 'express';

export const inputValidation = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const error = errors.array({ onlyFirstError: true }).map(e => {
			console.log(e);
			return {
				message: e.msg,
				//field: e.param,
			};
		});
		return res.status(400).json({ errorsMessages: error });
	}

	next();
};
