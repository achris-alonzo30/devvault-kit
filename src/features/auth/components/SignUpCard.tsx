"use client";
import { useState } from "react";
import { AuthFlow } from "@/features/auth/lib/types";
import { useAuthActions } from "@convex-dev/auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { TriangleAlert } from "lucide-react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SignUpCardProps {
  setState: (state: AuthFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const signUpByOAuth = (provider: "github" | "google") => {
    setPending(true);
    signIn(provider).finally(() => setPending(false));
  }

  const signUpByEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (account.password !== account.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setPending(true);
    signIn("password", {
      name: account.name,
      email: account.email,
      password: account.password,
      flow: "signUp",
    })
    .catch(() => {
      setError("Something went wrong");
    })
    .finally(() => setPending(false));
  }

  return (
    <Card className="w-full h-full p-8 bg-background text-foreground border-none shadow-xl shadow-neutral-900 mt-24">
      <CardHeader className="px-0 pt-0">
        <Logo />
        <CardTitle className="mt-4 md:mt-6">
          Sign up to continue
        </CardTitle>
        <CardDescription className="text-foreground/70">
          Use your email or another provider to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <span className="bg-destructive/15 p-3 rounded-md flex items-center text-foreground gap-x-2 text-sm">
          <TriangleAlert className="size-4" />
          {error}
        </span>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <aside className="flex flex-col gap-y-2.5">
          <Button
            size="sm"
            disabled={pending}
            variant="outline"
            onClick={() => signUpByOAuth("google")}
            className="w-full flex items-center justify-center font-semibold gap-x-2 bg-neutral-900 hover:bg-neutral-900/50 hover:text-foregorund text-foreground border-none"
          >
            <FcGoogle className="size-5" />
            Continue with Google
          </Button>
          <Button
            size="sm"
            disabled={pending}
            variant="outline"
            onClick={() => signUpByOAuth("github")}
            className="w-full flex items-center justify-center font-semibold gap-x-2 bg-neutral-900 hover:bg-neutral-900/50 hover:text-foreground text-foreground border-none"
          >
            <FaGithub className="size-5" />
            Continue with GitHub
          </Button>
        </aside>

        <Separator className="my-2 bg-foreground/50" />

        <form className="space-y-4" onSubmit={signUpByEmail}>
          <fieldset>
            <label htmlFor="name" className="text-sm font-medium text-foreground/70">Name</label>
            <Input
              required
              id="name"
              name="name"
              type="text"
              disabled={pending}
              value={account.name}
              placeholder="Enter your full name"
              className="bg-neutral-900 border-none"
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email" className="text-sm font-medium text-foreground/70">Email</label>
            <Input
              required
              id="email"
              name="email"
              type="email"
              disabled={pending}
              value={account.email}
              placeholder="Enter your email"
              className="bg-neutral-900 border-none"
              onChange={(e) => setAccount({ ...account, email: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password" className="text-sm font-medium text-foreground/70">Password</label>
            <Input
              required
              id="password"
              name="password"
              type="password"
              disabled={pending}
              value={account.password}
              placeholder="Enter your password"
              className="bg-neutral-900 border-none"
              onChange={(e) => setAccount({ ...account, password: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="confirm-password" className="text-sm font-medium text-foreground/70">Confirm Password</label>
            <Input
              required
              type="password"
              id="confirm-password"
              name="confirm-password"
              disabled={pending}
              value={account.confirmPassword}
              placeholder="Confirm your password"
              className="bg-neutral-900 border-none"
              onChange={(e) => setAccount({ ...account, confirmPassword: e.target.value })}
            />
          </fieldset>
          <Button
            size="sm"
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-[#fcba28] text-background font-semibold hover:bg-[#fcba28]/80"
          >
            Create account
          </Button>
        </form>
        <p className="text-xs text-center text-foreground/50">
          Already have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-[#fcba28] hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};