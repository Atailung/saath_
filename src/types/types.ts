export type Profile = {
  id: string;
  name: string;
  age: number;
  photo: string;
  verified: boolean;
  online: boolean;
  city: string;
  province: string;
  distanceKm: number;
  bio: string;
  interests: string[];
  intention: string;
  lookingFor: string;
  education: string;
  occupation: string;
  languages: string[];
  community: string;
  religion: string;
  lastActive: string;
  map: { x: number; y: number };
};

export type Message = {
  id: string;
  text: string;
  fromMe: boolean;
  at: string;
  status?: 'sent' | 'read';
};

export type Thread = {
  profileId: string;
  messages: Message[];
  unread: number;
};

export type NotificationKind = 'like' | 'message' | 'nearby' | 'system' | 'match' | 'profile';

export type AppNotification = {
  id: string;
  kind: NotificationKind;
  title: string;
  body: string;
  time: string;
  bucket: 'Today' | 'Earlier' | 'System';
  unread: boolean;
};

export type Filters = {
  ageMin: number;
  ageMax: number;
  distance: number;
  province: string | null;
  community: string | null;
  religion: string | null;
  education: string | null;
  intention: string | null;
  interests: string[];
  onlineOnly: boolean;
  verifiedOnly: boolean;
};

export type Me = {
  name: string;
  age: number;
  photo: string;
  photos: string[];
  gender: string;
  dob: string;
  bio: string;
  education: string;
  occupation: string;
  languages: string[];
  community: string;
  religion: string;
  interests: string[];
  intention: string;
  country: string;
  province: string;
  district: string;
  city: string;
  verified: boolean;
};
