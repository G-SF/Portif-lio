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
  chakra,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import ImageNext from 'next/image'

const ProfileImage = chakra(ImageNext, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
}

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
        Hello, I&apos;m a Web and AI Developer.
      </Box>

      <Box display={{ md: 'flex' }} padding="1.0em">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gabriel Smangorzewski
          </Heading>
          <p>2rd year Big Data & AI. PUC-PR College. (Full Stack Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/perfil2.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading as="h2" variant="section-title" margin="1.0rem">
            About me
          </Heading>
          <Paragraph>
            Hello! 👋 I am Gabriel Smangorzewski Floriano a 2rd year Big Data &
            Analytic Intelligence undergrad at Pontifícia Universidade Católica
            do Paraná. I Love talking and resolve complexing codes; problems
            involving JavaScript, Python, React, and any other programming
            language. (I Really love this.)
            <br></br>
            When I'm not coding, you'll find me watching movies, hanging and
            playing out with my friends. I also love read science and A.I books.
            (This is my second love.)
          </Paragraph>
        </Box>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Curitiba, Paraná -Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2004</BioYear>
          Played my first video game and love it
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>I had my first contact with a computer
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Started my casual studies with codes (at the time with PHP)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>I went to college with 90% passing merit
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>My first job as a developer
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>Start working with A.I´s
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I really ♥
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: 'pink' }}>Games</text>, Puzzles ,{' '}
          <text style={{ color: 'pink' }}>Chess</text>, Read, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My ⭐ Skills
        </Heading>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Carousel
            swipeable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            slidesToSlide={2}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel"
            arrows={false}
            renderDotsOutside={true}
          >
            <img
              width="50%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
            />
            <img
              width="60%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <img
              width="50%"
              src="https://img.icons8.com/officexs/480/ibm-watson.png"
            />
            <img
              width="50%"
              src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png"
            />
            <Image
              width="50%"
              src="https://uipath.com/cdn-cgi/image/format=auto/https://marketplace-cdn.uipath.com/files/miscellaneous/9211979d-3415-43bc-bc56-fd2bb8a6c60a.png"
            />
          </Carousel>
        </Box>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/G-SF" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                G-SF
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/gabriel-smangorzewski-0a93b9141/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Gabriel Smangorzewski
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/gaabreuz/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Gaabreuz
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink
            href="mailto:gabrielsmangor@gmail.com"
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              <a href="mailto:gabrielsmangor@gmail.com">Contact me</a>
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
