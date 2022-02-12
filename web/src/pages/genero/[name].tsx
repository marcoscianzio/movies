import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";
import Section from "../../components/Section";
import { useGenreQuery } from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";

interface GeneroProps {}

const Genero: React.FC<GeneroProps> = ({}) => {
  const router = useRouter();

  const { name } = router.query;

  const { loading, data } = useGenreQuery({
    variables: { name: name } as any,
    skip: typeof name != "string",
  });

  if (loading) {
    return (
      <Layout>
        <Spinner color="white" />;
      </Layout>
    );
  }

  return (
    <Layout>
      <Header genre={name}></Header>
      <Section name="peliculas" count={data?.genre?.movies?.length}>
        {data?.genre?.movies?.map((movie) => (
          <Movie movie={movie} />
        ))}
      </Section>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Genero);
