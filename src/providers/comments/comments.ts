import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommentsProvider } from './ICommentsProvider';
import { ExampleComment } from '../../models/example';

/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider implements ICommentsProvider {

  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(public http: HttpClient) {
    console.log('Hello CommentsProvider Provider');
  }

  getAllComments(): Promise<ExampleComment[]> {
    // throw new Error("Method not implemented.");
    let subscribe = this.http.get<ExampleComment[]>(`${this.baseUrl}/comments/`);
    return subscribe.toPromise();
  }
  getComment(commentId: string): Promise<ExampleComment> {
    // throw new Error("Method not implemented.");
    let subscribe = this.http.get<ExampleComment>(`${this.baseUrl}/comments/${commentId}`);
    return subscribe.toPromise();
  }
}
