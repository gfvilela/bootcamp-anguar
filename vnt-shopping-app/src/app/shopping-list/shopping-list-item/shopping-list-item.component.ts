import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  
  @Input("item") private listItem: any;
  public deleted: boolean = false

  constructor(
    private myShoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    // console.log(this.listItem);
  }

  public removeItem() {
    this.myShoppingListService.remove(this.listItem).subscribe(
      res => {
        console.log('O item foi excluido!');
        this.deleted = true;
      }
    );
  }

  public crossItem() {
    // this.listItem.disabled = true;
    let itemEdited = {
      key: this.listItem.key,
      disabled: true
    }
    
    this.myShoppingListService.edit(itemEdited).subscribe(
      res => {
        console.log('')
        this.listItem.disabled = true;
      }
    )
  }

}
