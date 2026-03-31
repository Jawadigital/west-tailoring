export interface ContactInfo {
  phone: string
  email: string
  address: string
  workingHours: string
  mapCoordinates: {
    latitude: number
    longitude: number
  }
}

export interface SocialMedia {
  platform: string
  url: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  selectedService?: string
  message: string
}
