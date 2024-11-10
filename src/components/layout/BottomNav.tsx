import { Home, FolderKanban, Calendar, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from "../../utils/constants.ts";

export function BottomNav() {
    const location = useLocation();

    const activeTab = (path:string) => {
        return location.pathname === path;
    };

    return (
        <nav className="rounded-t-2xl border-t-1 bg-white">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => (
                    <Link to={item.to} key={item.id}>
                        <button
                            key={item.id}
                            className={`flex flex-col items-center space-y-1 w-16`}
                        >
                            <item.icon
                                size={28}
                                color={`${activeTab(item.to) ? '#000000' : '#777777'}`}
                            />
                            <span className={`text-sm ${activeTab(item.to) ? 'font-black' : ''}`}>{item.label}</span>
                        </button>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
