import {Address} from './address';

export class Employee {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
