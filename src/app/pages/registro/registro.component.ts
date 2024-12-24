import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PostalDirectoryService } from './postal-directory.service';
import { States } from 'src/app/interfaces/address.interface';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';
import { NotSpecialCharacterDirective } from '@shared/directives/not-special-character.directive';
import { MetaTagService } from 'src/app/services/meta-tag.service';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnlyNumbersDirective,
    NotSpecialCharacterDirective
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export default class RegistroComponent implements OnInit {

  signUpForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private readonly metaTagService = inject(MetaTagService);
  private readonly addressService = inject(PostalDirectoryService);
  private readonly signupService = inject(SignupService);
  states: States[] = [];
  // dataByZip = signal<Address>({   
  //   error: false,
  //   message: '',
  //   codigo_postal: {
  //     estado: '',
  //     estado_abreviatura: '',
  //     municipio: '',
  //     centro_reparto: '',
  //     codigo_postal: '',
  //     colonias: []
  //   }
  //   });

  cols = signal<string[]>([]);

 private initSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      bussinesName: [''],
      fullName: ['', [Validators.required, Validators.min(10)]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: this.formBuilder.group({
        zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
        state: ['', [Validators.required,]],
        municipDeleg: ['', [Validators.required]],
        col: ['', [Validators.required]],
        street: ['', [Validators.required]],
      }),

    })
  }

  constructor() {
    this.initSignUpForm();
  }

  isInvalidField(field: string) {
    return this.signUpForm.get(field)?.invalid && this.signUpForm.get(field)?.touched;
  }

  // getDataByZip(): void {
  //   const zipValue = this.signUpForm.get('address.zip')?.value;

  //   if (zipValue) {
  //     this.addressService.getDatabyZip(zipValue).subscribe({
  //       next: (resp) => {
  //         console.log(resp);
  //       },
  //       error: (errMsg) => {
  //         console.log(errMsg);
  //       }
  //     });
  //   }
  // }

  ngOnInit(): void {
    this.states = this.addressService.stateofCountry;

    // this.signUpForm.get('address.zip')?.valueChanges.subscribe( (value ) => {
    //  const addressGroup = this.signUpForm.get('address') as FormGroup;
    //   if(this.signUpForm.get('address.zip')?.valid) {
    //       addressGroup.get('state')?.enable();
    //       addressGroup.get('municipDeleg')?.enable();
    //       addressGroup.get('col')?.enable();
    //       addressGroup.get('street')?.enable();
    //   } else {
    //      addressGroup.get('state')?.disable();
    //      addressGroup.get('municipDeleg')?.disable();
    //      addressGroup.get('col')?.disable();
    //      addressGroup.get('street')?.disable();
    //   }
    // })

  }

  register() {

    if (this.signUpForm.invalid) {
      this.markFormGroupTouched(this.signUpForm); 
      return;
    }

    const formValues = this.signUpForm.value;
    this.cleanForm()
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  private cleanForm() {
    this.signUpForm.reset({
      bussinesName: '',
      fullName: '',
      email: '',
      phoneNumber: '',
      address: {
        zip: '',
        state: '',
        municipDeleg: '',
        col: '',
        street: ''
      }
    });
  
     
  }

}
