import { firestoreDB } from '@/firebase/clientApp';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Icon,
} from '@chakra-ui/react';
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';

type Props = {
  open: boolean;
  handleClose: () => void;
  userId: string;
};

const CreateCommunityModal = ({ open, handleClose, userId }: Props) => {
  const [communityName, setCommunityName] = useState('');
  const [communityType, setCommunityType] = useState('public');
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [nameError, setNameError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };

  const handleCreateCommunity = async () => {
    if (nameError) setNameError('');

    // Validate the community
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (format.test(communityName) || communityName.length < 3) {
      setNameError(
        'Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.'
      );
      return;
    }

    setLoading(true);

    // Create the community document in firestore
    try {
      // Create doc ref
      const communityDocRef = doc(firestoreDB, 'communities', communityName);

      // ======= TRANSACTIONS method - All at once =======
      await runTransaction(firestoreDB, async (transaction) => {
        // similar to ==> const communityDoc = await getDoc(communityDocRef);
        const communityDoc = await transaction.get(communityDocRef);

        // Check if community is exists in db
        if (communityDoc.exists()) {
          throw new Error(`Sorry, /r${name} is taken. Try another.`);
        }

        //If valid name, create community
        // similar to ==> await setDoc(communityDocRef,{}
        transaction.set(communityDocRef, {
          creatorId: userId,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: 'public',
        });

        // Create communitySnippets  - SUBCOLLECTION
        transaction.set(
          doc(firestoreDB, `users/${userId}/communitySnippets`, communityName),
          {
            communityId: communityName,
            isModerator: true,
          }
        );
      });
      setLoading(false);
    } catch (error: any) {
      console.log('Transaction error', error);
      setNameError(error.message);
      setLoading(false);
    }
  };

  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { name },
    } = event;
    if (name === communityType) return;
    setCommunityType(name);
  };

  console.log(communityType);

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={'flex'}
            flexDirection='column'
            fontSize={15}
            padding={3}
          >
            Create a community
          </ModalHeader>
          <Box pl={3} pr={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody
              display={'flex'}
              flexDirection='column'
              padding='10px 0px'
            >
              <Text fontWeight={600} fontSize={15}>
                name
              </Text>
              <Text fontSize={11} color='gray.500'>
                Community names including capitalization cannot be changed
              </Text>
              <Text
                position='relative'
                top='28px'
                left='10px'
                width='20px'
                color='gray.400'
              >
                r/
              </Text>
              <Input
                position='relative'
                value={communityName}
                size='sm'
                pl='22px'
                onChange={handleChange}
              />
              <Text
                fontSize='9pt'
                color={charsRemaining === 0 ? 'red' : 'gray.500'}
                pt={2}
              >
                {charsRemaining} Characters remaining
              </Text>
              <Text fontSize='9pt' color='red' pt={1}>
                {nameError}
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
                <Stack spacing={2} pt={1}>
                  <Checkbox
                    colorScheme='blue'
                    name='public'
                    isChecked={communityType === 'public'}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex alignItems='center'>
                      <Icon as={BsFillPersonFill} mr={2} color='gray.500' />
                      <Text fontSize='10pt' mr={1}>
                        Public
                      </Text>
                      <Text fontSize='8pt' color='gray.500' pt={1}>
                        Anyone can view, post, and comment to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    colorScheme='blue'
                    name='restricted'
                    isChecked={communityType === 'restricted'}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex alignItems='center'>
                      <Icon as={BsFillEyeFill} color='gray.500' mr={2} />
                      <Text fontSize='10pt' mr={1}>
                        Restricted
                      </Text>
                      <Text fontSize='8pt' color='gray.500' pt={1}>
                        Anyone can view this community, but only approved users
                        can post
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    colorScheme='blue'
                    name='private'
                    isChecked={communityType === 'private'}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex alignItems='center'>
                      <Icon as={HiLockClosed} color='gray.500' mr={2} />
                      <Text fontSize='10pt' mr={1}>
                        Private
                      </Text>
                      <Text fontSize='8pt' color='gray.500' pt={1}>
                        Only approved users can view and submit to this
                        community
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg='gray.100' borderRadius='0px 0px 10px 10px'>
            <Button
              variant='outline'
              height='30px'
              mr={2}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant='solid'
              height='30px'
              onClick={handleCreateCommunity}
              isLoading={loading}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
