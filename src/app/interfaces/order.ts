import { Item } from './item';

export interface Order {
    '_id': string;
    'userId': string;
    'client': string;
    'products': [
      {
        'qty': number;
        'product': Item;
      }
    ];
    'status': string;
    'dateEntry': Date;
}

