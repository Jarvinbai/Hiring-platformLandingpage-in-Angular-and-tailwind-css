import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-candidates-table',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './candidates-table.component.html',
  styleUrl: './candidates-table.component.css'
})
export class CandidatesTableComponent {
  candidatedatas: any[] = [
    {Candidatename: 'Harshit', emailid:'harshit@gmail.com', Experience:'3 - 5', address:'Noida',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 2', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 3', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 4', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 5', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 6', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 7', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 8', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 9', emailid:'emailid@gmail.com', Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 10', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 11', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 12', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 13', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 14', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 15', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 16', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 17', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 18', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 19', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 20', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
    {Candidatename: 'candidate 21', emailid:'emailid@gmail.com' , Experience:'1-2', address:'1',ProcessedDate:'2024-02-23', Action:'delete'},
  ]

  currentPage: number = 1;
  pageSize: number = 5;

  filteredCandidatedata: any[] = this.candidatedatas;
  pageSizes: any[] = [5,10,20];

  ngOnInit(){
    this.visibleData();
    this.pageNumbers();
  }
  visibleData(){
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredCandidatedata.slice(startIndex,endIndex);
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
    let totalPages = Math.ceil(this.filteredCandidatedata.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }
  changePage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visibleData();
  }
  filterData(searchTerm: string): void {
    this.filteredCandidatedata = this.candidatedatas.filter((item) => {
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
