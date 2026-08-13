import catalogo from "../../files/imgs-projects/b&b.png";
import pokemonSearch from "../../files/imgs-projects/pokemon-search.png";
import birthdayOrg from "../../files/imgs-projects/birthday-oganization.png";
import worldCountries from "../../files/imgs-projects/world-countries.png";
import gateboard from "../../files/imgs-projects/gateboard.png";
import portfolio from "../../files/imgs-projects/portfolio.png";
import football from "../../files/imgs-projects/football.png";
import gamevault from "../../files/imgs-projects/gamevault.png";
import crochete from "../../files/imgs-projects/crochete.png";
import trocso from "../../files/imgs-projects/trocso.png";
import blogTulioDev from "../../files/imgs-projects/blog_tuliodev.png";
export const allProjects = [
  {
    img: blogTulioDev,
    name: "Blog | Túlio Dev",
    description:
      "Blog de tecnologia desenvolvido para compartilhar conhecimentos sobre desenvolvimento de software e outros assuntos da área.",
    href: "https://blog.tuliodiegodev.com.br",
    repo: null,
    techs: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    img: crochete,
    name: "Crochettê",
    description: "Plataforma de organização de projetos e peças de crochê",
    href: "https://crochette-gamma.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/crochete",
    techs: ["React", "TypeScript", "NestJS", "PrismaORM"],
  },
  {
    img: trocso,
    name: "Trocso",
    description: "Plataforma de trocas e ofertas de produtos obsoletos",
    href: "https://trocso.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/desafio-moviplu",
    techs: ["HTML", "CSS", "JS", "NestJS", "PrismaORM"],
  },
  {
    img: gamevault,
    name: "GameVault",
    description: "Plataforma de biblioteca de jogos pessoal",
    href: "https://game-vault-web-app.vercel.app/",
    repo: null,
    techs: ["React", "TypeScript", "TailwindCSS", "NodeJS"],
  },
  {
    img: pokemonSearch,
    name: "Pokemon Search",
    description: "App que consome a PokéAPI para busca e exibição de Pokémon.",
    techs: ["HTML", "SASS", "JavaScript"],
    href: "https://pokemon-search-sable.vercel.app/",
    repo: "https://github.com/tulio-ferreira21/pokemon-search",
  },
  // {
  //   img: birthdayOrg,
  //   name: "Birthday Organization",
  //   description:
  //     "SPA para organização e controle financeiro de eventos com dashboard de gráficos.",
  //   techs: ["React", "JavaScript", "CSS"],
  //   href: "https://birthday-organization-ivory.vercel.app",
  //   repo: "https://github.com/tulio-ferreira21/birthday-organization",
  // },
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
  // {
  //   img: portfolio,
  //   name: "Portfólio Pessoal",
  //   description:
  //     "Portfólio em React com layout responsivo e estrutura modular.",
  //   techs: ["React", "JavaScript", "CSS"],
  //   href: "https://portfolio-tulio-sand.vercel.app/",
  //   repo: "https://github.com/tulio-ferreira21/personal-portfolio",
  // },
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
    img: catalogo,
    name: "Catálogo B&B",
    description:
      "Catálogo web para exposição de produtos com integração ao Supabase.",
    techs: ["HTML", "CSS", "JavaScript", "Supabase"],
    href: "https://catalogo-b-b.vercel.app/",
    repo: null,
  },
];
