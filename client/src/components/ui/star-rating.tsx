"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1 > 0.1; // Use a threshold to avoid tiny slivers
  const emptyStars = 5 - fullStars - (partialStar ? 1 : 0);

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="size-4 fill-yellow-400 text-yellow-400"
        />
      ))}
      {partialStar && (
        <div className="relative size-4">
          <Star
            key="partial-empty"
            className="size-4 text-gray-300"
          />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${(rating % 1) * 100}%` }}
          >
            <Star
              key="partial-full"
              className="size-4 fill-yellow-400 text-yellow-400"
            />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="size-4 text-gray-300" />
      ))}
    </div>
  );
}
