import { TaskListItem } from './task-list-item.interface';
import { Button } from '../button/button.interface';

export interface TaskList {
    color?: string;
    listTitle?: string;
    icon?: string;
    listItems?: TaskListItem [];
    actions?: Button [];
    type?: string;
}
