const z = require('zod');

const productValidationSchema = z.object({
  Date: z.date().optional(),
  User: z.string().min(1, 'User ID is required'),
  Title: z.string().min(1, 'Product title must be at least 1 character'),
  Description: z.string().max(250, 'Product description must be at most 250 characters'),
  Category: z.string().min(1, 'Category is required'),
  Condition: z.string().min(1, 'Condition is required'),
  Price: z.number().min(0, 'Product price must be a non-negative number'),
  Location: z.object({
      zipCode: z.string().min(5, 'Zip code must be 5 numbers'),
  }),
});


const productValidation = (data) => {
  try {
    return productValidationSchema.parse(data);
  } catch (error) {
    return { error };
  }
};

module.exports.productValidation = productValidation;