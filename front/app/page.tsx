import Title from "./components/top/Title"
import Footer from "./components/top/Footer";
import Header from "./components/top/Header";

export default function Home() {
  return (
    <div>
      <main className="flex bg-gradient-to-r from-lime-200 to-lime-50 relative">

        <section className="flex-grow min-h-screen">
          <Header />
          <Title />
          <Footer />
        </section>
      </main>
    </div>
  );
}
