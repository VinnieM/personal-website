import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

// TODO: Add the code and
// var data = {
// 	"perms": [{
// 		"changeDefault": "Yes",
// 		"visible": true,
// 		"notused": true,
// 		"testArray": [{
// 			"TestKey1": "TestVal1",
// 			"TestKey2": "TestVal2",
// 			"TestKey3": "TestVal3",
// 			"TestKey4": "TestVal4"
// 		}],
// 		"selectable": true,
// 		"allAccess": true,
// 		"defaultOnly": true
// 	}],
// 	"avatarUrl": "",
// 	"cartId": "8ladf51ds65ga6",
// 	"DeviceDetails": {
// 		"DeviceName": "MotoXPlay",
// 		"UDID": "459f8202b2n92h1",
// 		"Info": {
// 			"IPDetails": "192.168.3.155",
// 			"TestMgmtID": "8080",
// 			"IsPhone": true
// 		}
// 	}
// }

const Projects = () => (
  <Layout>
    <Container>
      <Title>
        Json Parser <Badge>2021-</Badge>
      </Title>
      <P>
        A JSON parser which would traverse through a JSON object and return the
        requested value.
        {/* <pre><br></br>{JSON.stringify(data, null, 2)}</pre> */}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/VinnieM/JSONParser">
            JSONParser
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
