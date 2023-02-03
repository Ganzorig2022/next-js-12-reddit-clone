import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import Directory from './Directory';
import RightContent from './RightContent/RightContent';

type Props = {};

const Navbar = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center'>
        <Image src='/images/redditFace.svg' height='30px' />
        <Image
          src='/images/redditText.svg'
          height='46px'
          display={{ base: 'none', md: 'unset' }} //responsive
        />
      </Flex>
      <Directory />
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;