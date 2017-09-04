import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';


// Maht service that make restful call

import { MathService} from './math.service';
import { AppComponent} from './app.component';

@NgModule({
	declarations:[
		AppComponent
	],
	imports:[
		BrowserModule,
		HttpModule,
		FormsModule
	],
	providers:[
		MathService
	],
	bootstrap:[AppComponent]
})

export class AppModule{ }









