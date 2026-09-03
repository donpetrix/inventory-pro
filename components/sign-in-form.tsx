"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignIn, useUser } from "@hexclave/next";

export default function SignInForm() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  return <SignIn />;
}
