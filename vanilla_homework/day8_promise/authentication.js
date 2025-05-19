export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  let p = "";
  for (let i = password.length - 1; i >= 0; i--) {
    p += password[i];
  }
  p += "encoded";
  return p;
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  const passwordlen = encrypted.length - 8;
  let p = "";
  for (let i = passwordlen; i >= 0; i--) {
    p += encrypted[i];
  }
  return p;
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
  // find will return the first user that match the email
  const res = users.find((user) => {
    return user.email === email;
  });
  if (!res) {
    throw Error("User not found");
  }
  return res;
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
  let p1 = encodePassword(password);
  if (p1 !== encrypted) {
    throw Error("Invalid password");
  }
};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"
  try {
    //first check email, if same email, will return the user, then use the user in verify password
    const user = await getUserByEmail(email);
    await verifyPassword(password, user.password);
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      token: "token",
    };
  } catch (error) {
    return error.message;
  }
};
