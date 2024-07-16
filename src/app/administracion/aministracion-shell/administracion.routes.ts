import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../layout-administracion/layout-administracion.component'),
    children:[
      {
        path:'inicio',
        loadComponent: () => import("../components/inicio/inicio.component"),
      },
      {
        path:'ventas',
        loadComponent: () => import("../components/ventas/ventas.component"),
      },
      {
        path:'inventario',
        loadComponent: () => import("../components/inventario/inventario.component"),
      },
      {
        path:'edicion',
        loadComponent: () => import("../components/edicion/edicion.component"),
      },
      {
        path:'registroUsuarios',
        loadComponent: () => import("../components/registousers/registousers.component"),
      },
      {
        path:'login',
        loadComponent: () => import("../auth/login/login.component"),
      },
      {
        path:'',
                redirectTo:'inicio',
                pathMatch:'full'
      }
    ]
  },
] as Routes;
