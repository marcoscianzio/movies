import { Circle, HStack, Stack, Text } from "@chakra-ui/react";
import Item from "./Item";

type MovieProps = {
  movie: {
    id: number;
    imageURL: string;
    title: string;
    rating: number;
  };
  role?: string;
};

const Movie: React.FC<MovieProps> = ({ movie, role }) => {
  return (
    <Item path={`/pelicula/${movie.id}`} image={movie.imageURL}>
      <HStack justify="space-between">
        <Text color="white">{movie.title}</Text>
        <Circle bg="movie.primary" size="30px" color="white" fontSize="12">
          {movie.rating}/5
        </Circle>
      </HStack>
      {role ? (
        <Text color="movie.primary" as="b">
          Actuo como {role}
        </Text>
      ) : null}
    </Item>
  );
};

export default Movie;
