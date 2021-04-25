import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import {Blogs} from "./Blogs"
@Entity()
export class Users extends BaseEntity{
@PrimaryGeneratedColumn()
code_u!: number;
@Column()
cin!: number;
@Column()
nom!: string;
@Column()
date_nai!: Date;
@Column()
email!: string;
@Column()
num_tel!: string;
@Column()
password!: string;
@Column()
type!: string;
@OneToMany(() => Blogs, (blog) => blog.userId)
blog!: Blogs[];
}