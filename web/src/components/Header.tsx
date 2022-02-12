import { Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderProps {
  image?: string;
  genre?: string | string[];
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, image, genre }) => {
  return (
    <Stack spacing={12}>
      {genre ? (
        <Stack w="full" align="center" justify="center" h="80">
          <Text as="b" color="white" fontSize="6xl" textTransform="capitalize">
            {genre}
          </Text>
        </Stack>
      ) : (
        <Stack
          w="full"
          h="80"
          borderBottomLeftRadius="50%"
          bgImage={image}
          bgSize="cover"
        />
      )}

      {children}
    </Stack>
  );
};

export default Header;
