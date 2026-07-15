const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export interface Job {
  image: string;
  jobTitle: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  deadline: string;
  description: string;
  requirements: string;
}

export interface CreateJobResponse {
  success: boolean;
  message: string;
  insertedId?: string;
}





export const createJob = async (newJobData: Job) => {
  const res = await fetch(`${baseUrl}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJobData),
  });

//   if (!res.ok) {
//     throw new Error("Failed to create job");
//   }

  return res.json();
};