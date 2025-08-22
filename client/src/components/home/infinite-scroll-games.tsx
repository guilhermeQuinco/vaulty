'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "../ui/card";
import { StarRating } from "../ui/star-rating";

interface Game {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
}

export default function InfiniteScrollGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreGames = useCallback(() => {
    const newGames: Game[] = Array.from({ length: 20 }, (_, i) => {
      const id = (page - 1) * 20 + i + 1;
      return {
        id: id,
        name: `Game Title ${id}`,
        imageUrl: `https://picsum.photos/seed/${id}/400/300`,
        rating: Math.random() * 5,
      };
    });

    if (page > 10) { // A hard limit for mock data
      setHasMore(false);
      return;
    }

    setGames((prevGames) => [...prevGames, ...newGames]);
  }, [page]);

  useEffect(() => {
    loadMoreGames();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const lastGameElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {games.map((game, index) => (
          <div
            key={game.id}
            ref={games.length === index + 1 ? lastGameElementRef : null}
          >
            <Card className="py-0 gap-0 overflow-hidden h-full flex flex-col">
              <img
                src={game.imageUrl}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg truncate">{game.name}</h3>
                <div className="flex-grow" />
                <StarRating rating={game.rating} className="mt-2" />
              </div>
            </Card>
          </div>
        ))}
      </div>
      {hasMore && <div className="text-center p-4">Loading more...</div>}
    </div>
  );
}
