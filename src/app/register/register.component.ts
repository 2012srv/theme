import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selectedCountryCode:string | null = null;
  allCountryCodes: any[] = [];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllCountryCodes();  
    this.getCountryCodeFromLatLng();  
  } 

  getCountryCodeFromLatLng() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
      });
    }
  }

  getAllCountryCodes() {
    // https://api.db-ip.com/v2/free/self for ip address and country name, code
    const urls: any[] = ['https://incight.cigniti.com/api/auth/getMobileCountryCodes', 'https://ipapi.co/json/'];
    this.dataService.getMultipleData(urls).subscribe({
      next: (v) => {        
        // console.log(v);
        this.allCountryCodes = v[0];
        this.selectedCountryCode = v[1].country_calling_code;
      },
      error: (e) => console.error('sssssss'+e),
      complete: () => console.info('complete')
    });
  }

  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();

    // Creating and array of space saperated term and removinf the empty values using filter
    let splitTerm = term.split(' ').filter(t => t);

    let isWordThere: any[] = [];

    // Pushing True/False if match is found
    splitTerm.forEach(arr_term => {
      let search = item['country_name'].toLowerCase();
      isWordThere.push(search.indexOf(arr_term) != -1);
    });

    const all_words = (this_word: any) => this_word;
    // Every method will return true if all values are true in isWordThere.
    return isWordThere.every(all_words);
  }

}
