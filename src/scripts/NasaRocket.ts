import { RocketBase } from './RocketBase';

export class NasaRocket extends RocketBase {

  name: string;

  constructor() {
    super();
    this.name = 'NASA';
  }
} 