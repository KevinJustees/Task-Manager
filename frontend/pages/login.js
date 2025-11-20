import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../components/AuthProvider";
import API from "../lib/api";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import ErrorBox from "../components/ui/ErrorBox";

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      router.push("/dashboard");
    } catch {
      setErrorMsg("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <Card className="max-w-md w-full p-10 shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Login
        </h2>

        {errorMsg && <ErrorBox message={errorMsg} />}

        <form className="space-y-6" onSubmit={submit}>
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

          <Button text="Login" type="submit" />

          <p className="text-center text-gray-300 text-lg">
            Don’t have an account?{" "}
            <a href="/register" className="font-bold text-indigo-400">
              Register
            </a>
          </p>
        </form>
      </Card>

    </div>
  );
}
