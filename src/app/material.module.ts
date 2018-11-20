import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatIconModule, MatMenuModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatIconModule, MatMenuModule, MatInputModule],
})
export class MaterialModule { }