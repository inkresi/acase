"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() =>
        signIn("github", { callbackUrl: callbackUrl ?? "/dashboard" })
      }
    >
      Continue with Github
    </Button>
  );
}
