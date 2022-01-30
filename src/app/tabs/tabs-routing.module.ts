import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'data',
        loadChildren: () =>
          import('../data-tab/data.module').then((m) => m.DataPageModule),
      },
      {
        path: 'data-entry',
        loadChildren: () =>
          import('../data-entry/data-entry.module').then(
            (m) => m.DataEntryPageModule
          ),
      },
      {
        path: 'chart',
        loadChildren: () =>
          import('../chart-tab/chart.module').then((m) => m.ChartPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/data',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/data',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
