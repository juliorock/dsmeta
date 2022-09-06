
import Header from "./compoments/Header"
import SalesCard from "./compoments/SalesCard"

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
          <SalesCard />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
