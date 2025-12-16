export type RoleInterest =
  | "AI Engineer"
  | "Data Scientist"
  | "ML Engineer"
  | "Research"
  | "Other";

export type ProjectType =
  | "Fraud Detection"
  | "Risk Management"
  | "ML Analytics"
  | "Computer Vision"
  | "Custom AI";

export interface CooperationFormData {
  fullName: string;
  email: string;
  roleInterest: RoleInterest;
  skillsExperience: string;
  motivation: string;
  resumeLink: string;
}

export interface ProjectFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  industry: string;
  projectType: ProjectType;
  projectDescription: string;
  timeline: string;
  budgetRange?: string;
  confidentiality: boolean;
}



