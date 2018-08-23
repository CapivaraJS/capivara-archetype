import { Component, Controller, OnInit } from 'capivarajs';
import template from './project-name.template.html';
import style from './project-name.style.scss';

@Component({
  tag: 'cp-project-name',
  template,
  style,
  bindings: ['myParameter'],
  functions: [],
  constants: [],
})
export class ProjectName extends Controller implements OnInit {

  private visibleMessage: boolean;

  constructor(public $scope, public $element) {
    super($scope, $element);
  }

  $onInit() {
    console.log('Component created.');
  }

  toogleMessage() {
    this.visibleMessage = !this.visibleMessage;
  }

}
