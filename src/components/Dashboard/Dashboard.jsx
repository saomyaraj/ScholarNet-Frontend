/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navigation Bar/NavigationBar';
import BookmarkSection from './Bookmarks';
import Notes from './Notes';
import RecentActivity from './RecentActivity';
import Footer from './Footer';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <BookmarkSection />
            <Notes />
            <RecentActivity />
            <Footer />
        </div>
    );
}

export default Dashboard;