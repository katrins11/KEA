import { TestBed, async } from '@angular/core/testing';
import { FilterArrayPipe } from './filter.pipe';


describe('App: Users', () => {
  beforeEach(() => {
      // creating list of users
    this.users = [];
    // declaring filter array pipe
    TestBed.configureTestingModule({
      declarations: [
        FilterArrayPipe
      ],
    });
  });

    describe('FilterUsers', () => {
        // asigning the pipe to the FilterArrayPipe
      let pipe = new FilterArrayPipe();
      

      it('should be instantiated', () => {
        expect(pipe).toBeDefined();
      });


      it('should return empty array if no items given', () => {
        const filtered = pipe.transform(this.users, '');
    
        expect(filtered.length).toBe(0);
        expect(filtered).toEqual([]);
      });


      it('should return items  searched for', () => {
        this.users.push({_id: '1', firstname: 'Katrin'});

        const filtered = pipe.transform(this.users , 'Katrin');
        
        expect(filtered.length).toBe(1);
        expect(filtered).toEqual(this.users);
      });


      it('Should filter correctly', () => {
        this.users.push({_id: '1', firstname :'Katrin'})
        this.users.push({_id: '2', firstname :'Birna'})
        this.users.push({_id: '3', firstname :'Anne'})
        this.users.push({_id: '4', firstname :'Jon'})

        const filtered = pipe.transform(this.users, 'Jon');

        expect(filtered.length).toBeGreaterThan(0);
        expect(filtered.length).toBe(1);
      });


      it('Should filter two items', () => {
        this.users.push({_id: '1', firstname :'Katrin'})
        this.users.push({_id: '2', firstname :'Birna'})
        this.users.push({_id: '3', firstname :'Anne'})
        this.users.push({_id: '4', firstname :'Jon'})
        this.users.push({_id: '5', firstname :'Katrin'})

        const filtered = pipe.transform(this.users, 'Katrin');

        expect(filtered.length).toBe(2);
      });


      it('checking if there are 5 users', () => {
        this.users.push({_id: '1', firstname :'Katrin'})
        this.users.push({_id: '2', firstname :'Birna'})
        this.users.push({_id: '3', firstname :'Anne'})
        this.users.push({_id: '4', firstname :'Jon'})
        this.users.push({_id: '5', firstname :'Jon'})
        
        let result = pipe.transform(this.users, '');
        expect(result.length).toBe(5);
      });


      it('should return items if no value is given', () => {
        this.users.push({_id: '1', firstname: 'Katrin'});

        const filtered = pipe.transform(this.users , null);
        expect(filtered).toEqual(this.users);
      });

    });
});

///to do a unit test just make the command in the teminal: ng test
