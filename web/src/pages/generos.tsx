import { Spinner } from "@chakra-ui/react";
import Item from "../components/Item";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { useGenresQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

interface GenerosProps {}

const Generos: React.FC<GenerosProps> = ({}) => {
  const { loading, data } = useGenresQuery();

  return (
    <Layout>
      <Section name="generos">
        {loading ? (
          <Spinner color="white" />
        ) : (
          data?.genres?.map(({ name }) => (
            <Item path={`/genero/${name}`} genre={name} />
          ))
        )}
      </Section>
    </Layout>
  );
};

export default withApollo()(Generos);
