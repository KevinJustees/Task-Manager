import { useState } from "react";
import { useRouter } from "next/router";
import API from "../lib/api";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import ErrorBox from "../components/ui/ErrorBox";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    setErrorMsg("");

    try {
      await API.post("/auth/register", form);
      router.push("/login");
    } catch {
      setErrorMsg("Email already exists or input invalid");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <Card className="max-w-md w-full p-10 shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Create Account
        </h2>

        {errorMsg && <ErrorBox message={errorMsg} />}

        <form className="space-y-6" onSubmit={submit}>
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            placeholder="Email Address"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button text="Register" type="submit" />

          <p className="text-center text-gray-300 text-lg">
            Already have an account?{" "}
            <a href="/login" className="font-bold text-indigo-400">
              Login
            </a>
          </p>
        </form>
      </Card>

    </div>
  );
}
