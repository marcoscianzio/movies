import { Spinner } from "@chakra-ui/react";
import Actor from "../components/Actor";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { useActorsQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Actors: React.FC<{}> = ({}) => {
  const { data, loading } = useActorsQuery();

  return (
    <Layout>
      <Section name="actores">
        {loading ? (
          <Spinner color="white" />
        ) : (
          data?.actors?.map((actor) => <Actor actor={actor} />)
        )}
      </Section>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Actors);
