import { RocketBase } from './RocketBase';

export class MilitaryRocket extends RocketBase {
  name: string;

  constructor() {
    super();
    this.name = 'TOP SECRET';
  }

  launch() {
    console.log('TOP SECRET \n');
  }

}