export class ProjectName {

    private componentName: string;
    private visibleMessage: boolean;

    constructor(){
    }

    //Metodo usado para exemplificar a execução dos testes.  //npm run test
    test(){
        return 'test';
    }
    
    $onInit(){
        this.componentName = 'ProjectName';
    }

    $destroy(){
        console.log('component destroyed');
    }

    toogleMessage(){
        this.visibleMessage = !this.visibleMessage;
    }

}