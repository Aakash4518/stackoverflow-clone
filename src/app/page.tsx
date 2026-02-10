import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import Footer from "./components/Footer";
import getOrCreateDB from "@/models/server/dbSetup";
import getOrCreateStorage from "@/models/server/storageSetup";

// Force dynamic rendering to prevent caching issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  await Promise.all([getOrCreateDB(), getOrCreateStorage()]);

  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Latest Questions</h2>
          <p className="text-lg text-gray-400">
            Check out the most recent questions from our community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LatestQuestions />
          </div>

          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Top Contributors</h3>
              <p className="text-sm text-gray-400">
                Our most active community members
              </p>
            </div>
            <TopContributers />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
