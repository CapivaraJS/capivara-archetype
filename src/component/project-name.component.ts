export class ProjectName {
    public $constants;
    public $functions;
    public $bindings;

    private componentName: string;
    private visibleMessage: boolean;

    constructor(){
    }

    $onInit(){
        console.log('Component created.');
    }

    $destroy(){
        console.log('Component destroyed.');
    }

    toogleMessage(){
        this.visibleMessage = !this.visibleMessage;
    }

}