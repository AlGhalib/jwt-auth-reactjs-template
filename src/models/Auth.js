// Global constants
const SESSION_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};

// Session interface
export const ISession = {
  session: { email: "" },
  status: SESSION_STATUS.INACTIVE,
};

// Login request interface
export const ILoginRequest = {
  email: "",
  password: "",
};

// Signup request interface
export const ISignupRequest = {
  name: "",
  email: "",
  password: "",
};
