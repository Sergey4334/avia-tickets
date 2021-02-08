import { formatDate } from './date';
describe('formatDate', () => {
  it('testin fun formatDate', () => {
    expect(formatDate(1577014368252, 'yyyy')).toBe('2019');
  });
});