import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import StatusBadge from "../components/ui/StatusBadge";
import TaskCard from "../components/ui/TaskCard";
import ErrorBox from "../components/ui/ErrorBox";

const BASE = "http://localhost:5000/api";

// Fetch Helper
async function api(endpoint, method = "GET", body = null) {
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  const res = await fetch(`${BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return res.ok ? res.json() : Promise.reject(await res.json());
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");
    loadAll();
  }, []);

  async function loadAll() {
    try {
      const u = await api("/user/me");
      const t = await api("/tasks");

      setUser(u);
      setTasks(Array.isArray(t) ? t : []);
    } catch (err) {
      setError(err?.message || "Failed to load data");
    }
  }

  async function handleCreate(e) {
    e.preventDefault();
    setError("");

    if (!form.title.trim())
      return setError("Please enter a task title");

    try {
      await api("/tasks", "POST", form);
      setForm({ title: "", description: "", status: "todo" });
      loadAll();
    } catch {
      setError("Could not create task");
    }
  }

  async function handleDelete(id) {
    try {
      await api(`/tasks/${id}`, "DELETE");
      loadAll();
    } catch {
      setError("Could not delete task");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  // FILTER + SEARCH
  const filtered = tasks
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (filter === "all" ? true : t.status === filter));

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-extrabold">Dashboard</h1>
          <p className="text-gray-400 mt-2 text-lg">
            Welcome,
            <span className="text-indigo-400 ml-2 font-bold text-2xl">
              {user?.name}
            </span>
          </p>
        </div>

        {/* Bigger Logout Button */}
        <button
          onClick={logout}
          className="
            px-5 py-3 text-base font-semibold
            bg-red-600 hover:bg-red-700
            rounded-2xl shadow-lg shadow-red-900/20
            transition transform hover:scale-[1.03]
          "
        >
          Logout
        </button>
      </header>

      {error && <ErrorBox message={error} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT COLUMN */}
        <div className="space-y-8">

          {/* Create Task */}
          <Card>
            <h2 className="text-3xl font-bold">Create New Task</h2>

            <form onSubmit={handleCreate} className="space-y-5 mt-5">

              <Input
                placeholder="Task title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <textarea
                placeholder="Task description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="
                  w-full p-4 rounded-2xl
                  bg-[#111] border border-gray-700
                  text-white text-lg placeholder-gray-400
                  focus:ring-2 focus:ring-indigo-500
                  outline-none transition
                "
                rows={3}
              />

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                className="
                  w-full p-4 rounded-2xl bg-[#111]
                  border border-gray-700 text-lg
                  text-white focus:ring-2 focus:ring-indigo-500
                "
              >
                <option value="todo">To do</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
              </select>

              <Button text="Add Task" type="submit" />
            </form>
          </Card>

          {/* Search + Filter */}
          <Card>
            <h3 className="text-2xl font-bold">Search & Filter</h3>

            <div className="mt-5 space-y-4">
              <Input
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="flex gap-2">
                {["all", "todo", "in-progress", "done"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-semibold
                      transition border
                      ${
                        filter === f
                          ? "bg-indigo-600 border-indigo-500"
                          : "bg-[#111] border-gray-700"
                      }
                    `}
                  >
                    {f.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* QUICK STATS moved to RIGHT TOP */}
          <Card>
            <h2 className="text-3xl font-bold mb-4">Quick Stats</h2>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-yellow-600/20 border border-yellow-500/20 text-center animate-float">
                <div className="text-sm text-gray-300">To-do</div>
                <div className="text-3xl font-extrabold text-yellow-300">
                  {tasks.filter((t) => t.status === "todo").length}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-600/20 border border-blue-500/20 text-center animate-float">
                <div className="text-sm text-gray-300">In Progress</div>
                <div className="text-3xl font-extrabold text-blue-300">
                  {tasks.filter((t) => t.status === "in-progress").length}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-green-600/20 border border-green-500/20 text-center animate-float">
                <div className="text-sm text-gray-300">Done</div>
                <div className="text-3xl font-extrabold text-green-300">
                  {tasks.filter((t) => t.status === "done").length}
                </div>
              </div>
            </div>
          </Card>

          {/* Task List */}
          {filtered.length === 0 && (
            <Card className="text-center py-12 text-gray-400">
              No tasks found — create one from the left panel.
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((t) => (
              <TaskCard
                key={t._id}
                task={t}
                onDelete={() => handleDelete(t._id)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
