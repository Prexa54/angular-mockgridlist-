import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit {

  constructor(private ds : DatastoreService) { }

  gridData = []; ;
  selCount = 0;

  ngOnInit(): void {
    this.gridData = this.ds.dataLoad;
  }

  selAll(val) {
    this.gridData.forEach((item) => {
      item.selected = val;
    });
  }

  selItem(obj, val) { debugger;
    this.selCount = 0;
    this.gridData.forEach((item) => {

      if (item.device == obj.device ) {
        item.selected = val;
      }
       
    });

    this.gridData.forEach((item) => {

      if ( item.selected )
      {
        this.selCount++;
      }
    });

  }

  downloadItem() { 
  debugger;
    let ditem = [];

    this.gridData.forEach((item) => {

      if ( item.selected && item.status == 'available' )
      {
        ditem.push(item);
      }
    });
    let str = ''

    ditem.forEach((key)  => {


      str = str + key.device + ' ==> ' + key.path + "\t    \n"  ;

     
    });

    alert(
      'Deleting Items\n\n' 
      + "\t    \n" 
      +str
      + '\t• \n' 
  

    );
  }
    

  

}
