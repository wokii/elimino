import { Inter } from 'next/font/google'
import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Discover Your Food Sensitivities with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Elimino uses AI to help you identify food triggers and optimize your diet, without the guesswork.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">The Silent Epidemic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-4">1B+</div>
              <p className="text-gray-800">People suffer from chronic GI or immunological symptoms</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-4">70%</div>
              <p className="text-gray-800">Are undiagnosed or self-managing through trial and error</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-4">∞</div>
              <p className="text-gray-800">Time wasted on ineffective elimination diets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Elimino Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">1. Meal Capture</h3>
              <p className="text-gray-800">Take photos of your meals. Our AI identifies ingredients and common irritants automatically.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">2. Symptom Logging</h3>
              <p className="text-gray-800">Log your symptoms naturally. Our NLP understands your descriptions and tracks patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">3. AI Pattern Detection</h3>
              <p className="text-gray-800">Our AI cross-references your meals and symptoms to identify potential triggers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">4. Guided Protocol</h3>
              <p className="text-gray-800">Follow personalized elimination protocols with weekly check-ins and progress tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Who is Elimino For?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Chronic Symptom Sufferers</h3>
              <p className="text-gray-800">Suffering from bloating, fatigue, acne, or brain fog? Get answers.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Women 20-50</h3>
              <p className="text-gray-800">Especially post-COVID, postpartum, or menopausal women seeking relief.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Biohackers</h3>
              <p className="text-gray-800">Optimize your diet and performance with data-driven insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Be the First to Know</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our waitlist to get early access to Elimino and transform your relationship with food.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Elimino. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
