import { Heading, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Actores",
    path: "/actores",
  },
  {
    name: "Generos",
    path: "/generos",
  },
];

const Navbar: React.FC<{}> = ({}) => {
  const router = useRouter();

  return (
    <HStack w="full" justify="space-between" py={12}>
      <HStack>
        <NextLink href="/">
          <Heading cursor="pointer" color="white" fontSize="xl">
            MovieApp
          </Heading>
        </NextLink>
      </HStack>
      <HStack spacing={8}>
        {links.map((link, i) => (
          <NextLink key={i} href={link.path}>
            <Text
              fontWeight={router.asPath === link.path ? "bold" : "normal"}
              cursor="pointer"
              color="white"
            >
              {link.name}
            </Text>
          </NextLink>
        ))}
      </HStack>
    </HStack>
  );
};

export default Navbar;
