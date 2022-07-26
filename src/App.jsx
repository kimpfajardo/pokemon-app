import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PokemonDetails from "./components/pokemonDetails/PokemonDetails";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON_BY_ID } from "../graphql/actions";
import AOS from "aos";
import { Puff } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [getPrimary] = useLazyQuery(GET_POKEMON_BY_ID, {
    variables: {
      nm: "Articuno",
    },
  });
  const [getSecondary] = useLazyQuery(GET_POKEMON_BY_ID, {
    variables: {
      nm: "Charizard",
    },
  });

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const x = await getPrimary();
    const y = await getSecondary();

    setPokemons([x.data.pokemon, y.data.pokemon]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div
        className={`h-screen w-full flex justify-center items-center fixed top-0 right-0 bg-white transition duration-300 ${
          loading ? "opacity-100 z-50" : "opacity-0 z-0"
        }`}
      >
        <Puff
          height="80"
          width="80"
          radius="9"
          color="gray"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
      <Header title="My Favorite Pokemons" />
      <div
        className="p-5 sm:p-10 flex flex-col-reverse items-center gap-5 md:flex-row md:justify-center xl:gap-10 lg:gap-5 md:gap-3"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        {pokemons.map((item) => (
          <Card color={item.name.toLowerCase() === "articuno" ? "blue" : "red"}>
            <PokemonDetails details={item} />
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
