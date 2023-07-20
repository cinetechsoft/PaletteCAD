interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type AllProjects = Array<{
  project_Id: number;
  projectVisibleNo: string;
  projectDate: Date;
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