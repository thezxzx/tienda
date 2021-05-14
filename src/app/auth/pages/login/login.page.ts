import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private menu: MenuController,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.menu.enable( false, 'first' );
  }

  form: FormGroup = this.fb.group(
    {
      email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
      password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ]
    }
  );

  ngOnInit() {
  }

  async onLogin() {
    try {
      const { email, password } = this.form.value;
      const user = await this.authService.loginWithEmailPassword( email, password );

      if ( user ) {
        const isEmailVerified = this.authService.isEmailVerified( user );
        if( isEmailVerified ) {
          this.router.navigate(['/home']);
        } else {
          this.presentAlert( 'Correo no verificado' );
        }
      }
    } catch ( err ) {
      // Activar los mensajes de errores en la interfaz.
      console.log("🚀 ~ file: login.page.ts ~ line 37 ~ LoginPage ~ onLogin ~ err", err );
      
    }
  }

  async presentAlert( message: string ) {

    const alert = await this.alertCtrl.create({
      header: '',
      message,
      buttons: ['OK']
    });

    await alert.present();

  }

}
