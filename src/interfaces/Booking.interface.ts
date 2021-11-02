export interface Booking {
  client?: {
    firstName: string,
    lastName: string,
    phone: string
  },
  sessionType?: 'single' | 'couple' | 'family',
  day: number,
  month: number,
  hour: number
}
