import { Routes } from "@angular/router";

export default [

    {
        path:'',
        loadComponent: () => import('../layout/layout.component'),
        children:[
            {
              path:'inicio',
              loadComponent: () => import("../components/iniciou/iniciou.component"),
            },
            {
              path:'',
                      redirectTo:'inicio',
                      pathMatch:'full'
            }
          ]
    },

] as Routes