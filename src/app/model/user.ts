import { 
    BeforeInsert, 
    BeforeUpdate, 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";
import bcrypt from 'bcryptjs';

@Entity('User')
export default class User {
   @PrimaryGeneratedColumn('increment')
   id: number

   @Column('varchar', { length: 50 })
   name: string

   @Column('varchar', { length: 50 })
   email: string

   @Column('varchar', { length: 50 })
   password: string
   
    @BeforeInsert()
    @BeforeUpdate()
    passwordHash(){
      this.password = bcrypt.hashSync(this.password, 8)
    }
}