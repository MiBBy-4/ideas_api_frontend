const CUSTOMER_ROLES = {
  businessman: 1,
  investor: 2,
  admin: 3,
};

export const roles = (name) => {
  return CUSTOMER_ROLES[name];
};
