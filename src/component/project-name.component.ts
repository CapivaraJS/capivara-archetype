export class ProjectName {

    message: string;

    constructor(){
    }

    test(){
        return 'test';
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