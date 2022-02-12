import { Circle, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { ReactNode } from "react";

interface ItemProps {
  path?: string;
  image?: string;
  genre?: string;
  children?: ReactNode;
}

const Item: React.FC<ItemProps> = ({ path, image, children, genre }) => {
  const router = useRouter();

  return (
    <Stack
      className="item"
      bg="movie.background"
      boxShadow={genre ? "md" : null}
      spacing={0}
      role="group"
      position="relative"
      transition="transform 0.5s, opacity 0.5s, box-shadow 0.5s"
      rounded="md"
      sx={{
        "&:focus ~ .item, &:hover ~ .item": {
          transform: "translateX(15%)",
          opacity: "0.4",
        },
      }}
      onClick={() => router.push(path)}
    >
      {genre ? (
        <HStack justify="center" h="56" rounded="md">
          <Text as="b" color="white">
            {genre}
          </Text>
        </HStack>
      ) : (
        <>
          <Stack
            rounded="md"
            w="full"
            align={genre ? "center" : null}
            justify={genre ? "center" : null}
            h="56"
            backgroundImage={genre ? null : image}
            backgroundSize="cover"
          />

          <Stack transition="all 0.4s" py={4} _groupHover={{ px: 4 }}>
            {children}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Item;
