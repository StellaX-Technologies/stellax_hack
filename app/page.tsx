import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <Link
          href="./"
          target="_blank"
        >
          <Button className="flex items-center gap-2" size={"sm"}>
            <span>Register Here</span>
          </Button>
        </Link>
      </main>
    </>
  );
}
