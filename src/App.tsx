import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
    return (
        <Router>
            <div className="h-screen flex flex-col">
                <Header />
                <div className={"flex flex-col overflow-y-auto min-h-[calc(100vh-8rem)] p-2"}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/activities" element={<ActivitiesPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
