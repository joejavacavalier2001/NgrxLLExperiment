import { Component, OnInit } from '@angular/core';
import { State, changeStringAction } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bcomponent',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.scss']
})
export class BComponent implements OnInit {
	currentDisplayString: Observable<State>;

  	constructor(private store: Store<{stringChangers: State}>) { }

	ngOnInit() {
		this.currentDisplayString = this.store.select('stringChangers');
	}

	changeString() {
		this.store.dispatch(changeStringAction({differentString: 'New String'}));
	}
}
