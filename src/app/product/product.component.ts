import { Component } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
[x: string]: any;
   id: number = 306062;
   name: string = 'Смартфон Apple iPhone 11 64GB Slim Box White (MHDC3)';
   description: string = 'Нова система двох камер не залишить нікого з ваших друзів за кадром. Найшвидший процесор iPhone і потужний акумулятор дозволять більше робити і витрачати менше часу на підзарядку. А найвищу якість відео на iPhone означає, що ваші історії стануть ще яскравіше і детальніше.  ';
   price: number = 600;
   rom: number = 64;
   ram: number = 4;
   currency: string = '$';
  BtClick()
  {
    console.log(Event);
  }
}
export class MyComponent {
  imageUrl: string = 'https://img.ktc.ua/img/l/31/8cd9c1e9d2b62bbf247d8d511023bd36.jpg';
}

