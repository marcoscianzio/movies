import { Circle, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

interface MovieProps {
  movie: any;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const router = useRouter();

  return (
    <Stack
      className="movies-item"
      bg="movie.background"
      spacing={0}
      role="group"
      position="relative"
      transition="transform 0.5s, opacity 0.5s"
      rounded="md"
      sx={{
        "&:focus ~ .item, &:hover ~ .movies-item": {
          transform: "translateX(15%)",
          opacity: "0.4",
        },
      }}
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <Stack
        key={movie.id}
        rounded="md"
        w="full"
        h="56"
        backgroundImage={movie.imageURL}
        backgroundSize="cover"
      />
      <HStack
        justify="space-between"
        transition="all 0.4s"
        py={4}
        _groupHover={{ px: 4 }}
      >
        <Text color="white">{movie.title}</Text>
        <Circle bg="movie.primary" size="30px" color="white" fontSize="12">
          {movie.rating}/5
        </Circle>
      </HStack>
    </Stack>
  );
};

export default Movie;
