import { JoinColumn, BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne } from "typeorm";
import {Users} from "./Users";
@Entity()
export class Blogs extends BaseEntity{

@PrimaryGeneratedColumn()
id!: number;
@Column()
title!: string;
@Column()
description!: string;
@Column()
userId!: number;
@ManyToOne(() => Users, user => user.blog)
@JoinColumn({ name: "userId" })
user!: Users;

}