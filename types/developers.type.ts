export interface GameDevelopers {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}

interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}