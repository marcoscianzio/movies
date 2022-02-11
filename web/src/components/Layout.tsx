import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
