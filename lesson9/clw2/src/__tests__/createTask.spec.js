import { renderID } from '../createTask';

export { renderID } from '../createTask';

it('length id', () => {
  const newId = renderID();

  expect(newId.length).toEqual(13);
});
