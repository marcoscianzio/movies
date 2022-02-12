import {
  Circle,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Movie from "../components/Movie";
import Section from "../components/Section";
import { useMoviesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const { loading, data } = useMoviesQuery();

  return (
    <Layout>
      <Section name="peliculas">
        {loading ? (
          <Spinner color="white" />
        ) : (
          data?.movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        )}
      </Section>
    </Layout>
  );
};
export default withApollo({ ssr: true })(Index);
