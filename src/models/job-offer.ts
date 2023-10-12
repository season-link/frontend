export interface JobOffer {
  id: string;
  jobId: string;
  from: Date;
  to: Date;
  currencyCountryId: string;
  hourlySalary: number;
  hoursPerWeek: number;
  description: string;
  address: string;
  companyId: string;
}
