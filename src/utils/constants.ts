import {Calendar, FolderKanban, Home, User} from "lucide-react";

export const navItems = [
    { id: 'home', to: '/', icon: Home, label: '首页' },
    { id: 'projects', to: '/projects', icon: FolderKanban, label: '项目' },
    { id: 'activities', to: '/activities', icon: Calendar, label: '活动' },
    { id: 'profile', to: '/profile', icon: User, label: '我的' },
];

export const getScreenName = (path: string) => {
    return navItems.find(item => item.to === path) != undefined ? navItems.find(item => item.to === path).label : '';
}
