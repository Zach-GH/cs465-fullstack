import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Trip } from "../models/trip";

@Component({
  selector: "app-trip-card",
  templateUrl: "./trip-card.component.html",
  styleUrls: ["./trip-card.component.css"],
})
export class TripCardComponent implements OnInit {
  @Input("trip") trip: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    localStorage.removeItem("tripName");
    localStorage.setItem("tripName", trip.name);
    localStorage.removeItem("tripLength");
    localStorage.setItem("tripLength", trip.length);
    localStorage.removeItem("tripResort");
    localStorage.setItem("tripResort", trip.resort);
    localStorage.removeItem("tripPerPerson");
    localStorage.setItem("tripPerPerson", trip.perPerson);
    localStorage.removeItem("tripImage");
    localStorage.setItem("tripImage", trip.image);
    localStorage.removeItem("tripDescription");
    localStorage.setItem("tripDescription", trip.description);
    this.router.navigate(["edit-trip"]);
  }
}