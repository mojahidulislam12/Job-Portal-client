const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export interface Job {
  _id?: string;
  image: string;
  jobTitle: string;
  company: string;
  companyId: string;
  location: string;
  jobType: string;
  salary: string;
  deadline: string;
  description: string;
  requirements: string;
  status: string;
}

export const getCompanyJobs = async (
  companyId: string,
  status: string = "active"
): Promise<Job[]> => {
  const res = await fetch(
    `${baseUrl}/jobs?companyId=${companyId}&status=${status}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
};