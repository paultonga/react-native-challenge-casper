import {ReactNode} from 'react';
import {Patient} from './Patient';

export interface DataContextProps {
  patients?: Patient[];
  searchRecords: (query: string) => void;
  deleteRecord: (id: string) => void;
  clearFilter: () => void;
  filter: (age?: string, gender?: string) => void;
  sortRecords: (order: string) => void;
}

export interface DataProviderProps {
  children: ReactNode;
}
