import { ChevronLeft } from 'lucide-react';
import {Link, useLocation} from "react-router-dom";
import {getScreenName} from "../../utils/constants.ts";

export function Header() {
    const location = useLocation();

    return (
        <div className="bg-white z-50 border-1 border-gray-300 rounded-b-xl">
            <div className="flex items-center justify-between px-4 h-16">
                <div className="flex items-center space-x-2">
                    <span>
                        {
                            location.pathname === '/' ? (
                                <span></span>//<Home size={26} className={"text-gray-500"} />
                            ) : (
                                <Link to={'/'}>
                                    <ChevronLeft size={26} className={"text-gray-500"} />
                                </Link>
                            )
                        }
                    </span>
                    <span className="text-gray-800 font-black text-2xl tracking-widest">
                        {location.pathname === '/' ? '云济会' : getScreenName(location.pathname)}
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                </div>
            </div>
        </div>
    );
}
