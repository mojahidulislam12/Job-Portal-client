"use client";

import { useState } from "react";
import { Form, TextField, Label, Input, TextArea, Button } from "@heroui/react";
import { createJob } from "@/lib/action/job";

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

export default function PostJobForm() {
  const [formData, setFormData] = useState<Job>({
    image: "",
    jobTitle: "",
    company: "",
    location: "",
    jobType: "",
    salary: "",
    deadline: "",
    description: "",
    requirements: "",
  });

  const [mockCompany] = useState({
    name: "Acme Corp (Auto-filled)",
    id: "company_123",
    isApproved: true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...formData,

      companyId: mockCompany.id,
      status: "active",
      isPubliclyVisible: true,
    };

    console.log(formData);

    // TODO: Save to database
    const res = await createJob(payload);
    if (res.insertedId) {
      alert("Successfully Posted");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="rounded-xl border p-6 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Post New Job</h1>

        <Form onSubmit={handleSubmit} className="space-y-5">
          {/* Job Title */}
          <TextField name="jobTitle">
            <Label>Job Title</Label>
            <Input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Frontend Developer"
            />
          </TextField>

          {/* Company */}
          <TextField name="company">
            <Label>Company</Label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Developer Hire"
            />
          </TextField>
          {/* Company Logo */}
          <TextField name="image">
            <Label>Company Logo URL</Label>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
            />
          </TextField>

          {formData.image && (
            <img
              src={formData.image}
              alt="Company Logo"
              className="h-20 w-20 rounded-lg border object-cover"
            />
          )}

          {/* Location */}
          <TextField name="location">
            <Label>Location</Label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Dhaka, Bangladesh"
            />
          </TextField>

          {/* Job Type */}
          <div className="space-y-2">
            <Label>Job Type</Label>

            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          {/* Salary */}
          <TextField name="salary">
            <Label>Salary</Label>
            <Input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="$1000 - $1500"
            />
          </TextField>

          {/* Deadline */}
          <TextField name="deadline">
            <Label>Application Deadline</Label>
            <Input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </TextField>

          {/* Description */}
          <TextField name="description">
            <Label>Description</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </TextField>

          {/* Requirements */}
          <TextField name="requirements">
            <Label>Requirements</Label>
            <TextArea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
            />
          </TextField>

          <Button type="submit">Post Job</Button>
        </Form>
      </div>
    </div>
  );
}
