export interface Service {
  title: string;
  description: string;
  category: 'Design' | 'Engineering' | 'Consultancy';
}

export interface Software {
  name: string;
  logo: string;
}

export type ProjectSize = 'Rooftop (kW)' | 'Utility (MW)' | 'C&I';