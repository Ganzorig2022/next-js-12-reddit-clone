import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal';
import { auth } from '@/firebase/clientApp';
import { Flex, MenuItem, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GrAdd } from 'react-icons/gr';

const Communities = () => {
  const [user] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <CreateCommunityModal
        open={open}
        handleClose={() => setOpen(false)}
        userId={user?.uid!}
      />

      <MenuItem
        width={'100%'}
        fontSize='10pt'
        _hover={{ bg: 'gray.100' }}
        onClick={() => setOpen(true)}
      >
        <Flex align={'center'}>
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </div>
  );
};

export default Communities;
