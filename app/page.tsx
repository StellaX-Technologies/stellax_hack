import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { SignupFormDemo } from "@/components/register";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <SignupFormDemo />
      </main>
    </>
  );
}
