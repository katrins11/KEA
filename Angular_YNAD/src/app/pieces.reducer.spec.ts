var deepFreeze = require('deep-freeze');
import { PiecesActions } from './pieces.actions';

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
});

///to do a unit test just make the command in the teminal: ng test
