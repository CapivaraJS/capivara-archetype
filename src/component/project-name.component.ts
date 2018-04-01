export class ProjectName {
    public $constants;
    public $functions;
    public $bindings;

    private componentName: string;
    private visibleMessage: boolean;

    constructor(){
    }

    $onInit(){
        console.log('Params: ', this.$constants.title);
    }

    $destroy(){
        console.log('component destroyed');
    }

    toogleMessage(){
        this.visibleMessage = !this.visibleMessage;
    }

}