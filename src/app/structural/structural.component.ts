import { Component, OnInit } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  isShow = false;
  arrSubjects = ['Angular', 'NodeJS', 'React'];
  en = '';
  vn = '';
  pick = "all";
  // newArrWords: Word[] = [];

  arrWords: Word[] = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  arrWords_Copy: Word[] = [];

  constructor() { }

  ngOnInit() {
    this.arrWords_Copy = this.arrWords;
  }

  addWord() {
    this.isShow = true;
    let newWord: Word = new Word();
    if (this.en !== "" && this.en !== undefined && this.vn !== "" && this.vn !== undefined) {
      this.isShow = false;
      newWord.id = this.arrWords.length + 1;
      newWord.en = this.en;
      newWord.vn = this.vn;
      newWord.memorized = false;
      this.arrWords.unshift(newWord); // unshift them vao dau mang, push them vao cuoi mang
      this.arrWords_Copy.unshift(newWord);
      this.filterWord();
    }
    // this.newArrWords = this.arrWords;
    this.en = '';
    this.vn = '';
    // this.filterWord();
    // this.arrWords_Copy = this.arrWords;
    console.log(this.arrWords, this.en);
  }

  deleteWord(id: number) {
    // let word_find = this.arrWords.find(e => e.id === id);
    // let index = this.arrWords.indexOf(word_find); or
    let index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
    this.arrWords_Copy.splice(index, 1);
    this.filterWord();
  }

  filterWord() {
    // console.log("value: ",this.pick);
    // if (this.pick === 'all') {
    //   this.arrWords = this.arrWords_Copy;
    // } else if (this.pick === 'true') {
    //   this.arrWords = this.arrWords_Copy;
    //   this.arrWords = this.arrWords.filter(e => e.memorized === true)
    // } else if (this.pick === 'false') {
    //   this.arrWords = this.arrWords_Copy;
    //   this.arrWords =this.arrWords.filter(e => e.memorized === false)
    // }
    //  let words_filter = this.arrWords.filter(e => e.memorized === false);
    //  console.log("value: ",word_find);
    this.arrWords = this.arrWords_Copy;
    this.arrWords = this.arrWords.filter(e => (this.pick === 'true' ? e.memorized === true : this.pick === 'false' ?  e.memorized === false : true) )
  }

}
