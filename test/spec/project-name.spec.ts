import {} from 'jasmine';
import { ProjectName } from '../../src/project-name/project-name.component'

describe('first test', () => {    
    it('test', () => {
        expect(true).toBe(true);
    });
    
    it('test class', () => {
        expect(new ProjectName().test()).toBe('test');
    })
});