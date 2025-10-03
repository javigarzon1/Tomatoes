const mockTvShows = [
  {
    id: 1,
    título: "The Last Kingdom",
    descripción: "Es el año 872 y muchos de los reinos separados de lo que ahora se conoce como Inglaterra han caído en manos de los invasores daneses, dejando al gran reino de Wessex solo y bajo el mando del rey Alfredo el Grande.",
    imagen: "https://m.media-amazon.com/images/I/71b5mDrvCyL._UF894,1000_QL80_.jpg",
    año: 2023,
    nota: 8.5,
    género: "Drama"
  },
  {
    id: 2,
    título: "Stranger Things",
    descripción: "Ambientada durante la década de 1980, la historia se sitúa en el pequeño pueblo ficticio de Hawkins, Indiana, Estados Unidos, donde sus residentes comienzan a lidiar con una dimensión alternativa hostil conocida como Upside Down, después de que una instalación de experimentación humana cercana abre una puerta entre ella y el mundo normal",
    imagen: "https://www.nacionflix.com/__export/1679947679522/sites/debate/img/2023/03/27/stranger-things-5-netflix.jpg_593059942.jpg",
    año: 2023,
    nota: 9.1,
    género: "Ciencia Ficción"
  },
  {
    id: 3,
    título: "The Crown",
    descripción: "The Crown es una serie de televisión estadounidense/británica para emisión en streaming de drama histórico acerca del reinado de la reina Isabel II.",
    imagen: "https://www.nouveautes-tele.com/wp-content/uploads/2022/09/thecrown.jpg",
    año: 2022,
    nota: 8.7,
    género: "Historica"
  },
  {
    id: 4,
    título: "Wednesday",
    descripción: "Wednesday Addams es expulsada de su escuela. Sus padres la transfieren a su antigua escuela, la Academia Nunca Más, ubicada en la ciudad de Jericho, Vermont.",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/miercoles-netflix-3-1669199747.jpg",
    año: 2024,
    nota: 8.2,
    género: "Comedia"
  },
  {
    id: 5,
    título: "Breaking Bad",
    descripción: "Un profesor de química de un instituto diagnosticado con cáncer terminal recurre a la elaboración y venta de metanfetamina para sacar adelante a su familia.",
    image: "https://m.media-amazon.com/images/I/71HvGDa1ZLL._UF1000,1000_QL80_.jpg",
    año: 2021,
    nota: 9.5,
    género: "Drama"
  },
  {
    id: 6,
    título: "The Mandalorian",
    descripción: "Narra las aventuras de Din Djarin, un cazarrecompensas mandaloriano solitario en los confines de la galaxia, después de la caída del Imperio Galáctico. Su vida cambia al encontrar a Grogu, un niño sensible a la Fuerza de la misma especie que Yoda, al que decide proteger en lugar de entregar a las fuerzas imperiales",
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/934.jpg",
    año: 2024,
    nota: 8.8,
    género: "Ciencia Ficción"
  }
];

const mockMovies = [
  {
    id: 1,
    título: "Dune: Part Two",
    descripción: "Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia. Enfrentándose a una elección entre el amor de su vida y el destino del universo, debe evitar un futuro terrible.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    año: 2024,
    nota: 8.9,
    género: "Ciencia Ficción"
  },
  {
    id: 2,
    título: "Oppenheimer",
    descripción: "Aborda la vida del científico J. Robert Oppenheimer y el complejo proceso de creación de la bomba atómica, así como el dilema moral y las consecuencias de sus actos.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    año: 2023,
    nota: 8.8,
    género: "Biográfica"
  },
  {
    id: 3,
    título: "Spider-Man: Across the Spider-Verse",
    descripción: "Tras encontrarse con Gwen Stacy, el agradable vecindario de Brooklyn en el que vive Mike Morales se ve transportado al multiverso, donde Spiderman conocerá a nuevos personajes y vivirá aventuras increíbles.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    año: 2023,
    nota: 9.0,
    género: "Animación"
  },
  {
    id: 4,
    título: "The Batman",
    descripción: "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    año: 2022,
    nota: 8.1,
    género: "Acción"
  },
  {
    id: 5,
    título: "Inception",
    descripción: "Dom Cobb es un ladrón capaz de adentrarse en los sueños de la gente y hacerse con sus secretos. Ahora tiene que realizar una incepción para implantar una idea en el subconsciente de una persona.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    año: 2021,
    nota: 8.8,
    género: "Ciencia Ficción"
  },
  {
    id: 6,
    título: "Interstellar",
    descripción: "Ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir, ya que la Tierra se está volviendo inhabitable por el polvo que está arrasando con todo, cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad.",
    imagen: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    año: 2022,
    nota: 8.6,
    género: "Aventura"
  }
];

export const getTvShows = () => {
  return mockTvShows;
};

export const getMovies = () => {
  return mockMovies;
};