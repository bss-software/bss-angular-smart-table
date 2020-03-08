import { Column } from './column';

export interface TableMetadata {
    filtrable: boolean;
    sortable: boolean;
    Columns: Column[]
}