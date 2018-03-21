export class ProjectName {

    private componentName: string;
    private visibleMessage: boolean;

    constructor(){
    }

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