
import TopBody from '@/components/topbody';
import MidBody from '@/components/midbody';
import PricingSection from '@/components/pricingsection';
import BottomBody from '@/components/bottombody';

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1540px] mx-auto">
      <TopBody />
      <MidBody />
       <PricingSection/>
       <BottomBody />
    </main>
  );
}
