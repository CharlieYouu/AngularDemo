import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  private data!: string;

  constructor() {}

  setData(data: string): void {
    this.data = data;
  }
  getData(): string {
    return this.data;
  }
}
