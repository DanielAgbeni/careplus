import { z } from 'zod';

const UserFormValidation = z.object({
	username: z
		.string()
		.min(2, 'Username must be at least 2 characters.')
		.max(50, 'Username must be less than 50 characters.'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters.'),
	phone: z
		.string()
		.refine(
			(phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
			'Invalid phone number',
		),
});
export default UserFormValidation;
