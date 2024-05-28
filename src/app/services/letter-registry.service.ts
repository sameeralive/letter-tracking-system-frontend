import {Injectable} from '@angular/core';
import {root_url} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LetterRegistryService {

  constructor(private http: HttpClient) {
  }

  getRegistryList(data) {
    return this.http.post(root_url + 'registry-list', data);
  }

  createRegistry(data: any, registry: any) {
    if (registry.id) {
      return this.http.post(root_url + 'registry-update', data);
    } else {
      return this.http.post(root_url + 'registry-create', data);
    }
  }

  getRegistryData(id: any) {
    return this.http.get(root_url + 'registry-view/' + id);
  }
}
