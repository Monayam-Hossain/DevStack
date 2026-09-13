import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/technologies/Technologies";
import { Suspense } from "react";
import type { Itechnology } from "./types/technologyType";
import Footer from "./components/Footer";
import Loader from "./components/loader/Loader";

const technologyFetch = async ():Promise<Itechnology[]> => {
  const res = await fetch ("./data.json");
  const data = await res.json();
  return data;
}

function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Suspense fallback = {<Loader></Loader>}>
      <Technologies technologyPromise = {technologyPromise}></Technologies>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
