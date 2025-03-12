import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppService } from '../app.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AppService);
  const router = inject(Router);
  if (!authService.getToken) return router.navigate(['/auth/login']);
  return true;
};
