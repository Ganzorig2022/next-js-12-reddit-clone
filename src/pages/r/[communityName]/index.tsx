import Header from '@/components/Community/Header';
import NotFound from '@/components/Community/NotFound';
import { firestoreDB } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import safeJsonStringify from 'safe-json-stringify';

type Props = {
  communityData: Community;
};

const CommunityPage = ({ communityData }: Props) => {
  //   if (!communityData) {
  //     return <NotFound />;
  //   }

  return (
    <>
      <Header communityData={communityData} />
    </>
  );
};

export default CommunityPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log('GET SERVER SIDE PROPS RUNNING');

  try {
    const communityRef = doc(
      firestoreDB,
      'communities',
      context.query.communityName as string
    );

    const communityDoc = await getDoc(communityRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }) //needed for timestamp
            )
          : '',
      },
    };
  } catch (error) {
    //could error page here
    console.log('getServerSideProps error', error);
  }
};
