export interface Patient {
  patient_id?: number;
  first_name?: string;
  last_name?: string;
  age: number;
  gender?: string;
  email?: string;
  avatar?: string;
}

export const AGE_FILTERS = {
  GREATER_THAN_45: 'greaterThan45',
  FROM_18_TO_30: 'from18To30',
  FROM_31_TO_45: 'from18To31',
};

export const SORT_ORDER = {
  ASC: 'ascending',
  DESC: 'descending',
};
