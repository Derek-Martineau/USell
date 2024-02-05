const z = require('zod');

// Validates when a new user creates an account
const newUserValidation = data => {
  const registerValidationSchema = z.object({
    username: z.string().min(6, 'Username must be 6 characters or more'),
    email: z.string().email('Please input a valid email'),
    password: z.string().min(8, 'Password must be 8 or more characters').trim(),
    isAdmin: z.boolean().default(false), // Assuming isAdmin is false by default
  });

  return registerValidationSchema.safeParse(data);
};

// Validate user request when logging in
const userLoginValidation = data => {
  const loginValidationSchema = z.object({
    username: z.string().min(6, 'Username must be 6 characters or more'),
    password: z.string().min(8, 'Password must be 8 or more characters').trim(),
  });

  return loginValidationSchema.safeParse(data);
};

module.exports.newUserValidation = newUserValidation;
module.exports.userLoginValidation = userLoginValidation;
