import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from "../services/trip-data.service";

@Component({
  selector: "app-edit-trip",
  templateUrl: "./edit-trip.component.html",
  styleUrls: ["./edit-trip.component.css"],
})
export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit() {

    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate([""]);
      return;
    }

    // retrieve stashed tripId
    let tripName = localStorage.getItem("tripName");
    if (!tripName) {
      alert("Something wrong, couldn't find where I stashed tripName!");
      this.router.navigate([""]);
      return;
    }

    let tripLength = localStorage.getItem("tripLength");
    if (!tripLength) {
      alert("Something wrong, couldn't find where I stashed tripLength!");
      this.router.navigate([""]);
      return;
    }

    let tripResort = localStorage.getItem("tripResort");
    if (!tripResort) {
      alert("Something wrong, couldn't find where I stashed tripResort!");
      this.router.navigate([""]);
      return;
    }

    let tripPerPerson = localStorage.getItem("tripPerPerson");
    if (!tripPerPerson) {
      alert("Something wrong, couldn't find where I stashed tripPerPerson!");
      this.router.navigate([""]);
      return;
    }

    let tripImage = localStorage.getItem("tripImage");
    if (!tripImage) {
      alert("Something wrong, couldn't find where I stashed tripImage!");
      this.router.navigate([""]);
      return;
    }

    let tripDescription = localStorage.getItem("tripDescription");
    if (!tripDescription) {
      alert("Something wrong, couldn't find where I stashed tripDescription!");
      this.router.navigate([""]);
      return;
    }

    console.log("EditTripComponent#onInit found tripCode " + tripCode);
    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: [tripName, Validators.required],
      length: [tripLength, Validators.required],
      start: ["", Validators.required],
      resort: [tripResort, Validators.required],
      perPerson: [tripPerPerson, Validators.required],
      image: [tripImage, Validators.required],
      description: [tripDescription, Validators.required],
    });

    console.log(
      "EditTripComponent#onInit calling TripDataService#getTrip('" +
        tripCode +
        "')"
    );

    this.tripService.getTrip(tripCode).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[0]);
    });

    this.tripService.getTrip(tripName).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[1]);
    });

    this.tripService.getTrip(tripLength).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[2]);
    });

    this.tripService.getTrip(tripResort).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[3]);
    });

    this.tripService.getTrip(tripPerPerson).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[4]);
    });

    this.tripService.getTrip(tripImage).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[5]);
    });

    this.tripService.getTrip(tripDescription).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[6]);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value).then((data) => {
        console.log(data);
        this.router.navigate([""]);
      });
    }
  }
  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }
}