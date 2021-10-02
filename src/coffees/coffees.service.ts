import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll({ limit, offset }) {
    return [...this.coffees];
  }

  findOne(id: string) {
    const coffee = this.coffees.find(({ id: coffeeId }) => coffeeId === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id);
    if (coffee) {
      // update coffee
    }
  }

  remove(id: string) {
    const coffeIndex = this.coffees.findIndex(
      ({ id: coffeeId }) => coffeeId === +id,
    );
    if (coffeIndex >= 0) {
      this.coffees.splice(coffeIndex, 1);
      return;
    }
    throw new NotFoundException(`Coffee #${id} not found`);
  }
}
