import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// Define the Enum for roles
export enum UserRole {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.MEMBER })
    role: UserRole;

    @CreateDateColumn() // Automatically handles the creation timestamp
    createdAt: Date;

    @UpdateDateColumn() // Automatically handles the update timestamp
    updatedAt: Date;
}



