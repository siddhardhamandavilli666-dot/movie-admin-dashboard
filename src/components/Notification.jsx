export default function Notification({ message, type }) {
  if (!message) return null;

  return (
    <div
      className={`mb-4 px-4 py-2 rounded-lg text-sm
      ${
        type === "success"
          ? "bg-green-500/20 text-green-400"
          : "bg-red-500/20 text-red-400"
      }`}
    >
      {message}
    </div>
  );
}
