import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="">
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
