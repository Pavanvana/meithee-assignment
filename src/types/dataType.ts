export interface dataType {
  id: number;
  jobTitle: string;
  roleType: string;
  workLocation: string;
  jobLocationCountry: string;
  jobLocationState: string;
  jobLocationCity: string;
  createdAt: string;
}

export interface jobsDataType {
  data: dataType[];
  lastPage: number;
}
