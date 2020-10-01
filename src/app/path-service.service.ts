import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Planet } from "./planet";
import { RouteResponse } from "./route-response";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathServiceService {

  private url= 'http://localhost:8080/planetservices';

  constructor(private http: HttpClient) { }

  getNodes(): Observable<Planet[]>{
    return this.http.get<Planet[]>(this.url+'/planet/');
  }

  getShortestPath(node: String): Observable<RouteResponse>{
    return this.http.get<RouteResponse>(this.url+'/getdistance/'+node);
  }
}
