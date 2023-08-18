interface Customer {
  custID: number;
  custName: string;
  custCode: string;
  address: string;
  showroomID: number;
  showroomName: string;
  stateID: number;
  stateName: string;
  cityID: number;
  cityName: string;
  mobNo: string;
  email: string;
  contactPerson: string;
  active: string;
  customerNumber: string;
}

type AllCustomers = Customer[];

interface Influencer {
  influencer_Mast_id: number;
  influencerType_id: number;
  influencerType_Name: string;
  firm_Name: string;
  influencer_Name: string;
  address: string;
  mob_No: string;
  email_id: string;
  influencerCode: string;
}

type AllInfluencers = Influencer[];

interface Showroom {
  showroomId: number;
  showroomName: string;
  showroomCode: string;
  showroomAbbreviation: string;
  showroomType: string;
  address: string;
  phoneNo: string;
  email: string;  
  cityID: number;
  cityName:string;
  stateID: number;
  stateName:string;
  gstNo: string;
  panNo: string;  
  active: string;
  percentDiscountMarkup: number;
  showroomOverhead: number;
}

type AllShowrooms = Showroom[];

interface City {
  cityId: number;
  cityName: string;
  stateId: number;
}

type AllCities = City[];
interface State {
  stateId: number;
  stateName: string;
}

type AllStates = State[];

interface Influencer {
  influencer_Mast_id: number;
  influencerType_id: number;
  influencerType_Name: string;
  firm_Name: string;
  influencer_Name: string;
  address: string;
  mob_No: string;
  email_id: string;
  influencerCode: string;
}

type AllInfluencers = Influencer[];

interface InfluencerType {
  influencerType_id: number;
  influencerType_Name: string;
  percentDiscountMarkup: number;
  active: string;
}

type getAllInfluencerTypes = InfluencerType[];

interface Room {
  roomId: number;
  roomVisibleNo:string
  roomName: string;
  abbreviatedName: string;
  active:string;
}

type AllRooms = Room[];