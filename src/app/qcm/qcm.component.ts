import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {
  tab: [];
  taille: any;
  response: [];
  tab2: [];




  constructor(private question: QuestionService) {


  }

  ngOnInit() {
    this.question.getQuestion().subscribe((res: any) => {
      console.log(res.data);

      this.tab = res.data
      console.log(this.tab)
      this.taille = this.tab.length;




    })




  }

  update(form: NgForm) {
    let score = 0;
    this.response = form.value
    console.log(this.response)
    console.log(this.tab)
    for (let i = 0; i < this.tab.length; i++) {
      if (this.tab[i] === this.response) {
        score = score + 3;
      } else {
        score = score - 1;
      }
    }

    console.log(score)

    this.question.score(25, this.response).subscribe(res => {
      console.log(res)


    })
  }


}


