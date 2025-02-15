export type GoogleProfileType = {
  id: string;
  displayName: string;
  emails: [
    {
      value: string;
    }
  ];
};

export type ProfileType = {
  email: string;
  password?: string;
  googleId?: string;
  pseudo: string;
};
