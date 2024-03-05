import { useId, useMemo } from "react";
import { IconsType } from "components/atoms/Icon";

export type NavigationType = {
  id: string;
  name: string;
  path: string;
  icon: IconsType;
};

export type TableHeading = {
  id: string;
  name: string;
  sorteable?: boolean;
};

const users = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Emily Williams",
  "Christopher Brown",
  "Jessica Jones",
  "David Garcia",
  "Olivia Martinez",
  "William Davis",
  "Sophia Rodriguez",
];

let lastGeneratedId = 44;
export const generateUniqueId = (): number => {
  lastGeneratedId++;
  return lastGeneratedId;
};

export const getRandomUser = (): string => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

export const useStaticDataMock = () => {
  const generateID = () => {
    return Math.random().toString(36).substring(7);
  };

  const navigation: NavigationType[] = [
    {
      id: useId(),
      name: "Browse",
      path: "/",
      icon: "iconHamburger",
    },
    {
      id: useId(),
      name: "Add new questions",
      path: "/add",
      icon: "iconAdd",
    },
    {
      id: useId(),
      name: "Api",
      path: "/api",
      icon: "iconTool",
    },
    {
      id: useId(),
      name: "Discuss",
      path: "/discuss",
      icon: "iconMessage",
    },
    {
      id: useId(),
      name: "Login",
      path: "/login",
      icon: "iconLogin",
    },
  ];

  const tableHeading: TableHeading[] = useMemo(
    () => [
      {
        id: generateID(),
        name: "ID",
        sorteable: true,
      },
      {
        id: generateID(),
        name: "Category",
      },
      {
        id: generateID(),
        name: "Type",
      },
      {
        id: generateID(),
        name: "Difficulty",
      },
      {
        id: generateID(),
        name: "Question / Statement",
      },
      {
        id: generateID(),
        name: "Created By",
      },
    ],
    [],
  );

  return { navigation, tableHeading };
};
