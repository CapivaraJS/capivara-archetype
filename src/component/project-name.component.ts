export class ProjectName {

    message: string;

    constructor(){
    }
    
    $onInit(){
        this.message = 'CapivaraJS';
    }

    $destroy(){
        console.log('component destroyed');
    }

    onButtonClick(){
        console.log('clicou');
    }

}