import {Injectable} from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MathService {

	private apiUrl = "http://localhost:8080/api/math";
	private headers = new Headers({'Content-Type':'application/json'});
	private options = new RequestOptions({headers: this.headers});
	constructor (private http: Http){}

	
	addNumber(_num1, _num2) {
		let bodyString = JSON.stringify({
					num1: _num1,
					num2: _num2
					}); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        const body = {
        	"num1": _num1,
			"num2": _num2
        }

		return this.http
			.post(this.apiUrl + '/add',body)
			.toPromise()
			.then(this.extractData)
			//.catch(this.handleError);

	}

	private extractData(res: Response) {
		let body = res.json();
        return body.data || {};
    }

	subtractNumber(_num1, _num2)  {
		return this.http
			.post(this.apiUrl + '/subtract',
				JSON.stringify({
					num1: _num1,
					num2: _num2
					}),
				this.options)
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);

	}

	multiplyNumber(_num1, _num2) {
		return this.http
			.post(this.apiUrl + '/multiply',
				JSON.stringify({
					num1: _num1,
					num2: _num2
					}),
				this.options)
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);

	}
	divideNumber(_num1, _num2) {
		return this.http
			.post(this.apiUrl + '/divide',
				JSON.stringify({
					num1: _num1,
					num2: _num2
					}),
				this.options)
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);

	}


	//Handle potential error

	private handleError(error: any): Promise<any> {
		console.error("An error occuer", error);
		return Promise.reject (error.message || error);
	}



}