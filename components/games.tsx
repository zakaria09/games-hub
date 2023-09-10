"use client";
import { Games } from "@/types/games.type";
import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { Card } from "./card";
import Link from "next/link";

export const GamesList = (data: Games) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {data.results.map((game) => (
        <Link key={game.id} href={`/games/${game.id}`}>
          <Card id={game.id} name={game.name} image={game.background_image}>
            <Rating
              readonly
              initialValue={Math.round(game.rating * 100) / 100}
              allowFraction
              SVGstyle={{ display: "inline" }}
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};
