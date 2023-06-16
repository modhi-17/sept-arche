import React from 'react';
import { Routes,Route } from "react-router-dom"
import{Layout,HomePage,CartPage,ProfilePage,ContactPage,AuthPage, CardPage,BookPage,CommandePage,DetailArticle,Cards,DetailPage} from '../public'
import Error from '../../_utils/Error';

// import HomePage from './HomePage';
// import CartPage from './CartPage';
// import ContactPage from './ContactPage';
// import ProfilePage from './ProfilePage';
// import Layout from './Layout';

const PublicRouter = () => {
    return (
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/commandes" element={<CommandePage />} />
          <Route path="/detailArticle/:id"element={<DetailPage />} />
          <Route exact path="/" component={Cards} />
          <Route path="/detailArticle/:id" element={<DetailArticle />} />

        
          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
    );
};

export default PublicRouter;