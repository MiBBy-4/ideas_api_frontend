const CUSTOMER_ROLES = {
  businessman: 0,
  investor: 1,
  admin: 2,
};

export const roles = (name) => {
  return CUSTOMER_ROLES[name];
};
