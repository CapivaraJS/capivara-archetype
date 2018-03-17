import {} from 'jasmine';
import capivara from '../index';
import { ProjectName } from './project-name.component';

describe('first test', () => {    
    it('test', () => {
        expect(true).toBe(true);
    });
    
    it('test class', () => {
        expect(new ProjectName().test()).toBe('test');
    })
});