const customerRoles = {
  businessman: 1,
  investor: 2,
  admin: 3,
};

export const roles = (name) => {
  return customerRoles[name];
};
