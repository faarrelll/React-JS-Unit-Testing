import { User } from "@/lib/interfaces";
import React, { createContext, useEffect } from "react";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const createUserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    setUser((prev) => ({
      ...prev,
      id: 1,
      firstName: "John Doe",
      lastName: undefined,
      email: "johndoe@example.com",
      role: "user",
      img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1710201315/samples/smile.jpg",
      background:
        "https://res.cloudinary.com/dixdqxpza/image/upload/v1710201297/samples/cloudinary-group.jpg",
    }));
  }, []);

  return (
    <createUserContext.Provider value={{ user, setUser }}>
      {children}
    </createUserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(createUserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
