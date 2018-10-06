import { Injectable, InjectionToken } from '@angular/core';
import { Product } from './models';

export interface ProductRepository {
  products() : Product[];
}

export class ProductRepositoryService implements ProductRepository {

  private readonly productList: Product[] = [
    { name: "aa", price: 10, promoted: false, tags: ["tani", "brzydki"] },
    { name: "bb", price: 100, promoted: true },
    { name: "AA", price: 100, promoted: true },
    { name: "BB", price: 100, promoted: true },
    { name: "aAbbAC", price: 10.0, promoted: false, tags: ["brzydki"] },
  ]

  constructor() { }

  products() {
    return this.productList;
  }
}

export const ProductRepositoryToken = new InjectionToken('ProductRepository')
