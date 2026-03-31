export interface ServiceProcessStep {
  step: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  detailText?: string;
  includes?: String[];
  processSteps?: ServiceProcessStep[];
}
