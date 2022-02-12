import {
  Box,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { useMovieQuery } from "../../generated/graphql";
import { secondsToHms } from "../../utils/secondsToHms";
import { useGetIntId } from "../../utils/useGetIntId";
import { withApollo } from "../../utils/withApollo";

const MoviePage: React.FC<{}> = ({}) => {
  const movieId = useGetIntId();

  const router = useRouter();

  const { loading, data } = useMovieQuery({
    variables: { movieId },
    skip: movieId == -1,
  });

  if (loading) {
    return (
      <Layout>
        <Spinner color="white" />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header image={data?.movie?.imageURL}>
        <Stack direction="row" spacing={12}>
          <Image
            rounded="md"
            objectFit="cover"
            w="44"
            h="56"
            src={data?.movie?.imageURL}
          />

          <Stack spacing={4}>
            <Heading color="white" fontSize="6xl">
              {data?.movie?.title}
            </Heading>
            <HStack>
              {data?.movie?.genres.map(({ name }) => (
                <Tag
                  transition="opacity .2s"
                  _hover={{
                    cursor: "pointer",
                    opacity: "0.8",
                  }}
                  onClick={() => router.push(`/genero/${name}`)}
                  key={name}
                  variant="outline"
                >
                  {name}
                </Tag>
              ))}
            </HStack>
          </Stack>
        </Stack>
        <Stack w="full" direction="row" spacing={12}>
          <Stack>
            <Text w="44" color="white" fontSize="4xl">
              {secondsToHms(data?.movie?.duration)}
            </Text>
          </Stack>

          <Stack spacing={24}>
            <Stack spacing={4}>
              <Text as="b" color="white">
                SINOPSIS
              </Text>
              <Text w="auto" color="movie.secondary" fontSize="2xl">
                {data?.movie?.description}
              </Text>
            </Stack>
            <Stack spacing={4} pb={8}>
              <HStack justify="space-between">
                <Text as="b" color="white">
                  CAST
                </Text>
                <Text color="white">
                  {data?.movie?.actorCount} actore
                  {data?.movie?.actorCount == 1 ? null : "s"}
                </Text>
              </HStack>

              <Stack spacing={8}>
                {data?.movie?.movieToActor.map(({ actor, role }) => (
                  <Stack
                    direction="row"
                    transition="all 0.5s"
                    spacing={8}
                    rounded="md"
                    _hover={{
                      transform: "scale(1.2)",
                      zIndex: 1000,
                      cursor: "pointer",
                      boxShadow: "dark-lg",
                      p: 4,
                    }}
                    onClick={() => router.push(`/actor/${actor.id}`)}
                  >
                    <Image
                      key={actor.id}
                      src={actor.imageURL}
                      borderRadius="full"
                      boxSize="80px"
                      objectFit="cover"
                    />
                    <Stack justify="center">
                      <Text color="movie.primary" fontSize="xl">
                        {actor.firstName} {actor.lastName}
                      </Text>
                      <Text color="white" as="b">
                        {role}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Header>
    </Layout>
  );
};

export default withApollo({ ssr: true })(MoviePage);
