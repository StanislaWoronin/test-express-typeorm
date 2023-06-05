import { validationResult } from 'express-validator';
import { Response, Request, NextFunction } from 'express';

export const inputValidation = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const error = errors.array({ onlyFirstError: true }).map((e: any)=> {
			return {
				message: e.msg,
				field: e.path,
			};
		});
		return res.status(400).json({ errorsMessages: error });
	}

	next();
};
