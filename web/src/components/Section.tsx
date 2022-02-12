import { Heading, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";

type SectionProps = {
  name: string;
  children?: React.ReactNode;
  count?: number;
};

const Section: React.FC<SectionProps> = ({ name, count, children }) => {
  return (
    <Stack spacing={6} pb={24}>
      <HStack justify="space-between">
        <Heading textTransform="capitalize" color="white">
          {name}
        </Heading>
        {count ? (
          <Text color="white" textTransform="lowercase">
            {count} {count && name}
          </Text>
        ) : null}
      </HStack>

      <SimpleGrid
        columns={3}
        spacing={10}
        className="container"
        sx={{
          "&:focus-within .item, &:hover .item": {
            transform: "translateX(-15%)",
            opacity: "0.4",
          },
          "& .item:focus, & .item:hover": {
            cursor: "pointer",
            transform: "scale(1.45)",
            boxShadow: "dark-lg",
            opacity: "1",
            zIndex: 10000,
          },
        }}
      >
        {children}
      </SimpleGrid>
    </Stack>
  );
};

export default Section;
