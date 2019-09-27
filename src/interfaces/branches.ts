import {_init} from '../utils/interfaces'
export interface IAddress {
  street: string
  province: string
  city: string
  zipcode: string
}
export interface IContactList {
  _id: string
  type: string
  'number': number
  isPrimary: boolean
}
export interface ILocation {
  location: string
  coordinates: number[]
}
export interface IDisplayedQueue {
  bookingId: string
  queueGroupId: string
  bookingNo: string
  source?: string
}
export default interface BusinessBranches extends _init{
  branchName: string
  email: string
  bannerUrl: string
  about: string
  contactNo: string
  country: string
  avatarUrl: string

  businessNameId: string
  partnerId: string
  
  autoAssignQueue: boolean
  isSuspended: boolean
  isVerified: boolean
  isFirstSignIn: boolean

  totalActiveQueues: number
  noOfDevices: number
  counter: number
  status: number
  notificationCount: number
  totalQueues: number
  totalReservations: number
  lastSignIn: number
  location: ILocation
  contacts: Array<IContactList>
  address: IAddress
  displayedQueue: IDisplayedQueue
}