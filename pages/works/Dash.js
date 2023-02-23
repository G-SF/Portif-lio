import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="Enterprise Dashboard">
    <Container>
      <Title>
        Enterprise Dashboard <Badge>2022-</Badge>
      </Title>
      <P>
        A WebApp to monitor all aplications and integrations of the enterprise,
        including operationals numbes and multiples visions. <p></p>This project
        have integrations with the ApexCharts to have the best performance and
        variation Charts.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <text style={{ color: 'red' }}>Private Code</text>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/SmartPhones</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React,Chakra UI,HTML,CSS,JavaScript</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/portal1.png" alt="Dash" />
      <WorkImage src="/images/works/portal2.png" alt="Dash" />
      <WorkImage src="/images/works/portal3.png" alt="Dash" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
