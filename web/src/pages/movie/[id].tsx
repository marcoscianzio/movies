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
      <Stack spacing={4}>
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
        <Stack direction="row" spacing={12}>
          <Stack w="56">
            <Text color="white" fontSize="2xl">
              {secondsToHms(data?.movie?.duration)}
            </Text>
          </Stack>

          <Stack w="full">
            <Text as="b" color="white">
              SINOPSIS
            </Text>
            <Text w="auto" color="movie.secondary" fontSize="22px">
              {data?.movie?.description}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default withApollo()(MoviePage);
