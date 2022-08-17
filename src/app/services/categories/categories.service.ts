import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFirestore) { }

  public saveCategories(category: Category) {
    return this.db.collection('category').doc(`${category.id_category}`).set(category)
  }
  public getCategories() {
    return this.db.collection('category').valueChanges()
  }
  public getCategorieId(category_id: String) {
    return this.db.collection('category').doc(`${category_id}`).valueChanges()
  }
  public updateCategory(category: Category) {
    return this.db.collection('category').doc(`${category.id_category}`).update(category)
  }
  public deleteCategory(categoryId: String) {
    return this.db.collection('category').doc(`${categoryId}`).delete()
  }
}
