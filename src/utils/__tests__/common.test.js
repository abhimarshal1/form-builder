import { IsJsonString } from '../common';

describe('Common utils', () => {
  test('valid jsons', () => {
    expect(IsJsonString('{"name":"john doe"}')).toBeTruthy();
    expect(IsJsonString('somestring:(')).toBeFalsy();
  });
});
