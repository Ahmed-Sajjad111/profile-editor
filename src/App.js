import './App.css';
import Profile from './Profile';
import EditProfile from './EditProfileForm';
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;