"use client";

import { Dispatch, SetStateAction, createContext } from "react";

interface ContextProps {
  sideBarOpen: boolean;
  setGame: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext({
  sideBarOpen: false,
  setGame: () => ({})
});

export 