console.log("--->FABRIC_CAR<---");


// Определяем абстрактный класс Vehicle и два его подкласса — SuperX01 и SuperX02 для конкретных типов транспортных средств:
abstract class Vehicle {
    abstract run(): void;
}

class SuperX01 extends Vehicle {
    run(): void {
        console.log("SuperX01 start");
    }
}

class SuperX02 extends Vehicle {
    run(): void {
        console.log("SuperX02 start");
    }
}

// Затем определяем класс VehicleFactory для представления завода по производству автомобилей. Абстрактный класс содержит абстрактный метод produceVehicle, который является фабричным методом:


abstract class VehicleFactory {
    abstract produceVehicle(): Vehicle;
}


// На основе VehicleFactory определяются фабричные классы SuperX01Factory и SuperX02Factory для производства моделей автомобилей SuperX01 и SuperX02:

class SuperX01Factory extends VehicleFactory {
    produceVehicle(): Vehicle {
        return new SuperX01();
    }
}

class SuperX02Factory extends VehicleFactory {
    produceVehicle(): Vehicle {
        return new SuperX02();
    }
}

// result

const superX01Factory = new SuperX01Factory();
const superX02Factory = new SuperX02Factory();

const superX01Vehicle = superX01Factory.produceVehicle();
const superX02Vehicle = superX02Factory.produceVehicle();

superX01Vehicle.run();
superX02Vehicle.run();