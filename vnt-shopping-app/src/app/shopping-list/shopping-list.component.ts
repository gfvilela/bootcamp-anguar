import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Observable<any[]>;

  private itemToAdd: string = '';

  constructor(
    private myShoppingListService: ShoppingListService
  ) {
    
    this.listItems = myShoppingListService.listItemFirebase
    
   }

  ngOnInit() {
  }

  private addObjectToList() {
    // criar
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    };
    // adicionar
    this.myShoppingListService.add(newItem)
    this.itemToAdd = ""
  }

}
