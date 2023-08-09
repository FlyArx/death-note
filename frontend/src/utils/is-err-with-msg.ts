import { ErrorWithMessage } from '../types';

export const isErrWithMsg = (e: unknown): e is ErrorWithMessage => {
	return (
		typeof e === 'object' &&
		e !== null &&
		'data' in e &&
		typeof (e as Record<string, unknown>).data === 'object'
	);
};
