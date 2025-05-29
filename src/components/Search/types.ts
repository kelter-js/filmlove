import { SetStateAction, Dispatch } from "react";

export interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}
