import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"



const routes: Routes = [

    {
        path:'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule),
    },
    {
        path:'players',
        loadChildren: () => import('./pages/players/players.module').then( m => m.PlayersModule),
    },
    {
        path:'news',
        loadChildren: () => import('./pages/news/news.module').then( m => m.NewsModule),
    },
    {
        path:'statistics',
        loadChildren: () => import('./pages/statistics/statistics.module').then( m => m.StatisticsModule),
    },
    {
        path: '**',
        redirectTo: 'home'
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}