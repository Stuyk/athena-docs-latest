---
title: '.vehicles'
order: -99
---

# {{ $frontmatter.title }}

Simply returns a list of all vehicle information. Includes the following interface for each vehicle.

## VehicleInfo

```ts
/**
 * Interface for working with / using vehicles.
 * @export
 * @interface VehicleInfo
 */
export interface VehicleInfo {
    /**
     * The display name of the vehicle.
     * @type {string}
     * @memberof VehicleInfo
     */
    display: string;

    /**
     * The model of the vehicle.
     * @type {string}
     * @memberof VehicleInfo
     */
    name: string;

    /**
     * The vehicle type; vehicle, boat, plane, etc.
     * @type {VEHICLE_TYPE}
     * @memberof VehicleInfo
     */
    type: VEHICLE_TYPE;

    /**
     * The class of the vehicle; sport, utility, etc.
     * @type {VEHICLE_CLASS}
     * @memberof VehicleInfo
     */
    class: VEHICLE_CLASS;

    /**
     * Is this vehicle purchaseable?
     * @type {boolean}
     * @memberof VehicleInfo
     */
    sell: boolean;

    /**
     * The price of this vehicle if purchaseable.
     * @type {number}
     * @memberof VehicleInfo
     */
    price: number;

    /**
     * How much storage this vehicle should have.
     * @type {(number | null)}
     * @memberof VehicleInfo
     */
    storage: number | null;
}
```

## Usage

```ts
for(let vehicleInfo of AthenaClient.data.vehicles) {
    console.log(JSON.stringify(vehicleInfo, null, '\t'));
}
```