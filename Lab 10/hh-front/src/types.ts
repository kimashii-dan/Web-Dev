interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company_id: number;
  company_name: string;
}

export type { Company, Vacancy };
