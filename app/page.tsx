import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <CheckboxGroup
          label="Hackathon Participation Checklist"
          lineThrough
          defaultValue={[""]}
        >
        <p>We are excited to have you participate in this innovative hiring challenge. To ensure a smooth experience, please follow the steps below carefully</p>
          <Checkbox className="flex-1" value="review">
            Review the Hackathon Documentation
          </Checkbox>
          <div className="px-8">
            <p>Before you start, it's important to understand the riles, guidelines and expectations of the hackathon. Please go through the comprehensive documentation to get all the necessary information, including:</p>
            <li>An overview of the hackathon</li>
            <li>Detailed problem statement for each role.</li>
            <li>Instructions for the submission process.</li>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://stellax-technologies.gitbook.io/stellax-hack">Read the Documentation Here</a>
          </div>
          <Checkbox value="register">Register for the Hackathon</Checkbox>
          <div className="px-8">
            <li>To Participate, you need to register throught our dedicated GitHub repository. Follow the registration instructions to sign up for your prferred role.</li>
            <li>Registration will give you access to the problem statements and the necessary repositories.</li>
            <li>Make sure your GitHub username is correct, as this will be used for evaluation.</li>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/stellax-hackathon/registration.git">Register Here</a>
          </div>
          <Checkbox value="role">Role-Based Problem Statement</Checkbox>
          <div className="px-8">
            <li>After Registration, you will be assigned a role-based problem statement. Each problem is designed to test your skills and align with the job role you're applying for:</li>
            <li>AI Engineer</li>
            <li>Backend Engineer</li>
            <li>AI Engineer Intern</li>
            <li>Carefully read your problem statement and follow the instructions to start working on your project. Make sure to adhere to all submission guidelines to ensure your work is evaluated correctly</li>
          </div>
          <Checkbox value="submission">Submission Repository</Checkbox>
          <div className="px-8">
            <li>Once you have completed your project, you need to submit your work through the designated GitHub submission repository.</li>
            <li>Ensure that your code is well-documented, and all dependencies are clearly listed.</li>

          </div>
          <Checkbox value="profile">Update your GitHub Profile (optional)</Checkbox>
          <div className="px-8">
            <li>Your GitHub profile acts as your digital CV/Resume. While this step is optional, updating your GitHub profile with relevant information can strengthen your application.</li>
          </div>
        </CheckboxGroup>

        <h1>Note:</h1>
        <p>Make sure you complete each step to avoid missing out on this opportunity. We are excited to see what you build and how you tackle the challenges ahead. Good Luck, and may the best talent shine!</p>
      </main>
    </>
  );
}

