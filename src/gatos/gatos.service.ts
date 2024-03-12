import { Injectable } from '@nestjs/common';
import { Gato } from 'src/gato/gato.interface';

@Injectable()
export class GatosService {

    private readonly gatos: Gato[] = [
        {
            id: 11,
            nome: "Black 1",
            raca: "Mestiça 1",
            idade: 12
        },
        {
            id: 12,
            nome: "Garfield 1",
            raca: "Desconhecida 1",
            idade: 145
        }
    ];

    findAll(): Gato[] {
        return this.gatos;
    }

}
