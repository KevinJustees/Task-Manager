export default function Input(props) {
  return (
    <input
      {...props}
      className="
        w-full p-4 rounded-2xl 
        bg-[#111] border border-gray-700 
        text-white text-lg
        placeholder-gray-400
        focus:ring-2 focus:ring-indigo-500
        outline-none transition
      "
    />
  );
}
