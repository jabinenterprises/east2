import type { ReactElement } from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import JoyOfGivingSection from '@/components/home/JoyOfGivingSection';
import JoinUsSection from '@/components/home/JoinUsSection';
import QuoteSection from '@/components/home/QuoteSection';
import MarqueeSection from '@/components/home/MarqueeSection';
import TrusteesSection from '@/components/home/TrusteesSection';
import EventsSection from '@/components/home/EventsSection';
import VolunteerSection from '@/components/home/VolunteerSection';
import BeneficiariesSection from '@/components/home/BeneficiariesSection';
import ContactSection from '@/components/home/ContactSection';
import MainLayout from '@/layouts/MainLayout';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <JoyOfGivingSection />
            <JoinUsSection />
            <QuoteSection />
            <MarqueeSection />
            <TrusteesSection />
            <EventsSection />
            <VolunteerSection />
            <BeneficiariesSection />
            <ContactSection />
        </div>
    );
};

HomePage.layout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default HomePage;
