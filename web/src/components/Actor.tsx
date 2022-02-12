import { Circle, HStack, Text } from "@chakra-ui/react";
import Item from "./Item";
import Section from "./Section";

type ActorProps = {
  actor: {
    id: number;
    imageURL: string;
    firstName: string;
    lastName: string;
    movieCount: number;
  };
};

const Actor: React.FC<ActorProps> = ({ actor }) => {
  return (
    <Item image={actor.imageURL} path={`/actor/${actor.id}`}>
      <HStack justify="space-between">
        <Text color="white">
          {actor.firstName} {actor.lastName}
        </Text>
        <Text color="movie.primary">
          {actor.movieCount} {actor.movieCount === 1 ? "pelicula" : "peliculas"}
        </Text>
      </HStack>
    </Item>
  );
};

export default Actor;
