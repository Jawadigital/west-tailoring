import type {ContactInfo, SocialMedia} from '@/types/ContactInfo.ts'

export const contactInfo: ContactInfo = {
  phone: '+44 123456789',
  email: 'west-tailoring@gmail.com',
  address: '208 Rodbourne Rd, Swindon SN2 2AA, United Kingdom',
  workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM',
  mapCoordinates: {
    latitude: 51.562708714658925,
    longitude: -1.7995340331486926
  }
};

export const socialMedia: SocialMedia[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/tailoringpro',
    icon: 'bi-facebook',
  },
  {
    platform: 'Whatsapp',
    url: 'https://instagram.com/tailoringpro',
    icon: 'bi-instagram'
  }
];
