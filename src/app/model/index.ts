import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Service')
class Service {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    marketStatus: boolean;

    @Column('integer')
    price: number

    @Column('float')
    founds: number

    @Column('float')
    size: number
    
}

export default Service