export class ProjectName {

    message: string;

    constructor(){
    }

    //Metodo usado para exemplificar a execução dos testes.  //npm run test
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