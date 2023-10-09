import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(public dialog: MatDialog) { }
}
//   openDialog() {
//     const dialogRef = this.dialog.open(DialogContentExampleDialog);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: '',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
// })
// export class DialogContentExampleDialog { }
