import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  logo = '../assets/img/wookull.png';

  @ViewChild("nameInput") nameInput;
  @ViewChild("content") content;
  @ViewChild("positionInput") positionInput;
  @ViewChild("homeworkInput") homeworkInput;

  constructor(
    private render:Renderer2,
    private el:ElementRef
    ){}

  employees = [];	

  model:any = {};
  model2:any = {};
  showUpdate: boolean = true;
  showHomeworks: boolean = false;

  addEmployee():void {
    var name = this.nameInput.nativeElement.value;
    var position = this.positionInput.nativeElement.value;
    var homework = this.homeworkInput.nativeElement.value;
    if(name != "" && position != "" && homework != ""){
      this.employees.push(this.model);
      this.model = {};
      const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      toast({
        type: 'success',
        title: 'Tarea Agregada'
      })
      if(this.showHomeworks == false){
        this.showHomeworks = true;
      }
    }else{
      swal({
        type: 'error',
        title: 'Te falta llenar mas campos',
        showConfirmButton: false,
        timer: 1500
        });
    }
  }
  deleteEmployee(i):void {
  	this.employees.splice(this.value,1);
    const homeworkDeleted = swal.mixin({
      toast: true,
      position:'top-end',
      showConfirmButton: false,
      timer: 3000
    })

    homeworkDeleted({
      type: 'success',
      title: 'Tarea Eliminada'
    })
    if(this.employees.length == 0){
      console.log("klsjdkla");
      this.showHomeworks = false;
    }
  }
  value;
  editEmployee(i):void {
  	this.showUpdate = false;
  	this.model2.name = this.employees[i].name;
  	this.model2.position = this.employees[i].position;
  	this.model2.homework = this.employees[i].homework;
  	this.value = i;
  }
  updateEmployee():void {
  	this.showUpdate = true;
  	let i = this.value;
  	for(let j = 0; j < this.employees.length; j++){
  		if(i == j){
  			this.employees[i] = this.model2;
  			this.model2 = {};
        const updateHomework = swal.mixin({
          toast: true,
          position:'top-end',
          showConfirmButton: false,
          timer: 3000
        })
        updateHomework({
          type: 'success',
          title: 'Tarea Editada'
        })
  		}
  	}
  }
}
