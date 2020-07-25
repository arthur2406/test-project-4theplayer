import { MilitaryRocket } from './MilitaryRocket';
import { NasaRocket } from './NasaRocket';
import { SpaceXRocket } from './SpaceXRocket';
import { RocketBase } from './RocketBase';


export class StartPort {

  rocketClasses = [MilitaryRocket, NasaRocket, SpaceXRocket];

  getAllRockets(): Array<RocketBase> {

    const rockets: Array<RocketBase> = [];

    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * Math.floor(3));
      rockets.push(new this.rocketClasses[index]);
    }

    return rockets;
  }
}