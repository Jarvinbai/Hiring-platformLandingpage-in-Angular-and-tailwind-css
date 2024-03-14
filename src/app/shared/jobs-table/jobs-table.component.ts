import { CommonModule } from '@angular/common';
import { Component,OnInit,AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-jobs-table',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './jobs-table.component.html',
  styleUrl: './jobs-table.component.css'
})
export class JobsTableComponent {
  jobtitles: any[] = [
    {jobTitle: 'FULLSTACK DEVELOPER', JobDescription:'Permanent We are looking for a highly skilled Fullstack Develop...', Location:'Noida', Department:'Internal', Experience:'3 - 5', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 2', JobDescription:'Job Description 2', Location:'Location 2', Department:'Department 2', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 3', JobDescription:'Job Description 3', Location:'Location 3', Department:'Department 3', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 4', JobDescription:'Job Description 4', Location:'Location 4', Department:'Department 4', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 5', JobDescription:'Job Description 5', Location:'Location 5', Department:'Department 5', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 6', JobDescription:'Job Description 6', Location:'Location 6', Department:'Department 6', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 7', JobDescription:'Job Description 7', Location:'Location 7', Department:'Department 7', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 8', JobDescription:'Job Description 8', Location:'Location 8', Department:'Department 8', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 9', JobDescription:'Job Description 9', Location:'Location 9', Department:'Department 9', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 10', JobDescription:'Job Description 10', Location:'Location 10', Department:'Department 10', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 11', JobDescription:'Job Description 11', Location:'Location 11', Department:'Department 11', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 12', JobDescription:'Job Description 12', Location:'Location 12', Department:'Department 12', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 13', JobDescription:'Job Description 13', Location:'Location 13', Department:'Department 13', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 14', JobDescription:'Job Description 14', Location:'Location 14', Department:'Department 14', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 15', JobDescription:'Job Description 15', Location:'Location 15', Department:'Department 15', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 16', JobDescription:'Job Description 16', Location:'Location 16', Department:'Department 16', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 17', JobDescription:'Job Description 17', Location:'Location 17', Department:'Department 17', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 18', JobDescription:'Job Description 18', Location:'Location 18', Department:'Department 18', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 19', JobDescription:'Job Description 19', Location:'Location 19', Department:'Department 19', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 20', JobDescription:'Job Description 20', Location:'Location 20', Department:'Department 20', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {jobTitle: 'JobTitle 21', JobDescription:'Job Description 21', Location:'Location 21', Department:'Department 21', Experience:'1-2', CvInProcess:'1',ProcessedDate:'2024-02-23', Action:'delete'},
  ]

  currentPage: number = 1;
  pageSize: number = 5;

  filteredJobtitle: any[] = this.jobtitles;
  pageSizes: any[] = [5,10,20];

  ngOnInit(){
    this.visibleData();
    this.pageNumbers();
  }
  visibleData(){
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredJobtitle.slice(startIndex,endIndex);
  }
  nextPage(){
    this.currentPage++;
    this.visibleData();
  }
  previousPage(){
    this.currentPage--;
    this.visibleData();
  }
  pageNumbers(){
    let totalPages = Math.ceil(this.filteredJobtitle.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }
  changePage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visibleData();
  }
  filterData(searchTerm: string): void {
    this.filteredJobtitle = this.jobtitles.filter((item) => {
      return Object.values(item).some((val: any) => {
        return val.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    this.currentPage = 1; // Reset current page when filtering
    this.visibleData();
    this.pageNumbers();
  }
  changePageSize(pageSize:any){
    this.pageSize = pageSize;
    this.visibleData();
  }
  
}
