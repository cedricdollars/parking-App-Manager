export class Vehicle {
    matricule: string
    type: VehicleType

    constructor(matricule:string, type: VehicleType) {
        this.matricule = matricule;
        this.type = type;
    }

}

export type VehicleType = "car" | "motorbike"

