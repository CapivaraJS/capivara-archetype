import capivara from 'capivarajs';

import { ProjectName } from './component/project-name.component';

export default capivara.component('project-name', {
    template  : require('./component/project-name.template.html'),
    controller: ProjectName
});