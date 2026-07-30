import catalogo from "../../../../public/imgs-projects/b&b.png";
import pokemonSearch from "../../../../public/imgs-projects/pokemon-search.png";
import birthdayOrg from "../../../../public/imgs-projects/birthday-oganization.png";
import worldCountries from "../../../../public/imgs-projects/world-countries.png";
import gateboard from "../../../../public/imgs-projects/gateboard.png";
import portfolio from "../../../../public/imgs-projects/portfolio.png";
import football from "../../../../public/imgs-projects/football.png";
import gamevault from "../../../../public/imgs-projects/gamevault.png";
export const allProjects = [
  {
    img: catalogo,
    name: "Catálogo B&B",
    description:
      "Catálogo web para exposição de produtos com integração ao Supabase.",
    techs: ["HTML", "CSS", "JavaScript", "Supabase"],
    href: "https://catalogo-b-b.vercel.app/",
    repo: null,
  },
  {
    img: pokemonSearch,
    name: "Pokemon Search",
    description: "App que consome a PokéAPI para busca e exibição de Pokémon.",
    techs: ["HTML", "SASS", "JavaScript"],
    href: "https://pokemon-search-sable.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/pokemon-search",
  },
  {
    img: birthdayOrg,
    name: "Birthday Organization",
    description:
      "SPA para organização e controle financeiro de eventos com dashboard de gráficos.",
    techs: ["React", "JavaScript", "CSS"],
    href: "https://birthday-organization-ivory.vercel.app",
    repo: "https://github.com/tulio-ferreira21/birthday-organization",
  },
  {
    img: worldCountries,
    name: "World Countries",
    description:
      "App em React que consome API para listar países com mapa interativo.",
    techs: ["React", "JavaScript", "CSS", "BootStrap"],
    href: "https://world-countries-explorer-iota.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/world-countries-explorer",
  },
  {
    img: gateboard,
    name: "GateBoard",
    description:
      "Plataforma Kanban com autenticação frontend e persistência via localStorage.",
    techs: ["React", "TypeScript", "CSS"],
    href: "https://gateboard.vercel.app",
    repo: "https://github.com/tulio-ferreira21/GateBoard",
  },
  {
    img: portfolio,
    name: "Portfólio Pessoal",
    description:
      "Portfólio em React com layout responsivo e estrutura modular.",
    techs: ["React", "JavaScript", "CSS"],
    href: "https://portfolio-tulio-sand.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/personal-portfolio",
  },
  {
    img: football,
    name: "Foot & Ball",
    description:
      "Jogo de simulador de manager criado para o Hackathon da ZK Gaming",
    href: "https://football-ecru.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/football",
    techs: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    img: gamevault,
    name: "GameVault",
    description: "Plataforma de biblioteca de jogos pessoal",
    href: "https://game-vault-web-app.vercel.app/",
    repo: null,
    techs: ["React", "TypeScript", "TailwindCSS", "NodeJS"],
  },
];
