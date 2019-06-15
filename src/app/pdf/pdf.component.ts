import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  editorForm: FormGroup;
  editorContent: string;

  editorStyle={
    height: '300px',
    backgroundColor: '#ffffff'
  }

  config ={
    toolbar: [
      ['bold','italic','underline','color','script','size','link']
    ]
  }

  ngOnInit(){
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
 }


 onSubmit(){
   this.editorContent = this.editorForm.get('editor').value;
   console.log(this.editorForm.get('editor').value );
 }

 maxLength(e){
   if(e.editor.getLength()>1000){
     e.editor.deleteText(10,e.editor.getLength());
   }
 }


}



