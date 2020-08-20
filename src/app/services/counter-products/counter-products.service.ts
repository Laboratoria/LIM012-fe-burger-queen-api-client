import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../interfaces/item';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CounterProductsService {
  private url: string;
  // public products: any = [];

  private cart = new BehaviorSubject<Array<Item>>([]); // crea una instancia de Observable que sea un array vacio
  public currentDataCart = this.cart.asObservable(); // Tenemos un observable con el valor actual del BehaviourSubject


  private numberSource = new BehaviorSubject(0);
  currentNumber = this.numberSource.asObservable();

  constructor(
    // private http: HttpClient
    ) {
    // this.url = environment.apiUrl;
  }

  // cuando seleccionas añadir: changeCart recibe el producto nuevo a añadir al carrito
  // Esta función se encarga de recibir el item que debemos agregar al carrito,
  // nos fijamos si ya existe aumentamos su cantidad,
  // sino lo agregamos y volvemos a enviar el valor a todos los observers
  public changeCart(newProduct: Item): void {
    const listCart = this.cart.getValue(); // Obtenemos el valor actual

    const currentProductObj: Item = {
      _id: newProduct._id,
      name: newProduct.name,
      price: newProduct.price,
      image: newProduct.image,
      type: newProduct.type,
      quantity: 1
  };

    if (listCart.length !== 0) { // Si no es el primer item del carrito. Si ya hay productos en el carrito
      const objIndex = listCart.findIndex((obj => obj._id === newProduct._id)); // Buscamos si ya cargamos ese item en el carrito
      if (objIndex !== -1) { // devuelve el indice si el producto ya esta en el array listCart
        const newArrOrder = listCart.map(productObj => { // recorrer listCart y guarda en nuevo arreglo
          if (productObj._id === currentProductObj._id) { // compara id de producto ya en cart con current product
            currentProductObj.quantity = productObj.quantity + 1; // Si ya cargamos uno aumentamos su cantidad
            return currentProductObj; // retornar nueva cant de producto ya existente
          } else {
              return productObj; // los productos existentes que no variaron cantidad (se mantienen igual)
            }
        });
        this.cart.next(newArrOrder); // Enviamos el array con la cant modificada a todos los Observers
      } else { // añadir nuevo producto a un carrito lleno
        const newProductInOlderList = listCart.concat(currentProductObj);
        this.cart.next(newProductInOlderList);
      }
    } else { // si no hay productos en el carrito, el producto actual se guarda en un nuevo arreglo
      const firstNewArr = listCart.concat(currentProductObj);
      this.cart.next(firstNewArr); // Enviamos el array a todos los Observers que estan escuchando nuestro Observable
    }
  }

  // Con esta función removemos un elemento del carrito y volvemos a envíar la lista de esos elementos
  // para que se propague entre los observer
  public removeElementCart(newProduct: Item): void{
    const listCart = this.cart.getValue(); // Obtenemos el valor actual de carrito
    const objIndex = listCart.findIndex((obj => obj._id === newProduct._id)); // Buscamos el item del carrito para eliminar
    if (objIndex !== -1) { // si existe ese producto en el cart podemos borrarlo
      // si volvemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].quantity = 1; // configurar la cantidad en 1 (ya que los array se modifican los valores por referencia,
      listCart.splice(objIndex, 1); // Eliminamos el item del array del carrito
    }
    this.cart.next(listCart); // Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }

// public changeQuantity(newProduct: Item): void{
//   const listCart = this.cart.getValue(); // Obtenemos el valor actual

//   const currentProductObj: Item = {
//     _id: newProduct._id,
//     name: newProduct.name,
//     price: newProduct.price,
//     image: newProduct.image,
//     type: newProduct.type,
//     quantity: 1
// };
//   if (listCart.length !== 0) {
//   const objIndex = listCart.findIndex((obj => obj._id === newProduct._id)); // Buscamos si ya cargamos ese item en el carrito
//   if (objIndex !== -1) { // devuelve el indice si el producto ya esta en el array listCart
//     const newArrOrder = listCart.map(productObj => {
//   if (productObj._id === currentProductObj._id) {
//     currentProductObj.quantity = productObj.quantity - 1;
//     }
// });
//   }}}

  changeNumber(value): void {
    this.numberSource.next(value);
  }
}
