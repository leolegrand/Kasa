import React from 'react';

import Product from '../pages/Product'
import Page404 from '../pages/Page404'
import Home from '../pages/Home'
import About from '../pages/About'
import { Routes, Route } from 'react-router-dom';

const routes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product=:id" element={<Product />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default routes;