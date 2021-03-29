export class Vehicle {
    ref: string
    type: VehicleType

    constructor(ref:string, type: VehicleType) {
        this.ref = ref;
        this.type = type;
    }

}

export type VehicleType = "car" | "motorbike" | "handicaped"

