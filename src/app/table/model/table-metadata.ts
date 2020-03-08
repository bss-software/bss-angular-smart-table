import { Column } from './column';

export interface TableMetadata {
    filtrable: boolean;
    sortable: boolean;
    columns: Column[]
}