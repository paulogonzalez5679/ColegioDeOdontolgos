import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public carrito = [];

  constructor(
    private product: AngularFirestore, private category: AngularFirestore

  ) { }

  //Crea una nueva categoria
  public createProduct(product: Product) {
    return this.product.collection('products').doc(product.pro_id).set(product);
  }
  //Obtiene una nueva categoria
  public getProduct(documentId: string) {
    return this.product.collection('products').doc(documentId).snapshotChanges();
  }
  //Obtiene todos las categorias
  public getProducts() {
    return this.product.collection('products').snapshotChanges();
  }
  
  //Actualiza una nueva categoria
  public updateProduct(documentId: string, data: any) {
    return this.product.collection('products').doc(documentId).set(data);
  }
  //Actualiza una nueva categoria
  public updateProductState(product: Product) {
    return this.product.collection('products').doc(product.pro_id).update(product);
  }
  //Elimina una nueva categoria
  public deleteProduct(documentId: string) {
    return this.product.collection('products').doc(documentId).delete();
  }


    

  //Obtiene todos las categorias
  public getCategories() {
    return this.category.collection('category').snapshotChanges();
  }

  
  // //Obtener sub categoria
  // getSubCategory(): Observable<any[]>{
  //   //se envia el codigo de la category
  //   return this.product.collection('category').doc('03u7SPV2avAP5KY9WXjJ').collection('sub_category').snapshotChanges();
  // }




  //Obtiene la mision
  public getMision(): Observable<any[]>{
    return this.product.collection('mision').valueChanges();
  }
  
  //obtiene la vision
  public getVision(): Observable<any[]>{
    return this.product.collection('vision').valueChanges();
  }

 
}
