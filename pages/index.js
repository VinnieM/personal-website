import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioDescription } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a CS Engineer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vineeth Menon
          </Heading>
          <p>
            Backend engineer. Java; & _Python enthusiast. I love to
            solve problems with and without code.
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Avatar.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Hey there! I&apos;m a software engineer who enjoys taking complex
          problems and turning them into simple and elegant solutions. I love
          the thrill of finding the logic and creating elegant structures.
          <br></br>
          <br></br>
          When I&apos;m not coding, you&apos;ll find me watching movies, trying
          my hand in photography or riding my motorcycle. 🏍️💨
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1987</BioYear>
          <BioDescription>Born in Kerala, India 👶🏽</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          <BioDescription>Masters in Computer Science 🎓</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          <BioDescription>Software Enginner at Wipro</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <BioDescription>Software Enginner at Broadsign</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <BioDescription>Software Enginner at Autonomic. In 2023, Autonomic became fully integrated with Ford Motor Company.</BioDescription>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: 'teal' }}>music</text>, movies,{' '}
          <text style={{ color: 'teal' }}>treking</text> and photography.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Accomplishments
        </Heading>
        <Paragraph>
          Primary Author of xTune - An automation framework.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/vineeth-au" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @VinnieM
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/vineethmadhu/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Vineeth Madhu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/vineeth.jpg/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @vineeth.jpg
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink
            href="https://www.dropbox.com/scl/fi/x795ldz4n3genk3u1bd5t/Resume_VineethMenon.pdf?rlkey=mohithg8cb84hlok7mlnboi4j&st=6aq1rvku&dl=0"
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              <a href="https://www.dropbox.com/scl/fi/x795ldz4n3genk3u1bd5t/Resume_VineethMenon.pdf?rlkey=mohithg8cb84hlok7mlnboi4j&st=6aq1rvku&dl=0">
                Download Resume
              </a>
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
