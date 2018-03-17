/* 
    Component created by capivara-cli https://capivarajs.github.io/
*/

import capivara from 'capivarajs';
import { ProjectName } from './component/project-name.component';

const Component = {
    template  : require('./component/project-name.template.html'),
    style     : require('./component/project-name.style.scss'),
    controller: ProjectName
};

export default capivara.component('project-name', Component);