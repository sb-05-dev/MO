import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit{
  activeSection: string = 'profile';
  profileForm!: FormGroup;
  isEditing: boolean = false;
  originalValues: any; 

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.initializeProfileForm();
  }

  initializeProfileForm(): void {
    this.profileForm = this.fb.group({
      email: ['email@test.com'],
      password: ['password123'],
      telephone: ['1234567890'],
      fullName: ['Nom'],
      age: ['30'],
      imgUrl: ['https://via.placeholder.com/150'],
      badge: ['Gold Member'],
      bio: ['aucune bio'],
      roles: [['user']],
      street: ['123 Main St'],
      city: ['Conakry'],
      postalCode: ['123456'],
      country: ['GUINEA']
    });
    this.originalValues = { ...this.profileForm.value };
  }

  onCancel(): void {
    this.profileForm.reset({
      email: this.originalValues.email,
      password: this.originalValues.password,
      telephone: this.originalValues.telephone,
      fullName: this.originalValues.fullName,
      age: this.originalValues.age,
      imgUrl: this.originalValues.imgUrl,
      badge: this.originalValues.badge,
      bio: this.originalValues.bio,
      roles: this.originalValues.roles,
      street: this.originalValues.street,
      city: this.originalValues.city,
      postalCode: this.originalValues.postalCode,
      country: this.originalValues.country
    });
  
    // Revenir en mode lecture
    this.isEditing = false;
  }
  

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.onSaveProfile(); 
    }
  }

  onDeleteAccount() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce compte ?')) {
      alert('Compte supprimé');
    }
  }

  onSaveProfile(): void {
    if (this.profileForm.valid) {
      console.log('Profile updated:', this.profileForm.value);
    }
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
