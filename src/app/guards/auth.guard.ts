import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';

export const authGuard: CanActivateFn = () => {
  const authServices = inject(AdminAPIService)
  const router = inject(Router)

  if(authServices.isAuthorized()){
    return true;
  }else{
    alert("Operation Denied... Please login!!!")
    router.navigateByUrl('')
    return false
  }
};
