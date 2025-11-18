import { useState, useEffect } from "react";

export default function Datos() {
  const [data, setData] = useState({
    pokemon: null,
    serie: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let pokemonData = null;
      let serieData = null;

      try {
        const pokeResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon/annihilape"
        );
        const pokeJson = await pokeResponse.json();
        pokemonData = {
          name: pokeJson.name,
          weight: pokeJson.weight,
          image: pokeJson.sprites.front_default,
          stats: pokeJson.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })),
        };
      } catch (error) {
        pokemonData = { name: "Error", weight: 0, image: "", stats: [] };
      }

      try {
        const tvResponse = await fetch(
          "https://api.tvmaze.com/search/shows?q=Game%20of%20Thrones"
        );
        const tvJson = await tvResponse.json();

        const GoTShow = tvJson.find(
          (item) => item.show.name === "Game of Thrones"
        );

        if (GoTShow) {
          const show = GoTShow.show;
          serieData = {
            title: show.name,
            premiered: show.premiered,
            genres: show.genres.join(", "),
            rating: show.rating?.average || "N/A",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
          };
        } else {
          serieData = {
            title: "Game of Thrones (Serie - No encontrado)",
            premiered: "N/A",
            genres: "N/A",
            rating: "N/A",
            poster: "",
          };
        }
      } catch (error) {
        serieData = {
          title: "Error de Carga",
          premiered: "N/A",
          genres: "N/A",
          rating: "N/A",
          poster: "",
        };
      }

      setData({ pokemon: pokemonData, serie: serieData });
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700 text-center">
        <h1 className="text-3xl font-bold text-white">
          Cargando Mis Gustos...
        </h1>
        <p className="text-slate-400 mt-2">Esto puede tomar unos segundos.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
      <h1 className="text-3xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4">
        Gustos Personales
      </h1>

      <section className="space-y-6">
        <div className="bg-slate-700 p-4 rounded-lg border border-red-500/50 flex items-start gap-6">
          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Pokémon (PokeAPI): Annihilape
            </h2>
            <p className="text-slate-300">
              Nombre:{" "}
              <span className="font-bold capitalize">{data.pokemon?.name}</span>
            </p>
            <p className="text-slate-300 mb-3">
              Peso Base:{" "}
              <span className="font-bold">{data.pokemon?.weight}</span>
            </p>
            <h3 className="text-lg font-semibold text-red-300 mt-2">
              Estadísticas Base:
            </h3>
            <ul className="list-disc list-inside text-slate-300 text-sm">
              {data.pokemon?.stats.map((stat) => (
                <li key={stat.name} className="capitalize">
                  {stat.name}: <span className="font-bold">{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
          {data.pokemon?.image && (
            <img
              src={data.pokemon.image}
              alt={data.pokemon.name}
              className="w-32 h-32 ml-auto"
            />
          )}
        </div>

        <div className="bg-slate-700 p-4 rounded-lg border border-blue-500/50 flex items-start gap-6">
          {data.serie?.poster && (
            <img
              src={data.serie.poster}
              alt={data.serie.title + " Poster"}
              className="w-32 h-auto rounded-lg shadow-md flex-shrink-0"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              Serie (Game of Thrones)
            </h2>
            <p className="text-slate-300">
              Título Encontrado:{" "}
              <span className="font-bold">{data.serie?.title}</span>
            </p>
            <p className="text-slate-300">
              Estreno (Año):{" "}
              <span className="font-bold">
                {data.serie?.premiered?.substring(0, 4) || "N/A"}
              </span>
            </p>
            <p className="text-slate-300">
              Géneros: <span className="font-bold">{data.serie?.genres}</span>
            </p>
            <p className="text-slate-300">
              Rating Promedio:{" "}
              <span className="font-bold">{data.serie?.rating}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
