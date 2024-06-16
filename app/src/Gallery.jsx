import { SimpleGrid, VStack, HStack, Text, Image, Box } from '@chakra-ui/react';
import { SideNav } from './SideNav.jsx';
import { TopBar } from './TopBar.jsx';
import './App.css';

function Gallery() {
  const pictures = [];
  const images = [
    './images/1.png',
    './images/2.png',
    './images/3.png',
    './images/4.jpg',
    './images/5.jpeg',
    './images/6.jpeg',
    './images/7.jpeg',
    './images/8.png',
    './images/9.png',
    './images/10.png',
    './images/11.jpg',
    '/images/12.jpg',
    './images/13.jpg',
    './images/14.jpg',
    './images/15.jpg',
    './images/16.png',
  ];
  for (let i = 0; i < images.length; i ++) {
    pictures.push(<Image src={images[i]}/>)
  }
  return (
    <div className="App" style={{overflow: 'hidden', height: '100vh', background: '#515031', color:'#fff'}}>
        <VStack display='flex' h='100%'>
            <TopBar/>
            <div style={{display: 'flex', height:'100%', flexDirection: 'horizontal', padding: "10px 50px"}}>
              <SideNav/>
              <SimpleGrid overflow='scroll' flex={3} columns={[1, 1, 1, 2]} spacing="20px">
                  {pictures}
              </SimpleGrid>
              <Box padding='0 10px' flex={1} hideBelow='md'>
                <Text fontSize='xl' mb='10px'>
                  About
                </Text>
                <Text>
                  All my life, I've loved hunting, fishing, and cooking, so I know the blessing that is a high quality knife. 
                </Text>
                <Text pt='8px'>
                  I finally got tired of knives not built to last, so I made my own and fell in love with the process of transforming steel and wood into a tool. 
                </Text>
              </Box>
            </div>
        </VStack>
    </div>
  );
}

export { Gallery };
