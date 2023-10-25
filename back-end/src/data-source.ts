import { dbProperties } from 'properties/db.properties';
import 'reflect-metadata';
import { DataSource } from 'typeorm';


export const AppDataSource = new DataSource({ ...dbProperties });
