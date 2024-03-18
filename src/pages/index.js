import { Box, Heading, Text, Image, Flex, Button, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Square Giraffe
          </Heading>
        </Flex>

        <Box display={{ base: "none", md: "flex" }}>
          <Button variant="link" mr={4}>
            Home
          </Button>
          <Button variant="link" mr={4}>
            About
          </Button>
          <Button variant="link" mr={4}>
            Services
          </Button>
          <Button variant="link">Contact</Button>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Box textAlign="center" py={20}>
        <Heading as="h2" size="2xl" mb={6}>
          Welcome to Square Giraffe
        </Heading>
        <Text fontSize="xl" mb={8}>
          We are a creative agency that specializes in unique and innovative designs.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Box>

      {/* About Section */}
      <Box py={20}>
        <Flex flexWrap="wrap">
          <Box flex={1} pr={10}>
            <Heading as="h3" size="xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg" mb={6}>
              Square Giraffe is a leading creative agency known for our out-of-the-box thinking and exceptional designs. We strive to deliver innovative solutions that exceed our clients' expectations.
            </Text>
            <Button colorScheme="blue">Learn More</Button>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1666102937747-e0cced84a519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnaXJhZmZlJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxMDc2MzEyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Giraffe Illustration" />
          </Box>
        </Flex>
      </Box>

      {/* Services Section */}
      <Box bg="gray.100" py={20}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">
          Our Services
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box width={["100%", "50%", "25%"]} p={4} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpY29ufGVufDB8fHx8MTcxMDc2MzEyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Design" mb={4} />
            <Heading as="h4" size="lg" mb={2}>
              Web Design
            </Heading>
            <Text>We create stunning and functional websites.</Text>
          </Box>
          <Box width={["100%", "50%", "25%"]} p={4} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwaWNvbnxlbnwwfHx8fDE3MTA3NjMxMjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Graphic Design" mb={4} />
            <Heading as="h4" size="lg" mb={2}>
              Graphic Design
            </Heading>
            <Text>Our team crafts visually appealing designs.</Text>
          </Box>
          <Box width={["100%", "50%", "25%"]} p={4} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGljb258ZW58MHx8fHwxNzEwNzYzMTMwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Branding" mb={4} />
            <Heading as="h4" size="lg" mb={2}>
              Branding
            </Heading>
            <Text>We help build strong and recognizable brands.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">
          Get in Touch
        </Heading>
        <Flex justifyContent="center">
          <Box width={["100%", "50%"]}>
            <Text fontSize="lg" mb={6}>
              Ready to start your next project? Contact us today and let's discuss how we can bring your ideas to life!
            </Text>
            <Button colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10}>
        <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
          <Box mb={[4, 0]}>
            <Heading as="h4" size="md" mb={2}>
              Square Giraffe
            </Heading>
            <Text>123 Main Street, City, Country</Text>
            <Text>info@squaregiraffe.com</Text>
          </Box>
          <Box>
            <Flex>
              <Link href="#" mr={4}>
                <FaTwitter />
              </Link>
              <Link href="#" mr={4}>
                <FaFacebook />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
