const ParkingService = (parkingRepository: any) => {
    const { addCar, deleteCar, getAll, getOne, getCurrentCar, capacity } = parkingRepository;

    const createParkingLot = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Tempat parkir berhasil dengan kapasitas ${capacity} mobil`);
                resolve("Success create parking lot");
            }, 5000);
        });
    }

    const parking = async (newCar: ICar) => {
        const existCar = await getOne(newCar);
        if (existCar) {
            console.log(`Mobil ${newCar.carOwner} dengan Nopol ${newCar.plateNumber} sudah parkir sebelumnya`);
        } else {
            await addCar(newCar);
            console.log(`Mobil ${newCar.carOwner} dengan Nopol ${newCar.plateNumber} berhasil parkir`);
        }
    }

    const leave = async (plateNumber: string) => {
        const existCar: ICar = await getOne(Car(plateNumber, ""));
        if (existCar) {
            await deleteCar(existCar);
            console.log(`Mobil ${existCar.carOwner} dengan Nopol ${existCar.plateNumber} sudah keluar`);
        } else {
            console.log(`Mobil ${plateNumber} tidak ada`);
        }
    }

    const checkParkingLot = async () => {
        const response = await getAll();
        console.log(response);
    }

    return { createParkingLot, parking, leave, checkParkingLot }
};

module.exports = { ParkingService }