/* 
    Component created by capivara-cli https://capivarajs.github.io/
*/

import capivara from 'capivarajs';

import { ProjectName } from './component/project-name.component';

const Component = {
    /**
     * @name template
     * @description Applies the visual part of the component
     */
    template  : require('./component/project-name.template.html'),
    /**
     * @name style
     * @description Import component style
     */
    style     : require('./component/project-name.style.scss'),
    /**
     * @name constants
     * @description Declares the constants that will be accepted by component. See https://capivarajs.github.io/components.html#constants
     */
    constants: [],
    /**
     * @name functions
     * @description Declares the functions that will be accepted by component. See https://capivarajs.github.io/components.html#functions
     */
    functions: [],
    /**
     * @name bindings
     * @description Declares the variables that will be accepted by component. See https://capivarajs.github.io/components.html#bindings
     */
    bindings: [],
    /**
     * @name controller
     * @description Sets the scope of the component
     */
    controller: ProjectName
};

export default capivara.component('project-name', Component);