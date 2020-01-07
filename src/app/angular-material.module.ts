
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';



@NgModule({
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule {}
