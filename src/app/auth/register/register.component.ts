import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';
import { passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  get passwordsGroup():FormGroup{
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  passwordControl =new FormControl('', [Validators.required, Validators.minLength(5)]);
  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      //TODO pass == repass
      'repass': new FormControl(null,[passwordMatch(this.passwordControl)]),
    }),


  })
  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }
  handleRegister():void{
    // console.log(this.registerFormGroup.value)
    const body:RegisterModel={
    username:this.registerFormGroup.value.username,  
    password:this.registerFormGroup.value.passwords.password,  
    }
    // const userData:Object={};
    // console.log(body)
    // return body;
    this.userService.register$(body).subscribe(()=>{
      this.router.navigate(['/home']);
    })
  }
}
