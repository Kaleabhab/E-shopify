// validateForm.js placeholder
// validateForm.js placeholder
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    if (!formData[field]) {
      errors[field] = `${field} is required`;
    } else if (rules[field].pattern && !rules[field].pattern.test(formData[field])) {
      errors[field] = rules[field].message || `${field} is invalid`;
    }
  });

  return errors;
};