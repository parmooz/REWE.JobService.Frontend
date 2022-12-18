export class UserAuth {
    authCode: string = "";
    expirationTimestamp:number=0;
    
    expireDate:Date=new Date();
  
    init(): void {
      this.authCode = "";
      this.expirationTimestamp=0;
    }
  }