export default function Card({ children, className = "" }) {
  return (
    <div
      className={
        "glass-dark rounded-3xl p-6 shadow-xl text-white animate-fade " +
        className
      }
    >
      {children}
    </div>
  );
}
