import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MusicModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MusicModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule,
        MusicModule,
        FormsModule,
        ReactiveFormsModule,
        PageHeaderModule,
        MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,],
    declarations: [MusicComponent]
})
export class MusicsModule { }
