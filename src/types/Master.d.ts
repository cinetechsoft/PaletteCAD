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
  showroomType: string;
  gstNo: string;
  panNo: string;
  cityId: number;
  address: string;
  stateId: number;
  phoneNo: string;
  email: string;
  active: string;
  percentDiscountMarkup: number;
  showroomAbbreviation: string;
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

interface Item {
  itemId: number;
  itemName: string;
  itemVisibleNo: string;
  salesItemCode: string;
  articleCode: string;
  salesCode: string;
  venderCode: string;
  itemGroupId: number;
  itemGroup: string;
  itemGroupId1: number;
  itemGroup1: string;
  itemGroupId2: number;
  itemGroup2: string;
  unitId: number;
  unit: string;
  hsnCode: string;
  itemDescription: string;
  productId: number;
  productName: string;
  brandId: number;
  brandName: string;
  edgeBandColorId: number;
  edgeBandColor: string;
  thicknessInMMId: number;
  thicknessInMM: string;
  width: number;
  length: number;
}
type getAllItems = Item[];

interface ItemGroup {
  itemGroupId: number;
  itemGroup: string;
}
type getItemGroups = ItemGroup[];

interface ItemGroup1 {
  itemGroupId1: number;
  itemGroup1: string;
}
type getItemGroups1 = ItemGroup1[];

interface ItemGroup2 {
  itemGroupId2: number;
  itemGroup2: string;
}
type getItemGroups2 = ItemGroup2[];

interface EdgeBandColor {
  edgeBandColorId: number;
  edgeBandColor: string;
}
type getEdgeBandColors = EdgeBandColor[];

interface Thickness {
  thicknessInMMId: number;
  thicknessInMM: string;
}
type getThickness = Thickness[];

interface Product {
  productId: number;
  product: string;
}
type getProducts = Product[];

interface Brand {
  brandId: number;
  brand: string;
}
type getBrands = Brand[];

interface Unit {
  unitId: number;
  unit: string;
}
type getUnits = Unit[];

interface Room {
  roomId: number;
  roomVisibleNo: string;
  roomName: string;
  abbreviatedName: string;
  active: string;
}
type AllRooms = Room[];
