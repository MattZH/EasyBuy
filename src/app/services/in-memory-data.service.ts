import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const commoditites = [
      { _id: 1,  name: 'Brave', price: '299', picture: '../../assets/images/brave.jpg' },
      { _id: 2,  name: 'CeramicVase', price: '149', picture: '../../assets/images/CeramicVase.jpg' },
      { _id: 3,  name: 'ClassicalPorcelain', price: '999', picture: '../../assets/images/ClassicalPorcelain.jpg' },
      { _id: 4,  name: 'DelicateElephant', price: '450', picture: '../../assets/images/DelicateElephantCouple.jpg' },
      { _id: 5,  name: 'ClassicalPorcelain', price: '543', picture: '../../assets/images/ClassicalPorcelain.jpg' },
      { _id: 6,  name: 'HeartOfTheSea', price: '100', picture: '../../assets/images/HeartOfTheSea.jpg' },
      { _id: 7,  name: 'Mysterious', price: '99', picture: '../../assets/images/Mysterious.jpg' },
      { _id: 8,  name: 'OrientalBeauty', price: '780', picture: '../../assets/images/OrientalBeauty.jpg' },
      { _id: 9,  name: 'See', price: '699', picture: '../../assets/images/See.jpg' },
      { _id: 10,  name: 'WildBeast', price: '100', picture: '../../assets/images/WildBeast.jpg' },
      { _id: 11,  name: 'Fly', price: '300', picture: '../../assets/images/Fly.jpg' },
      { _id: 12,  name: 'fiveyears', price: '500', picture: '../../assets/images/fiveyears.jpg' },
    ];
    return {commoditites};
  }
}