import {VStack, Link} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SideNav = () => {
    return(
      <VStack hideBelow='md' style={{flex: 1, background: '#515031', color: '#fff'}}>
        <Link as={RouterLink} to="/">
          Gallery
        </Link>
        <Link as={RouterLink} to="/contact">
          Contact
        </Link>
      </VStack>
    )
}

export {SideNav};
