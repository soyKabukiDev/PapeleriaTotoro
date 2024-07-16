import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'admin',
        loadChildren:() => import ('./administracion/aministracion-shell/administracion.routes'),
    },
    {
        path: '',
        loadChildren: () => import ('./Users/users-shell/user.route'),
    },
    {
        path:'**',
        redirectTo: '',
    }
];
