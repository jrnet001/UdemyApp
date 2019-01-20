import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AuthGuard } from './_guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

export const appRoutes: Routes = [

{path: '', component: HomeComponent},
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'members', component: MemberListComponent},
        {path: 'messages', component: MessagesComponent},
        {path: 'lists', component: ListsComponent}
    ]
},
{path: '**', redirectTo: '', pathMatch: 'full'}
];
