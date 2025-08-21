export type GameOutput = {
  id: number;
  name: string;
  slug: string;
  description: string;
  released: string;
  background_image: string;
  metacritic: number;
  platforms: {
    id: number;
    name: string;
    slug: string;
    requirements?: string;
  }[];
  genres: { id: number; name: string; slug: string }[];
};

export class GameOutputMapper {
  static toOutput(data: any): GameOutput {
    return {
      id: data.id,
      slug: data.slug,
      name: data.name,
      description: data.description,
      released: data.released,
      metacritic: data.metacritic,
      background_image: data.background_image,
      platforms:
        data.platforms?.map((p: any) => ({
          id: p.platform.id,
          name: p.platform.name,
          requirements: p.requirements?.minimum,
        })) ?? [],
      genres:
        data.genres?.map((g: any) => ({
          id: g.id,
          name: g.name,
          slug: g.slug,
        })) ?? [],
    };
  }
}
