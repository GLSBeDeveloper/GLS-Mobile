/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AllJobsPage } from './all-jobs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [
        AllJobsPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(AllJobsPage),
    ],
})
export class AllJobsPageModule { }
