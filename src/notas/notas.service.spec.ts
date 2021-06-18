import { Test, TestingModule } from '@nestjs/testing';

import {NotasService} from './notas.service'
import {Nota} from './nota.model'
import { NotFoundException } from '@nestjs/common';

describe('NotasService', () => {
  let notasService: NotasService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [NotasService],
    }).compile();

    
    notasService = app.get<NotasService>(NotasService);
  });

  it('should return an Array', () => {

    expect(Array.isArray(notasService.getNotas())).toEqual(true);
  });
  
  describe('when creating a nota', () => {

    it('should return a string', () => {

      const titulo = 'Nota 1';
      const contenido = 'Este es el contenido de la nota 1';
      const autor = 'Iván Luque Callejas';

      let id =  notasService.crearNota(titulo,contenido,autor);

      expect(typeof id).toEqual('string')
    })

  })

  describe('when getting notas', () => {

    it('should return an Array', () => {

      expect(Array.isArray(notasService.getNotas())).toEqual(true);
    })

  })

  describe('when getting a non-existing nota', () => {

    it('should throw an exception', () => {

     expect(() => notasService.getNota('nonexistingID')).toThrow();

    })
  })

  describe('when adding a non-existing nota to favorites', () => {

    it('should return a throw an exception', () => {

      expect(() => notasService.addNotaFav('nonexistingID')).toThrow();

    })
  })

  
  describe('when adding a nota to favorites', () => {

    it('should return the nota ID', () => {

      //We create a nota

      const titulo = 'Nota a favoritos';
      const contenido = 'Este es el contenido de la nota de favoritos';
      const autor = 'Iván Luque Callejas';

      let id = notasService.crearNota(titulo,contenido,autor);

      //We try adding the nota to favorites. It should return the same ID of the Nota we tried adding to favorites

      expect(notasService.addNotaFav(id)).toEqual(id);

    })
  })

    describe('when getting favorites', () => {

      it('should return an Array', () => {
  
        expect(Array.isArray(notasService.getNotasFav())).toEqual(true);
  
      })
    })

  });
