import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import FAQ from './components/FAQ';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <FAQ />
        </>
    );
}

export default App;
