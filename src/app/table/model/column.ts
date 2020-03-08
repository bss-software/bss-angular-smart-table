import { DataType } from './data-type';
import { Tooltip } from './tooltip';

export interface Column {
    path?: string;
    title?: string;
    sortable?: boolean;
    filtrable?: boolean;
    visible?: boolean;
    dataType?: DataType;
    limit?: number;
    tooltip?: Tooltip
}