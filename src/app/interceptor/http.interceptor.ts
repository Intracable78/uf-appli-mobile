import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class HttpInterceptorRequest implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<unknown>, next: HttpHandler) {

        const token = localStorage.getItem('data');
        const tokenParsed = JSON.parse(token);
        //console.log(tokenParsed.accessToken);

        if (token) {
            let clone = req.clone({
                headers: req.headers.set('Authorization', 'bearer ' + tokenParsed.accessToken)
            })
            return next.handle(clone);
        }

        return next.handle(req);


    }
}