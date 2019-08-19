import { Component, OnInit } from '@angular/core';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.scss']
})
export class AComponent implements OnInit {

	currentDisplayString: Observable<State>;

  	constructor(private store: Store<{stringChangers: State}>) { }

	ngOnInit() {
		this.currentDisplayString = this.store.select('stringChangers');
  	}
}
