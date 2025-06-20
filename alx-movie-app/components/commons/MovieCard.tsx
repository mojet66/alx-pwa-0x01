import { MovieProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({
  title,
  posterImage,
  releaseYear,
}) => {
  return (
    <div className="h-[563px]">
      <div>
        <Image
          className="rounded-md w-full h-[430px] hover:cursor-pointer"
          src={posterImage}
          width={100}
          height={100}
          alt={title}
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-[#E2D609] text-xl">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
