/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Employee} from './employee';

describe('User', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
