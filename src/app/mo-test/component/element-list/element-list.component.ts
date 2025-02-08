import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../service/element.service';
import { MoElement } from '../../models/element.model';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {
  elements: MoElement[] = [];
  error: string | null = null; 

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.fetchElements();
  }

  fetchElements(): void {
    this.elementService.getElements(true).subscribe({
      next: (response) => {
        this.elements = response['hydra:member'];
        console.table(this.elements )
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération des éléments';
        console.error('Erreur lors de la récupération des éléments:', err);
      }
    });
  
  }
}
