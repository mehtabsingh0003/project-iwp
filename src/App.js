// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import TrackList from './components/TrackList';
import NowPlaying from './components/NowPlaying';
import Playlists from './components/Playlists';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import MusicVisualizer from './components/MusicVisualizer';
import Recommendations from './components/Recommendations';
import Achievements from './components/Achievements';
import UserProfile from './components/UserProfile';
import data from './data';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [userActions, setUserActions] = useState({ songsPlayed: 0, playlistsCreated: 0, favoritesCount: 0 });
    const [currentTrack, setCurrentTrack] = useState(null); // Track currently playing

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => {
            const isFavorite = prevFavorites.some(track => track.id === id);
            const updatedFavorites = isFavorite
                ? prevFavorites.filter(track => track.id !== id)
                : [...prevFavorites, data.find(track => track.id === id)];

            setUserActions(prev => ({
                ...prev,
                favoritesCount: updatedFavorites.length
            }));

            return updatedFavorites;
        });
    };

    return (
        <Router>
            <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
                <Header toggleDarkMode={toggleDarkMode} />
                <nav className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <span> | </span>
                    <Link to="/playlists" className="nav-link">Playlists</Link>
                    <span> | </span>
                    <Link to="/favorites" className="nav-link">Favorites</Link>
                    <span> | </span>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </nav>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <SearchBar />
                                <TrackList tracks={data} favorites={favorites} onToggleFavorite={toggleFavorite} />
                                <NowPlaying currentTrack={currentTrack} />
                                <MusicVisualizer audio={document.querySelector('audio')} />
                            </>
                        } 
                    />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/favorites" element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />} />
                    <Route path="/profile" element={<UserProfile user={{ username: 'Guest', bio: '', avatar: '' }} />} />
                </Routes>
                <Recommendations favorites={favorites} />
                <Achievements userActions={userActions} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
