interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type AllProjects = Array<{
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
  projDetails: null;
}>