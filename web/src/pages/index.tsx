import {
  Circle,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Movie from "../components/Movie";
import { useMoviesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const { loading, data } = useMoviesQuery();

  return (
    <Layout>
      <Stack spacing={6}>
        <Heading color="white">Movies</Heading>
        <SimpleGrid
          columns={3}
          spacing={10}
          className="movies-container"
          sx={{
            "&:focus-within .movies-item, &:hover .movies-item": {
              transform: "translateX(-15%)",
              opacity: "0.4",
            },
            "& .movies-item:focus, & .movies-item:hover": {
              cursor: "pointer",
              transform: "scale(1.45)",
              boxShadow: "dark-lg",
              opacity: "1",
              zIndex: 10000,
            },
          }}
        >
          {loading
            ? "loading..."
            : data?.movies.map((movie) => <Movie movie={movie} />)}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};
export default withApollo()(Index);
