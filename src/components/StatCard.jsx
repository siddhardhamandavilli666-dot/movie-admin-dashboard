export default function StatCard({ title, value, change, icon }) {
  return (
    <div className="bg-[#1e293b] p-5 rounded-xl flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-white text-2xl font-bold">{value}</h2>
        <p className="text-green-400 text-xs">{change}</p>
      </div>
      <div className="bg-orange-500/20 p-3 rounded-lg text-orange-400">
        {icon}
      </div>
    </div>
  );
}
