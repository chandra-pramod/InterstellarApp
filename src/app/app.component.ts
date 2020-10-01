import { Component } from '@angular/core';
import { PathServiceService } from './path-service.service'
import { Planet } from './planet';
import { RouteResponse } from './route-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  planets: Planet[];
  selectedPlanet: Planet;
  response: RouteResponse;

  constructor(private pathService: PathServiceService){
    this.pathService.getNodes().subscribe(data => this.planets=data);
  }

  ngOnInit(): void {
  }

  findDistance(planet: Planet):void{
    this.pathService.getShortestPath(planet.planetNode).subscribe(data => this.response=data);
  }
}
