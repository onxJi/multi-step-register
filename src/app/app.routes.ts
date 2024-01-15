import { Routes } from '@angular/router';
import { FormEmailComponent } from './shared/form-email/form-email.component';
import { TopicsComponent } from './shared/topics/topics.component';
import { ResumeComponent } from './shared/resume/resume.component';

export const routes: Routes = [
    {
        path: '',
        component: FormEmailComponent
    },
    {
        path: 'topics',
        component: TopicsComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    }
];
