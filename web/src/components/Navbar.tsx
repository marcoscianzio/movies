import { Heading, HStack, Text } from "@chakra-ui/react";

const links = [
  {
    name: "Home",
  },
  {
    name: "Actors",
  },
  {
    name: "Genres",
  },
];

const Navbar: React.FC<{}> = ({}) => {
  return (
    <HStack w="full" justify="space-between" py={12}>
      <HStack>
        <Heading color="white" fontSize="xl">
          MovieApp
        </Heading>
      </HStack>
      <HStack spacing={8}>
        {links.map((link, i) => (
          <Text cursor="pointer" color="white" key={i}>
            {link.name}
          </Text>
        ))}
      </HStack>
    </HStack>
  );
};

export default Navbar;
