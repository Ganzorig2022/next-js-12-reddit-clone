interface Community {
  id: string;
  creatorId: string;
  numberOdMembers: number;
  privacyType: 'public' | 'restricted' | 'private';
  createdAt?: Timestamp;
  imageURL?: string;
}
