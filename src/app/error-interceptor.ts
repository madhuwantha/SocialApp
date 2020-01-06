import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ErrorComponent} from './error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor( private dialog: MatDialog ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse ) => {
        let errorMassage = 'An unknown error occurred!';
        if (error.error.error.message) {
         // console.log(error);
          errorMassage = error.error.error.message;
        }
        this.dialog.open(ErrorComponent, { data: {message: errorMassage}});
        return throwError(error);
      })
    );
  }
}
