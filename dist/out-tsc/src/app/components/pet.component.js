"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var pet_service_1 = require('../services/pet.service');
var PetComponent = (function () {
    function PetComponent(activatedRoute, petService, router) {
        this.activatedRoute = activatedRoute;
        this.petService = petService;
        this.router = router;
        this.pet = { id: 0, name: '', gender: '' };
    }
    PetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var petId = params['id'];
            if (petId !== undefined) {
                _this.petService.getPet(petId).subscribe(function (responsePet) {
                    _this.pet = responsePet;
                    // Wait for response
                    _this.initFormData();
                });
            }
            else {
                _this.addForm = true;
            }
            _this.initFormData();
        });
    };
    PetComponent.prototype.initFormData = function () {
        // Init form data
        this.form = new forms_1.FormGroup({
            id: new forms_1.FormControl({ value: this.pet.id, disabled: !this.addForm }, forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.max(99999)
            ])),
            name: new forms_1.FormControl(this.pet.name, forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.maxLength(20)
            ])),
            gender: new forms_1.FormControl(this.pet.gender, forms_1.Validators.compose([
                forms_1.Validators.required
            ]))
        });
    };
    PetComponent.prototype.addPet = function (pet) {
        var _this = this;
        this.petService.addPet(pet).subscribe(function (response) {
            _this.router.navigateByUrl("/pets");
        }, function (error) {
            alert('Error ' + error);
        });
    };
    PetComponent.prototype.updatePet = function (pet) {
        var _this = this;
        this.petService.updatePet(pet).subscribe(function (response) {
            _this.router.navigateByUrl("/pets");
        }, function (error) {
            alert('Error ' + error);
        });
    };
    PetComponent = __decorate([
        core_1.Component({
            selector: 'pet',
            templateUrl: './pet.component.html',
            styles: ["\n    table{\n        border: 1px solid gray;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pet_service_1.PetService, router_1.Router])
    ], PetComponent);
    return PetComponent;
}());
exports.PetComponent = PetComponent;
//# sourceMappingURL=pet.component.js.map