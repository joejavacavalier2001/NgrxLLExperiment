import { Component, OnInit } from '@angular/core';
import { State, changeStringAction } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	title = 'NgrxLLExperiment';
	currentDisplayString: Observable<State>;

  	constructor(private store: Store<{stringChangers: State}>) { }

	ngOnInit() {
		this.currentDisplayString = this.store.select('stringChangers');
	}

	changeStringToTest2() {
		this.store.dispatch(changeStringAction({differentString: 'Test2'}));
	}
}
