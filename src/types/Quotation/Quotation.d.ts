interface Quotation {
    fittingsAndAccessories: Connector[];
    connectors: Connector[];
    insideCoverings: Connector[];
    outsideCoverings: Connector[];
    edges: Edge[];
    woodTechnologyBoards: WoodTechnologyBoard[];
    designCost: any[];
    labourCost: any[];
    landBuilding: any[];
    machineCost: MachineCost[];
    overheadCost: any[];
    packingMaterial: any[];
    glass: Glass[];
    stone: any[];
    profile: Glass[];
}

interface Connector {
    type: ConnectorType;
    roomName: RoomName;
    positionNo: number;
    rowNo: number;
    quantity: number;
    positionName: string;
    objectName?: string;
    articleNumber?: string;
    manufacturerName?: ManufacturerName;
    pr_detid: string;
    active: Active;
    id: number;
    fkItemTables: number;
    itemgroupId: number;
    itemgroupPercent: number;
    productHeadid: number;
    productHeadPercent: number;
    brandid: number;
    brandPercent: number;
    overHeadPercent: number;
    marginPercent: number;
    mrpLookup: number;
    mrpLookupRupees: number;
    mrpWithPercentage: number;
    mrpWithPercentageRupees: number;
    finalAmount: number;
    finalAmountRupees: number;
    rawLengthDimension?: number | string;
    rawwidthdimension?: number | string;
    insideCovering?: string;
    insideCoveringStrength?: number;
    additionalInsideCovering?: string;
    grain?: string;
    boardGrainRotation?: string;
    outsideCovering?: string;
    outsideCoveringStrength?: number;
    additionalOutsideCovering?: string;
}

enum Active {
    Y = "Y         ",
}

enum ManufacturerName {
    Empty = "",
    Evershine = "EVERSHINE",
    Hafele = "HAFELE",
    Hettich = "HETTICH",
    Moda = "MODA",
    Olive = "OLIVE",
    Signet = "SIGNET",
    UtturkarsWoodCulture = "UTTURKARS WOOD CULTURE",
}

enum RoomName {
    SingleRoom = "Single Room",
}

enum ConnectorType {
    Accessories = "Accessories ",
    Connectors = "Connectors ",
    Fittings = "Fittings ",
    InsideCoverings = "Inside coverings ",
    OutsideCoverings = "Outside coverings ",
}

interface Edge {
    type: string;
    roomName: RoomName;
    srNo: null;
    edgeMaterialName: string;
    totalMeter: number;
    pr_detid: null;
    active: null;
    fkItemTables: number;
    itemgroupId: number;
    itemgroupPercent: number;
    productHeadid: number;
    productHeadPercent: number;
    brandid: number;
    brandPercent: number;
    overHeadPercent: number;
    marginPercent: number;
    mrpLookup: number;
    mrpLookupRupees: number;
    mrpWithPercentage: number;
    mrpWithPercentageRupees: number;
    finalAmount: number;
    finalAmountRupees: number;
}

interface Glass {
    type: GlassType;
    roomName: RoomName;
    positionNo: number;
    rowNo: number;
    quantity: string;
    positionName: string;
    objectName: string;
    finishedLengthDimensions: string;
    finishedWidthDimension: string;
    thickness: string;
    articleNumber: null;
    manufacturerName: null;
    pr_detid: string;
    active: Active;
    id: number;
    fkItemTables: number;
    itemgroupId: number;
    itemgroupPercent: number;
    productHeadid: number;
    productHeadPercent: number;
    brandid: number;
    brandPercent: number;
    overHeadPercent: number;
    marginPercent: number;
    mrpLookup: number;
    mrpLookupRupees: number;
    mrpWithPercentage: number;
    mrpWithPercentageRupees: number;
    finalAmount: number;
    finalAmountRupees: number;
}

enum GlassType {
    Glass = "Glass ",
    Profile = "Profile ",
}

interface MachineCost {
    type: string;
    roomName: RoomName;
    sr: number;
    machine: string;
    rate: number;
    unit: string;
    qty_Estimated: number;
    cost: string;
    pr_detid: string;
    active: Active;
    id: number;
    fkItemTables: number;
    mrpLookup: number;
    mrpLookupRupees: number;
    mrpWithPercentage: number;
    mrpWithPercentageRupees: number;
    finalAmount: number;
    finalAmountRupees: number;
}

interface WoodTechnologyBoard {
    type: WoodTechnologyBoardType;
    roomName: RoomName;
    positionNo: number;
    row_no: number;
    partNo: string;
    quantity: string;
    positionName: string;
    objectName: string;
    boardType: BoardType;
    finishedLengthDimensions: string;
    finishedWidthDimension: string;
    thickness: string;
    article_Number: null;
    rawLengthDimension: null | string;
    rawWidthDimension: null | string;
    boardMaterial: BoardMaterial;
    boardMaterialStrength: string;
    edgeLength_m: string;
    mSqure: string;
    grain: BoardGrainRotation;
    boardGrainRotation: BoardGrainRotation;
    workshopText: string;
    programName1: string;
    programName2: string;
    pr_detid: string;
    active: Active;
    id: number;
    fkItemTables: number;
    itemgroupId: number;
    itemgroupPercent: number;
    productHeadid: number;
    productHeadPercent: number;
    brandid: number;
    brandPercent: number;
    overHeadPercent: number;
    marginPercent: number;
    mrpLookup: number;
    mrpLookupRupees: number;
    mrpWithPercentage: number;
    mrpWithPercentageRupees: number;
    finalAmount: number;
    finalAmountRupees: number;
}

enum BoardGrainRotation {
    Empty = "",
    No = "No",
    Yes = "Yes",
}

enum BoardMaterial {
    Empty = "",
    The16MmPrelamHdhmrBslGrey = "16MM PRELAM HDHMR BSL GREY",
    The18MmPly5SidePuPaintedGlossSmokeWhite = "18MM PLY 5 SIDE PU PAINTED GLOSS SMOKE WHITE",
    The18MmPostlamPlyBslWhite = "18MM POSTLAM PLY BSL WHITE",
    The18MmPostlamPlyOslRoyalTouch26RD = "18MM POSTLAM PLY OSL ROYAL TOUCH  26 RD ",
    The18MmPvcWhite = "18MM PVC WHITE",
    The7MmPostlamPlyBslWhite = "7MM POSTLAM PLY BSL WHITE",
    The7MmPvcWhite = "7MM PVC WHITE",
}

enum BoardType {
    AluminiumProfileShutter = "aluminium profile shutter",
    BackWall = "back wall",
    BlindPanel = "Blind panel",
    DesignFloor = "Design floor",
    DrawerBack = "Drawer Back",
    DrawerBottom = "Drawer Bottom",
    Empty = "",
    Floor = "floor",
    Front = "front",
    Lid = "lid",
    SideLeft = "side left",
    SideRight = "side right",
}

enum WoodTechnologyBoardType {
    WoodTechnologyBoards = "Wood technology boards ",
}
