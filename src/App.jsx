import Cars from "./Cars/Cars"

// PROPS
// DRY

const carsData = [
  {
    imgUrl: "https://img5.lalafo.com/i/posters/original_webp/f5/f7/2a/prodau-ili-menau-id-41488113-813063575.webp",
    Name: "Продаю автомобиль",
    carsUrl: "./src/img/img.svg",
    carsUrl2: "./src/img/img2.svg",
    carsP: "Lexus GX: 2022 г., 4.6 л, Автомат, Бензин, Внедорожник",
    carsBtn: "PRO",
    carsh4: "Автор",
    carskgs: "5 642 000",
    carsusd: "65 000",
    carsTime: "10.12.2024 / 1:03",
    carsh1: "Позвонить",
  },
  {
    imgUrl: "https://img5.lalafo.com/i/posters/original_webp/69/ed/4a/prodam-lexus-es-202205-id-39465699-805588443.webp",
    Name: "Продаю автомобиль",
    carsUrl: "./src/img/img.svg",
    carsUrl2: "./src/img/img2.svg",
    carsP: "Lexus ES: 2022 г., 2.5 л, Вариатор, Гибрид, Седан",
    carsBtn: "PRO",
    carsh4: "Автор",
    carskgs: "3 732 400",
    carsusd: "43 000",
    carsTime: "10.12.2024 / 14:48",
    carsh1: "Позвонить",
  },
  {
    imgUrl: "https://img5.lalafo.com/i/posters/original_webp/ed/6e/25/mercedes-benz-c300-koreec-2022-god-vypuska-20-id-41939162-810792687.webp",
    Name: "Продаю автомобиль",
    carsUrl: "./src/img/img.svg",
    carsUrl2: "./src/img/img2.svg",
    carsP: "Mercedes-Benz C-Class: 2022 г., 2 л, Автомат, Бензин, Седан",
    carsBtn: "PRO",
    carsh4: "Автор",
    carskgs: "4 513 600",
    carsusd: "52 000",
    carsTime: "14.11.2024 / 18:31",
    carsh1: "Позвонить",
  },
  {
    imgUrl: "https://img5.lalafo.com/i/posters/api_webp/9f/7b/94/prodau-mersedes-glc-43-amg-id-39203611-813441590.webp",
    Name: "Продаю автомобиль",
    carsUrl: "./src/img/img.svg",
    carsUrl2: "./src/img/img2.svg",
    carsP: "Mercedes-Benz GLC-class: 2017 г , Автомат, Дизель, Кроссовер",
    carsBtn: "PRO",
    carsh4: "Автор",
    carskgs: "3 385 200",
    carsusd: "39 000",
    carsTime: "02.12.2024 / 20:21",
    carsh1: "Позвонить",
  },
  {
    imgUrl: "https://img5.lalafo.com/i/posters/api_webp/31/c7/3e/bmw-x1-xdrive-m-sport-id-47157343-814074227.webp",
    Name: "Продаю автомобиль",
    carsUrl: "./src/img/img.svg",
    carsUrl2: "./src/img/img2.svg",
    carsP: "BMW X1: 2024 г., 2 л, Робот, Бензин",
    carsBtn: "PRO",
    carsh4: "INTER-CAR Автосалон",
    carskgs: "4 166 400",
    carsusd: "48 000",
    carsTime: "12.12.2024 / 10:35",
    carsh1: "Позвонить",
  },
  {
    imgUrl: "https://img5.lalafo.com/i/posters/original_webp/fb/ea/12/srocno-v-svazi-s-rassireniem-biznesa-id-52446337-813181520.webp",
    Name: "Продаю автомобиль",
    carsUrl: "./src/img/img.svg",
    carsUrl2: "./src/img/img2.svg",
    carsP: "BMW 5 series: 2018 г., 3 л, Автомат, Бензин, Седан",
    carsBtn: "PRO",
    carsh4: "INTER-CAR Автосалон",
    carskgs: "3 499 840",
    carsusd: "34 800",
    carsTime: "12.12.2024 / 9:51",
    carsh1: "Позвонить",
  },
]

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {carsData.map(cars => {
        return <Cars
        imgUrl={cars.imgUrl}
        carsName={cars.Name}
        carsUrl={cars.carsUrl}
        carsUrl2={cars.carsUrl2}
        carsP={cars.carsP}
        carsBtn={cars.carsBtn}
        carsh4={cars.carsh4}
        carskgs={cars.carskgs}
        carsusd={cars.carsusd}
        carsTime={cars.carsTime}
        carsh1={cars.carsh1}
         />

      })}
    </div>
  )
}

export default App