import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";

function App() {
  const data = [
    {
      id: 1,
      icon: "💼",
      title: "Business",
      description: "for Business"
    },
    {
      id: 2,
      icon: "🎨",
      title: "Design",
      description: "for Design"
    },
    {
      id: 3,
      icon: "💻",
      title: "Deverlopment",
      description: "for Deverlopment"
    },
    {
      id: 4,
      icon: "📱",
      title: "Mobile",
      description: "for Mobile"
    },
    {
      id: 5,
      icon: "🛒",
      title: "Marketing",
      description: "for Marketing"
    },
    {
      id: 6,
      icon: "📊",
      title: "Analytics",
      description: "for Analytics"
    },
  ]
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mt-auto">
          <section className="min-h-full flex flex-col justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white py-35">
            <div className="container mx-auto px-4 text-center py-20">
              <h2 className="text-5xl font-bold mb-4">
                Welcome to Our Website
              </h2>
              <p className="text-xl mb-8">
                We provide the best solution for your business
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                  Welcome to Our Website
                  <p className="text-gray-600 text-lg">
                    Everything you need to success
                  </p>
                </h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {data.map((d) => (
                  <Card
                  key={d.id}
                  icon={d.icon}
                  title={d.title}
                  description={d.description}
                  />
                ))}

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
