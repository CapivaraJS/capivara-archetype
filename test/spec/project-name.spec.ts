import { ProjectName } from '../../src/index';

describe('first test', () => {
    it('test', () => {
        let test = new ProjectName();
        expect(test.test()).toBe('test');
    });
});