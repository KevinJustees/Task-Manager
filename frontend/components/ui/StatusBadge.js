export default function StatusBadge({ status }) {
  const styles = {
    "todo": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "in-progress": "bg-blue-100 text-blue-800 border-blue-300",
    "done": "bg-green-100 text-green-800 border-green-300"
  };

  const icons = {
    "todo": (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M5 12h14" strokeLinecap="round"/>
      </svg>
    ),
    "in-progress": (
      <svg className="w-5 h-5 mr-2 animate-spin-slow" fill="none" stroke="currentColor"
        strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 4v4m0 8v4m8-8h-4M8 12H4" strokeLinecap="round"/>
      </svg>
    ),
    "done": (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return (
    <span
      className={`flex items-center w-fit px-3 py-1 border rounded-full font-semibold text-sm ${styles[status]}`}
    >
      {icons[status]}
      {status.replace("-", " ")}
    </span>
  );
}
