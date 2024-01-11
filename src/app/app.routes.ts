import { Routes } from '@angular/router';
import { FormEmailComponent } from './shared/form-email/form-email.component';
import { TopicsComponent } from './shared/topics/topics.component';

export const routes: Routes = [
    {
        path: '',
        component: FormEmailComponent
    },
    {
        path: 'topics',
        component: TopicsComponent
    }
];
