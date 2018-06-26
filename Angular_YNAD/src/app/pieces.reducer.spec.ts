var deepFreeze = require('deep-freeze');
import { PiecesActions } from './pieces.actions';
import { piecesReducer } from './pieces.reducer';
import { CrudService } from './crud.service';
import * as types from './pieces.actions';

describe('App: pieces reducer', () => {
    beforeEach(() => {
        this.pieces = [];
    });

    describe('pieces reducer', () => {
        it('should return empty array if no items given', () => {
            expect(this.pieces.length).toBe(0);
            expect(this.pieces).toEqual([]);
        });

        it('should have one piece after adding one in', () => {
            this.pieces.push({idpieces: 1, title: 'Piece Titile', material: 'painting', description: 'Some description of the piece', size: '23 x 34 cm', price: '866$', status_idstatus: 1, year_idyear: 4, piece_image: 'url..', users_idusers: 5, media_idmedia: 6 });
            expect(this.pieces.length).toBe(1);
            expect(this.pieces).toEqual(this.pieces);
        });
    });
    
    describe('delete piece reducer', () => {
        it('should return the initial state', () => {
          expect(piecesReducer( undefined, {})).toEqual(CrudService.getInitialPieceState());
        });
        it('should delete a piece from the pieces array', () => {
          let piecesArrayInitial = [{
            idpieces: 1,
            title: 'Piece Title 1',
            material: 'painting'
          },
          {
            idpieces: 2,
            title: 'Piece Title 2',
            material: 'video'
          },
          {
            idpieces: 3,
            title: 'Piece Title 3',
            material: 'mixed media'
          }
          ];
          const initialState = CrudService.getInitialPieceState();
          initialState.piece = [... piecesArrayInitial];
          
          deepFreeze(initialState);
          var afterState = CrudService.getInitialPieceState();
          afterState = { ... initialState};
        
          const newState = piecesReducer(initialState, {
            type: types.PiecesActions.DELETE_PIECES,
            payload: 2
          });
          console.log('newState: ', newState.piece);
      
          expect(newState.piece.length).toBe(2);
        });
      });
});

///to do a unit test just make the command in the teminal: ng test
