interface Project {
    project_Id: number;
    pVisibleNo: string;
    prDate: Date;
    version: string;
    custName: string;
    custAddress: string;
    custContactNo: string;
    custContactPer: string;
    active: string;
    emailId: string;
    custId: number;
    showroomId: number;
    influencerId: number;
    projDetails: ProjDetail[];
}

interface ProjDetail {
    pr_detid: number;
    project_Id: number;
    excelSrNo: number;
    excelPathnFileName: string;
    projectType: number;
    designCostFromExcel: string;
    machineCostFromExcel: string;
    labourCostFromExcel: string;
    landAndBuildingFromExcel: string;
    overheadsFromExcel: string;
    packingMaterialFromExcel: string;
    percentage: number;
    margin: number;
    active: string;
    roomId: number;
}
