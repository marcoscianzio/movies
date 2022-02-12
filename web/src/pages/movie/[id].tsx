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
import Layout from "../../components/Layout";
import { useMovieQuery } from "../../generated/graphql";
import { secondsToHms } from "../../utils/secondsToHms";
import { useGetIntId } from "../../utils/useGetIntId";
import { withApollo } from "../../utils/withApollo";

const MoviePage: React.FC<{}> = ({}) => {
  const movieId = useGetIntId();

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
      <Stack spacing={12}>
        <Stack
          w="full"
          h="80"
          borderBottomLeftRadius="50%"
          bgImage={data?.movie?.imageURL}
          bgSize="cover"
        />
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
              {data?.movie?.genres.map((genre) => (
                <Tag key={genre.name} variant="outline">
                  {genre.name}
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
              <Text as="b" color="white">
                CAST
              </Text>
              <Stack spacing={8}>
                {data?.movie?.movieToActor.map(({ actor, role }) => (
                  <Stack direction="row" spacing={8}>
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
      </Stack>
    </Layout>
  );
};

export default withApollo()(MoviePage);
