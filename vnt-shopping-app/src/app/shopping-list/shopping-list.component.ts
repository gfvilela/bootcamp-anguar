import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Array<any>;

  private itemToAdd: string = '';

  constructor(
    private myShoppingListService: ShoppingListService
  ) {
    myShoppingListService.findAll().subscribe(
      response => {
        if (response) {
        this.listItems = Object.keys(response).map(id => {
          let item: any = response[id];
          item.key = id;
          return item
        });
      } else {
        this.listItems = []
      }
      },
      error => {
        console.error(error);
      }
    );
    // this.listItems = this.myShoppingListService.findAll();    
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
    this.myShoppingListService.add(newItem).subscribe(
      response => {
        newItem['key'] = response['name'];
        this.listItems.unshift(newItem); 
      },
      error => { console.log('Erro') }
    );
    this.itemToAdd = ""
  }

}
