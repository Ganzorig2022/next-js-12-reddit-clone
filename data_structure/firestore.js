// OPTION - 1 noSQL approach

// const USER = {
//   id: 'userId1',
//   /*

//    */
//   communities: ['commId1', 'commId2'],
// };

// OPTION - 2 SQL approach

// const USER_COMMUNITY = {
//   userId: 'userId1',
//   communityId: 'commId',
// };

// OPTION - 3 noSQL approach

const USER = {
  id: 'userId1',

  /*
   * alt+shift+A
   *
   */

  //subcollection
  communitySnippets: [
    {
      communityId: 'commId1',
      photoURL: 'someURL',
    },
    {
      communityId: 'commId2',
      photoURL: 'someURL',
    },

    /*
     *
     *
     */
    {
      communityId: 'commId10',
      photoURL: 'someURL',
    },
  ],
};

//Official Reddit 'About Community' page looks like this...
const COMMUNITY = {
  id: 'commId',
  numberOfMembers: '23243645756876',
};
