export interface IAPIErrorResponse {
    error: string;
    message: string;
    path: string;
    status: number;
    timestamp: string;
  };
  
  export interface IAuthResponse {
    id: number;
    name: string;
    accessToken: string;
    refreshToken: string;
    username: string;
    roles: string;
    address: string;
    email: string;
    contactNo: string;
    nic: string
  }
  