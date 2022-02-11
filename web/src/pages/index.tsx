import {
  Circle,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useMoviesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const { loading, data } = useMoviesQuery();

  return (
    <Layout>
      <Stack spacing={6}>
        <Heading color="white">Movies</Heading>
        <SimpleGrid columns={3} spacing={10}>
          {loading
            ? "loading..."
            : data?.movies.map((movie) => (
                <Stack
                  bg="movie.background"
                  spacing={0}
                  role="group"
                  transition="transform 0.5s, opacity 0.5s"
                  rounded="md"
                  _hover={{
                    cursor: "pointer",
                    transform: "scale(1.45)",
                    boxShadow: "dark-lg",
                    position: "relative",
                    opacity: "1",
                    zIndex: 10000,
                  }}
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
                    <Circle
                      bg="movie.primary"
                      size="30px"
                      color="white"
                      fontSize="12"
                    >
                      {movie.rating}/5
                    </Circle>
                  </HStack>
                </Stack>
              ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};
export default withApollo()(Index);
