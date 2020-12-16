import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
    ]
})
export class MaterialModule {}