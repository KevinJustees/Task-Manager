export default function Button({ text, onClick, type = "button", color }) {
  const styles = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    small: "px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-xl",
    neutral: "bg-gray-700 hover:bg-gray-600 text-white"
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "w-full py-3 text-lg font-semibold rounded-2xl transition transform hover:scale-[1.02] " +
        (styles[color] || styles.primary)
      }
    >
      {text}
    </button>
  );
}
