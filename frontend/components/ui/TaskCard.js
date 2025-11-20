import StatusBadge from "./StatusBadge";
import Button from "./Button";

export default function TaskCard({ task, onDelete }) {
  if (!task || typeof task !== "object") {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-red-700">
        Invalid task data
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition transform hover:scale-[1.01] animate-fade">

      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">
            {task.title}
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            {task.description || "No description provided"}
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <StatusBadge status={task.status} />
          <Button text="Delete" color="danger" onClick={onDelete} />
        </div>
      </div>

    </div>
  );
}
