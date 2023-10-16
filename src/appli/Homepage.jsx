import React from 'react';
import Navbar from '../component/Navbar';
import Search from '../component/Search';
import NewJobs from '../component/NewJobs';
import Footer from '../component/Footer';
import JobsOffer from '../component/JobsOffer';
const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <NewJobs />
            <JobsOffer />
            <Footer />
        </div>
    );
};

export default Homepage;