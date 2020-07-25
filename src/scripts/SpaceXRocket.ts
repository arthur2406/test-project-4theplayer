import { RocketBase } from './RocketBase';

export class SpaceXRocket extends RocketBase {

  name: string;

  constructor() {
    super();
    this.name = 'SpaceX';
  }
}