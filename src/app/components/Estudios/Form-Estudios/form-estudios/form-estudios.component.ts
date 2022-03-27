import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudios } from 'src/app/components/Models/estudios';

@Component({
  selector: 'app-form-estudios',
  templateUrl: './form-estudios.component.html',
  styleUrls: ['./form-estudios.component.css']
})
export class FormEstudiosComponent implements OnInit {

  @Output() nuevoEstudio: EventEmitter<Estudios> = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      escuela: ['', Validators.required],
      nivel: ['', Validators.required],
      inicio: [new Date(), Validators.required],
      final: [new Date(), Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(event: Event){
    event.preventDefault;

      this.nuevoEstudio.emit(this.form.value);
      this.form.reset();


  }

}
