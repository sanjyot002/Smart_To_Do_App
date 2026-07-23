import {
  CalendarCheck,
  ChartBar,
  CheckSquare,
  LayoutDashboard,
  LucideLogOut,
  Settings,
  Star,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm">

      <div className="px-6">
      <ul className="space-y-3">
        <li className="flex items-center gap-3 p-3 rounded-lg bg-blue-100 text-blue-600 font-semibold cursor-pointer">
          <LayoutDashboard />
          Dashboard
        </li>
        <li className="flex space-x-3">
          <CheckSquare />
          My Tasks
        </li>
        <li className="flex">
          <Star />
          Important
        </li>
        <li className="flex">
          <CalendarCheck />
          Calender
        </li>
        <li className="flex">
          <ChartBar />
          Analytics
        </li>
        <li className="flex">
          <Settings />
          Settings
        </li>
        <li className="flex">
          <LucideLogOut />
          Logout
        </li>
      </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
