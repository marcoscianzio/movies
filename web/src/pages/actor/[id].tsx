import { HStack, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";
import Section from "../../components/Section";
import { useActorQuery } from "../../generated/graphql";
import { useGetIntId } from "../../utils/useGetIntId";
import { withApollo } from "../../utils/withApollo";

interface ActorProps {}

const Actor: React.FC<ActorProps> = ({}) => {
  const actorId = useGetIntId();

  const { data, loading } = useActorQuery({
    variables: {
      actorId,
    },
    skip: actorId === -1,
  });

  if (loading) {
    return (
      <Layout>
        <Spinner color="white"></Spinner>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header image={data?.actor?.imageURL}>
        <Stack align="center">
          <Stack>
            <Image
              rounded="md"
              src={data?.actor?.imageURL}
              boxSize="320px"
              objectFit="cover"
            />
          </Stack>
          <Text color="white" as="b" fontSize="6xl">
            {data?.actor?.firstName} {data?.actor?.lastName}
          </Text>
        </Stack>
        <Section name="peliculas" count={data?.actor?.movieCount}>
          {data?.actor?.movieToActor?.map(({ movie, role }) => (
            <Movie movie={movie} key={movie.id} role={role} />
          ))}
        </Section>
      </Header>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Actor);
