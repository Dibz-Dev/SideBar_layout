import { X, ArrowRight, Home, Info, Settings, User } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={`h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white 
                  transition-all duration-300 flex-shrink-0 overflow-hidden
                  ${isOpen ? "w-72" : "w-16"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {isOpen && <h2 className="text-2xl font-bold">Dashboard</h2>}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-800 rounded-xl transition-colors"
        >
          {isOpen ? <X size={24} /> : <ArrowRight size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="pt-6">
        <ul className="space-y-1">
          <SidebarLink icon={Home} label="Home" isOpen={isOpen} />
          <SidebarLink icon={Info} label="About" isOpen={isOpen} />
          <SidebarLink icon={Settings} label="Settings" isOpen={isOpen} />
          <SidebarLink icon={User} label="Profile" isOpen={isOpen} />
        </ul>
      </nav>
    </div>
  );
};

const SidebarLink = ({
  icon: Icon,
  label,
  isOpen,
}: {
  icon: React.ElementType;
  label: string;
  isOpen: boolean;
}) => (
  <li>
    <a
      href="#"
      className={`flex items-center justify-center md:justify-start gap-3 
                 ${isOpen ? "px-6 py-3" : "py-4 px-3"} 
                 hover:bg-gray-800 mx-2 rounded-2xl transition-all group relative`}
    >
      <Icon
        size={24}
        className="text-gray-400 group-hover:text-blue-400 transition-colors shrink-0"
      />

      {isOpen && <span className="font-medium">{label}</span>}

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
          {label}
        </div>
      )}
    </a>
  </li>
);

export default Sidebar;
