import React, { ReactElement, ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

interface MainProps {
    children: ReactNode;
}
export default function Main({ children }: MainProps): ReactElement {
    return (
        <div className="main-container">
            <Header />
            <Banner />
            <article className="mb-[64px] mx-auto">
                {children}
            </article>
            <Footer/>
        </div>

    );
}